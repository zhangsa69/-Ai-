"""Service: Knowledge retrieval (Weaviate BM25 + vector) + LLM chat."""

import json
import logging
from typing import AsyncIterator, Dict, List, Optional

import httpx

log = logging.getLogger("dify")
TIMEOUT = 60.0
STREAM_TIMEOUT = 120.0  # 流式响应读超时（秒），避免长文本回复断连

# 流式连接使用独立超时配置 — read 超时设为 None 避免慢模型断连
import httpx as _httpx
STREAM_TIMEOUT_CONFIG = _httpx.Timeout(connect=15.0, read=None, write=30.0, pool=10.0)

WEAVIATE_URL = "http://localhost:8081"
WEAVIATE_KEY = "your-weaviate-api-key"


class DifyRetrievalService:
    """知识库检索 — 直连 Weaviate，BM25 + 向量混合."""

    def __init__(self, base_url: str = "", api_key: str = "", dataset_id: str = ""):
        self.dataset_id = dataset_id
        self.dify_base_url = base_url.rstrip("/") if base_url else ""
        self.dify_api_key = api_key
        self.collection = f"Vector_index_{dataset_id.replace('-', '_')}_Node" if dataset_id else ""
        # 有效文档 ID 缓存: (timestamp, ids)
        self._valid_doc_cache = None
        self._VALID_DOC_TTL = 60  # 秒

    async def _get_valid_doc_ids(self) -> List[str]:
        """从 Dify API 获取当前知识库中有效（enabled + indexing completed）的文档 ID 列表.
        失败时返回空列表（调用方据此跳过过滤，保证检索可用）."""
        import time
        now = time.time()
        if self._valid_doc_cache and now - self._valid_doc_cache[0] < self._VALID_DOC_TTL:
            return self._valid_doc_cache[1]

        ids: List[str] = []
        if self.dify_base_url and self.dify_api_key and self.dataset_id:
            try:
                url = f"{self.dify_base_url}/v1/datasets/{self.dataset_id}/documents?page=1&limit=100"
                async with httpx.AsyncClient(timeout=10.0) as client:
                    r = await client.get(url, headers={"Authorization": f"Bearer {self.dify_api_key}"})
                    if r.status_code == 200:
                        data = r.json().get("data", [])
                        ids = [d["id"] for d in data
                               if d.get("enabled") is True and d.get("indexing_status") == "completed"]
                    else:
                        log.warning("Dify documents API status %s", r.status_code)
            except Exception as e:
                log.warning("Fetch valid doc ids failed: %s", e)
        self._valid_doc_cache = (now, ids)
        return ids

    @staticmethod
    def _where_whitelist(valid_ids: List[str]) -> str:
        """构造白名单 where 子句（Or + Equal 列表）。空列表返回 ''（不过滤）."""
        if not valid_ids:
            return ""
        ops = ",".join(
            '{operator:Equal,path:["document_id"],valueString:"' + i.replace('"', '\\"') + '"}'
            for i in valid_ids
        )
        return ",where:{operator:Or,operands:[" + ops + "]}"

    async def retrieve(self, query: str, top_k: int = 3) -> List[Dict]:
        headers = {"Authorization": f"Bearer {WEAVIATE_KEY}", "Content-Type": "application/json"}

        # 获取有效文档白名单（Dify API 失败返回空 → 跳过过滤）
        valid_ids = await self._get_valid_doc_ids()
        where = self._where_whitelist(valid_ids)

        # 1. BM25 keyword search
        bm25 = await self._bm25_search(query, top_k, headers, where)
        if bm25:
            return bm25

        # 2. Vector similarity search via SiliconFlow embedding
        vector_results = await self._vector_search(query, top_k, headers, where)
        if vector_results:
            return vector_results

        # 3. Last resort: return any available documents
        return await self._fallback(top_k, headers, where)

    async def _bm25_search(self, query: str, top_k: int, headers: dict, where: str = "") -> List[Dict]:
        escaped = query.replace('"', '\\\\"').replace("\n", " ")
        graphql = "{Get{" + self.collection + "(limit:" + str(top_k) + where + ",bm25:{query:\"" + escaped + "\"}){text document_id _additional{score}}}"
        try:
            async with httpx.AsyncClient(timeout=TIMEOUT) as client:
                r = await client.post(f"{WEAVIATE_URL}/v1/graphql", headers=headers, json={"query": graphql})
                if r.status_code != 200:
                    return []
                data = r.json()
                items = data.get("data", {}).get("Get", {}).get(self.collection, [])
                return [self._parse_item(item) for item in items if item.get("text")]
        except Exception as e:
            log.warning("BM25 failed: %s", e)
            return []

    async def _vector_search(self, query: str, top_k: int, headers: dict, where: str = "") -> List[Dict]:
        """Embed query via SiliconFlow, then nearVector search Weaviate."""
        from database import AsyncSessionLocal
        from sqlalchemy import select
        from models import SystemConfig

        # Get SiliconFlow config from DB
        try:
            async with AsyncSessionLocal() as session:
                result = await session.execute(select(SystemConfig))
                cfgs = {c.key: c.value for c in result.scalars().all()}
        except Exception:
            return []

        llm_url = cfgs.get("llm_base_url", "").strip()
        llm_key = cfgs.get("llm_api_key", "").strip()
        if not llm_url or not llm_key:
            return []

        # Embed query
        try:
            async with httpx.AsyncClient(timeout=15) as client:
                emb_r = await client.post(
                    f"{llm_url.rstrip('/')}/embeddings",
                    headers={"Authorization": f"Bearer {llm_key}", "Content-Type": "application/json"},
                    json={"model": "BAAI/bge-m3", "input": query},
                )
                if emb_r.status_code != 200:
                    return []
                vector = emb_r.json()["data"][0]["embedding"]
        except Exception as e:
            log.warning("Embedding failed: %s", e)
            return []

        # nearVector search — use GraphQL variables to avoid brace conflicts
        near_vec_json = json.dumps({"vector": vector})
        gql_vars = {"nearVec": vector}
        graphql = "query($nearVec:[Float]!){Get{" + self.collection + "(limit:" + str(top_k) + where + ",nearVector:{vector:$nearVec}){text document_id _additional{distance}}}}"
        try:
            async with httpx.AsyncClient(timeout=TIMEOUT) as client:
                r = await client.post(
                    f"{WEAVIATE_URL}/v1/graphql",
                    headers=headers,
                    json={"query": graphql, "variables": gql_vars},
                )
                if r.status_code != 200:
                    return []
                data = r.json()
                items = data.get("data", {}).get("Get", {}).get(self.collection, [])
                results = []
                for item in items:
                    parsed = self._parse_item(item)
                    add = item.get("_additional", {})
                    try:
                        parsed["score"] = 1.0 - float(add.get("distance", 0))
                    except (ValueError, TypeError):
                        parsed["score"] = 0.0
                    results.append(parsed)
                return [r for r in results if r.get("content")]
        except Exception as e:
            log.warning("Vector search failed: %s", e)
            return []

    async def _fallback(self, top_k: int, headers: dict, where: str = "") -> List[Dict]:
        graphql = "{Get{" + self.collection + "(limit:" + str(top_k) + where + "){text document_id}}"
        try:
            async with httpx.AsyncClient(timeout=TIMEOUT) as client:
                r = await client.post(f"{WEAVIATE_URL}/v1/graphql", headers=headers, json={"query": graphql})
                if r.status_code != 200:
                    return []
                data = r.json()
                items = data.get("data", {}).get("Get", {}).get(self.collection, [])
                return [self._parse_item(item) for item in items if item.get("text")]
        except Exception:
            return []

    @staticmethod
    def _parse_item(item: dict) -> Dict:
        try:
            score = float(item.get("_additional", {}).get("score", 0))
        except (ValueError, TypeError):
            score = 0.0
        return {
            "content": item.get("text", ""),
            "score": score,
            "document_name": item.get("document_id", ""),
        }


class LLMService:
    """直接调用 OpenAI 兼容大模型."""

    def __init__(self, base_url: str, api_key: str, model: str):
        self.base_url = base_url.rstrip("/")
        self.api_key = api_key
        self.model = model

    async def chat(self, messages: list, temperature: float = 0.7, max_tokens: int = 1024) -> str:
        url = f"{self.base_url}/chat/completions"
        headers = {"Authorization": f"Bearer {self.api_key}", "Content-Type": "application/json"}
        payload = {"model": self.model, "messages": messages, "temperature": temperature, "max_tokens": max_tokens}
        async with httpx.AsyncClient(timeout=TIMEOUT) as client:
            r = await client.post(url, headers=headers, json=payload)
            r.raise_for_status()
            return r.json()["choices"][0]["message"]["content"] or ""

    async def chat_stream(self, messages: list, temperature: float = 0.7, max_tokens: int = 1024) -> AsyncIterator[str]:
        url = f"{self.base_url}/chat/completions"
        headers = {"Authorization": f"Bearer {self.api_key}", "Content-Type": "application/json"}
        payload = {"model": self.model, "messages": messages, "temperature": temperature, "max_tokens": max_tokens, "stream": True}
        async with httpx.AsyncClient(timeout=STREAM_TIMEOUT_CONFIG) as client:
            async with client.stream("POST", url, headers=headers, json=payload) as r:
                r.raise_for_status()
                async for line in r.aiter_lines():
                    if not line or not line.startswith("data:"):
                        continue
                    data = line[len("data:"):].strip()
                    if data == "[DONE]":
                        break
                    try:
                        event = json.loads(data)
                        delta = event["choices"][0]["delta"]
                        content = delta.get("content")
                        if content:
                            yield content
                    except (json.JSONDecodeError, KeyError, IndexError):
                        continue
