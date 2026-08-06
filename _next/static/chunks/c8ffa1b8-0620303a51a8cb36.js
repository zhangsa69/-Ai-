"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[144],{52917:function(e,t,o){o.d(t,{DM:function(){return Vr},Y7:function(){return jn},rS:function(){return Wr},zW:function(){return Gr}});var n=o(13330),r=o(67294),a=o(41946),i=o(86267),l=o(88167),s=o(27778),c=o(92425),d=o(16745),u=o(22179),p=o(28862),m=o(61260),g=o(70917),h=o(59185),f=o(48508),b=o(1385),_=o(42217),v=o(28690),y=o(1693),x=o(75997),E=o(84365),C=o(21633),w=o(94115),k=o(2874),O=o(71266),L=o(16961),S=o(8555),T=o(36957),P=o(89178),B=o(43399),R=o(8225),M=o(12227),$=o(62744),A=o(5138),I=o(95258),N=o(89222),K=o(31736),D=o(66082),H=o(92257),z=o(12806),Z=o(79899),j=o(96486),F=o.n(j),U=o(76333),J=o(73935),W=o(2376),q=o(45088),G=o(74967),V=o(40077),Y=o(84348),Q=o(51854);const X=(0,a.ZP)("div")((()=>({top:"100%",padding:"2px 4px 5px",zIndex:1,marginTop:"8px",fontSize:"14px",flex:1,color:"#b8b8b8",borderTop:"1px solid #393b3f",borderBottom:"1px solid #393b3f",span:{opacity:.4},code:{borderRadius:"2px",padding:"0.15em",fontFamily:"Menlo",fontSize:"12px",color:"rgb(253,220,152)",background:"rgb(72,69,78)"}}))),ee=e=>r.createElement(X,{className:"block_placeholder",contentEditable:!1},e.children),te=({open:e,onChange:t,id:o,anchorEl:n,onClose:a,language:d})=>{const u=(0,r.useRef)();return(0,r.useEffect)((()=>{e&&setTimeout((()=>{var e;null==(e=u.current)||e.select()}),0)}),[e,u]),r.createElement(i.ZP,{id:o,open:e,anchorEl:n,onClose:a,transitionDuration:0,PaperProps:{variant:"editor"}},r.createElement(l.Z,{id:"language-picker",sx:{width:150,"& input:before, & input:after":{display:"none"},".MuiFilledInput-root":{pt:0,background:"none","&:before, &:after":{display:"none"}}},value:d,options:A.lZj,disableClearable:!0,autoSelect:!0,autoHighlight:!0,blurOnSelect:!0,openOnFocus:!0,popupIcon:r.createElement($.JO,{icon:$.PJ.CHEVRON_DOWN}),onChange:t,renderInput:e=>r.createElement(s.Z,{...e,variant:"filled",inputRef:e=>{u.current=e}}),renderOption:(e,t)=>r.createElement(c.Z,{component:"li",...e,key:t,variant:"menu"},t)}))},oe={get:e=>{const t=sessionStorage.getItem(A.$yP+e);try{if(!t)return;return JSON.parse(t)}catch(o){return t}},set:(e,t)=>{const o=A.$yP+e;"object"===typeof t?sessionStorage.setItem(o,JSON.stringify(t)):sessionStorage.setItem(o,t)}},ne={[`& .${n.oS.BLOCK}[type="${n.P7.CODE}"]`]:{"pre code.hljs":{display:"block",overflowX:"auto",padding:"1em"},"code.hljs":{padding:"3px 5px"},".hljs":{color:"#c9d1d9",background:"#0d1117"},".hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_":{color:"#ff7b72"},".hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_":{color:"#d2a8ff"},".hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable":{color:"#79c0ff"},".hljs-meta .hljs-string,.hljs-regexp,.hljs-string":{color:"#a5d6ff"},".hljs-built_in,.hljs-symbol":{color:"#ffa657"},".hljs-code,.hljs-comment,.hljs-formula":{color:"#8b949e"},".hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag":{color:"#7ee787"},".hljs-subst":{color:"#c9d1d9"},".hljs-section":{color:"#1f6feb",fontWeight:700},".hljs-bullet":{color:"#f2cc60"},".hljs-emphasis":{color:"#c9d1d9",fontStyle:"italic"},".hljs-strong":{color:"#c9d1d9",fontWeight:700},".hljs-addition":{color:"#aff5b4",backgroundColor:"#033a16"}}},re=e=>{const{fileUuid:t,previewType:o}=e.node.attrs;if(!t)return r.createElement(r.Fragment,null);const n=e.extension.options,a=n.stateManager;if(!a)return r.createElement(r.Fragment,null);const i=[{title:"Download",onClick:()=>{var e;null==(e=n.onDownloadFile)||e.call(n,t)}},{title:"Delete",onClick:()=>{const t=e.getPos();t&&e.editor.chain().setNodeSelection(t).deleteBlock().run()}}];return r.createElement("div",null,e.node.attrs.fileUuid?r.createElement(d.Z,{onClick:()=>{e.getPos()&&e.editor.chain().selectCurrentBlock().run()}},r.createElement(a,{fileUuid:t,previewType:o,menuOptions:i})):r.createElement("div",{contentEditable:!1},"Error"))},ae=()=>{const e=r.useRef();return{ref:e,...(({containerRef:e})=>{const t=r.useCallback((()=>{if(null==e?void 0:e.current)return null==(t=e.current)?void 0:t._tippy;var t}),[e]),o=r.useCallback((()=>{var e;null==(e=t())||e.hide()}),[t]),n=r.useCallback((()=>{var e;null==(e=t())||e.show()}),[t]),a=r.useCallback((()=>{var e,r;(null==(r=null==(e=t())?void 0:e.state)?void 0:r.isVisible)?o():n()}),[o,t,n]);return{closePopOver:o,showPopOver:n,togglePopOver:a}})({containerRef:e})}};var ie=()=>({avoidFocusOnEvent:r.useCallback((e=>{e.stopPropagation(),e.preventDefault()}),[])});const le=(0,D.Z)("div")((e=>({maxHeight:e.height?e.height:"min-content",fontSize:"16px",color:"rgba(255, 255, 255, 0.9)",borderRadius:e.theme.shape.borderRadius+4,background:"rgba(28, 29, 33, 0.72)",backdropFilter:"blur(10px)",border:"0.5px solid rgba(255, 255, 255, 0.24)",width:"245px!important",boxShadow:"0px 1px 18px #0000001f, 0px 6px 10px #00000024, 0px 3px 5px -1px #00000033",position:"relative",height:e.height?e.height:"260px",".popover-container":{boxSizing:"border-box",width:"100%",height:"240px",position:"absolute",top:0,left:0,".simplebar-content > div":{padding:"0 8px"},"> div":{textAlign:"center",paddingTop:"8px","&::-webkit-scrollbar":{display:"none"},"p.button":{borderRadius:"2px",backgroundColor:e.theme.palette.primary.main}}},"::-webkit-scrollbar":{display:"none"}}))),se=r.forwardRef((({children:e,height:t,...o},n)=>r.createElement(le,{ref:n,height:t,className:"popover",...o},r.createElement("div",{className:"popover-container"},e)))),ce=(0,a.ZP)("div")`
  user-select: none;
`,de=({children:e})=>r.createElement(se,{height:38},r.createElement(ce,null,e));var ue=({onChange:e})=>r.createElement(d.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"}},r.createElement(u.Z,{component:"label",htmlFor:"file",color:"inherit",size:"small",sx:{py:0}},"Choose a file ..."),r.createElement("input",{type:"file",id:"file",hidden:!0,onChange:t=>e(t)}));const pe={content:r.createElement(r.Fragment,null,"You can upload a file"),popOver:({updateAttributes:e,onUpload:t})=>r.createElement(ue,{onChange:o=>(o=>{var n,r;const a=null==(r=null==(n=null==o?void 0:o.target)?void 0:n.files)?void 0:r[0];a&&(null==t||t({file:a,previewType:A.G5o.FILE}).then((t=>{t&&e(t)})))})(o)})},me={content:r.createElement(r.Fragment,null,"You can upload an image"),popOver:({onUpload:e,updateAttributes:t})=>r.createElement(ue,{onChange:o=>(o=>{var n,r;const a=null==(r=null==(n=null==o?void 0:o.target)?void 0:n.files)?void 0:r[0];a&&a.type.startsWith("image")&&(null==e||e({file:a,previewType:A.G5o.IMAGE}).then((e=>{e&&t(e)})))})(o)})},ge={content:r.createElement(r.Fragment,null,"You can upload your PDF"),popOver:({updateAttributes:e,onUpload:t})=>r.createElement(ue,{onChange:o=>(o=>{var n,r;const a=null==(r=null==(n=null==o?void 0:o.target)?void 0:n.files)?void 0:r[0];a&&"application/pdf"===a.type&&(null==t||t({file:a,previewType:A.G5o.PDF}).then((t=>{t&&e(t)})))})(o)})},he={[A.G5o.FILE]:pe,[A.G5o.IMAGE]:me,[A.G5o.PDF]:ge},fe={padding:"12px 36px 12px 12px",margin:.25,boxSizing:"border-box",display:"flex",alignItems:"center",textAlign:"left",width:"calc(100% - 4px)",overflow:"hidden",borderRadius:"4px",bgcolor:"grey.500",cursor:"pointer",userSelect:"none","& .MuiTypography-root":{color:"text.secondary"}},be=e=>{const{ref:t}=ae(),{avoidFocusOnEvent:o}=ie(),n=e.node.attrs.previewType,a=he[n]||he[A.G5o.FILE],i=r.useMemo((()=>{const t=(e=>t=>r.createElement(de,null,r.createElement(e,{...t})))(a.popOver);return r.createElement(t,{onUpload:e.extension.options.onUpload,updateAttributes:e.updateAttributes})}),[null==a?void 0:a.popOver,e.extension.options.onUpload,e.updateAttributes]),l=r.useCallback(((e,t)=>{o(t),e.hide()}),[o]);return r.createElement(I.T5,null,r.createElement("div",null,r.createElement(K.ZP,{onClickOutside:l,interactive:!0,content:i,ref:t,trigger:"click",hideOnClick:"toggle",placement:"bottom"},r.createElement(d.Z,{sx:fe,contentEditable:!1},r.createElement(p.Z,null,null==a?void 0:a.content," ")))))},_e=e=>{var t;const o=Boolean(null==(t=e.node.attrs)?void 0:t.fileUuid);return r.createElement(I.T5,null,o?r.createElement(re,{...e}):r.createElement(be,{...e}))},ve=({updateIframeSrc:e})=>{const[t,o]=(0,r.useState)(""),n=(0,r.useCallback)((()=>{t&&e(t)}),[t,e]),a=(0,r.useCallback)((e=>{"Enter"===e.key&&n()}),[n]);return r.createElement(d.Z,{sx:{position:"relative",display:"flex",p:"4px",borderRadius:"8px",backdropFilter:"blur(10px)",background:({palette:e})=>(0,m.Fq)(e.background.default,.7)}},r.createElement(s.Z,{type:"url",value:t,onChange:({target:e})=>o(e.value),onKeyDown:a,placeholder:"Insert HTTPS Link",sx:{".MuiOutlinedInput-root":{".MuiOutlinedInput-input":{color:"text.primary",height:"28px",border:({palette:e})=>`0.5px solid ${e.grey[300]}`,borderRightWidth:0,borderTopLeftRadius:"4px",borderBottomLeftRadius:"4px",px:"5px",py:"2px"},"&.Mui-focusVisible, &.Mui-focused fieldset, &:hover fieldset, & fieldset":{outline:"none",border:({palette:e})=>`0.5px solid ${e.grey[300]}`,borderRightWidth:0,borderTopLeftRadius:"4px",borderBottomLeftRadius:"4px"}}}}),r.createElement(c.Z,{onClick:n,sx:{fontSize:"12px",lineHeight:"18px",color:"grey.200",px:1,py:0,minHeight:28,borderTopRightRadius:"4px",borderBottomRightRadius:"4px",border:({palette:e})=>`0.5px solid ${e.grey[300]}`,bgcolor:({palette:e})=>(0,m.Fq)(e.background.default,.4),"&:hover, &.Mui-focusVisible":{color:"white",border:({palette:e})=>`0.5px solid ${e.grey[300]}`,filter:"brightness(101%)"}}},r.createElement(p.Z,null,"Embed")))},ye={padding:"12px 36px 12px 12px",margin:.25,display:"flex",boxSizing:"border-box",alignItems:"center",textAlign:"left",width:"calc(100% - 4px)",overflow:"hidden",borderRadius:"4px",bgcolor:"grey.500",cursor:"pointer",userSelect:"none","& .MuiTypography-root":{color:"text.secondary",span:{paddingLeft:"4px",opacity:.5}}},xe=({updateAttributes:e})=>{const{ref:t}=ae(),{avoidFocusOnEvent:o}=ie(),a=(0,r.useCallback)((t=>{var o;const r=null!=(o=(0,n.jN)(t))?o:t;e({src:r})}),[e]),i=(0,r.useMemo)((()=>r.createElement(ve,{updateIframeSrc:a})),[a]);return r.createElement(I.T5,null,r.createElement("div",null,r.createElement(K.ZP,{onClickOutside:(e,t)=>{o(t),e.hide()},interactive:!0,content:i,ref:t,trigger:"click",hideOnClick:"toggle",placement:"bottom"},r.createElement(d.Z,{sx:ye,contentEditable:!1},r.createElement(p.Z,null,"Embed Web Content ",r.createElement("span",null,"(YouTube, Spotify, Google Maps\u2026)"))))))},Ee=(0,D.Z)((({disabledThumbnail:e,selected:t,alt:o,...n})=>r.createElement("div",{...n})))((e=>({position:"relative",overflow:"hidden",minHeight:300,display:"flex",border:e.selected?"2px rgba(114, 114, 115, .6) solid":"0",".thumbnail":{background:`url(${e.alt})`,backgroundSize:"cover",backgroundPosition:"center",position:"absolute",width:"100%",height:"100%",zIndex:"true"===e.disabledThumbnail?"-1":"1"},".youtube_player":{position:"absolute",zIndex:"2",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},"&:hover .thumbnail":{zIndex:"-1"}}))),Ce=(0,D.Z)("iframe")((()=>({width:"100%",minHeight:300}))),we=e=>{var t;const o=(0,r.useMemo)((()=>{var t;return null==(t=null==e?void 0:e.node)?void 0:t.attrs}),[null==(t=null==e?void 0:e.node)?void 0:t.attrs]),a=(0,r.useMemo)((()=>(0,n.ce)()),[]),i=(0,r.useRef)(null),[l,s]=(0,r.useState)(!1),c=e.extension.options,d="read_later_view"===e.extensionVersion,u=(0,r.useMemo)((()=>(null==o?void 0:o.src)||(null==o?void 0:o.srcDoc)),[null==o?void 0:o.src,null==o?void 0:o.srcDoc]),p=(0,r.useMemo)((()=>(null==c?void 0:c.IFrameView)||Ce),[null==c?void 0:c.IFrameView]);return(0,r.useEffect)((function(){try{if(!YT||void 0===typeof YT||!(0,n.Qd)((null==o?void 0:o.src)||(null==o?void 0:o.srcDoc)||"")||!i.current)return;let e=new YT.get(i.current.id);if(e.getCurrentTime||(e=new YT.Player(i.current)),i.current.player=e,!e.addEventListener)return;const t=e=>{s(e.data>=YT.PlayerState.ENDED)};e.addEventListener("onStateChange",t);const r=t=>{"Space"===t.code&&d&&(t.preventDefault(),t.stopPropagation(),e.getPlayerState()===YT.PlayerState.PLAYING?(s(!1),e.pauseVideo()):(s(!0),e.playVideo()))};return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r),e.removeEventListener&&e.removeEventListener("onStateChange",t)}}catch{return}}),[null==o?void 0:o.src,null==o?void 0:o.srcDoc,d,i]),u?r.createElement(r.Fragment,null,r.createElement(Ee,{selected:null==e?void 0:e.selected,alt:o.alt,contentEditable:!1,disabledThumbnail:l.toString()},o.alt&&r.createElement("div",{className:"thumbnail",contentEditable:!1},r.createElement($.JO,{icon:$.PJ.YOUTUBE,className:"youtube_player",size:70,color:"rgba(0, 0, 0, 0.4)"})),r.createElement(p,{ref:i,id:a,contentEditable:!1,...o,src:(0,n._5)(`${(null==o?void 0:o.src)||(null==o?void 0:o.srcDoc)}`),sandbox:"allow-same-origin allow-scripts allow-popups allow-presentation"}))):r.createElement(xe,{...e})},ke=({width:e,adjacentColumnWidth:t})=>0!==e&&e!==A.Ft0&&0!==t&&t!==A.Ft0,Oe=g.css`
  .${n.oS.BLOCK}[type='${n.P7.BLOCK_COLUMN}'] {
    position: relative;
    display: flex;
    flex: 1; /** All columns should have the same width */
    margin-left: 46px; /** Add a margin where the resize handle can live */
    padding-top: 12px;
    padding-bottom: 12px;
    transition: width 0.2s ease-in-out;

    ${(({maxCount:e})=>{let t="&[width] { flex: unset; }";for(let o=0;o<=e;o++)t+=`&[width='${o}'] {\n                width: calc(100% / ${e} * ${o});\n            }\n        `;return t})({maxCount:A.Ft0})}

    > .${n.oS.BLOCK_WRAPPER} {
      width: 100%;
    }
    > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK} {
      margin-left: 0;
      padding-right: 40px;
    }
    > .resize_handle_wrapper {
      position: absolute;
      height: 100%;
      top: 0;
      left: -46px;
      width: 46px;

      &:hover > div[data-resize-handle] {
        display: block;
      }

      > div[data-resize-handle] {
        display: none;
        position: relative;
        width: 100%;
        height: 100%;
        cursor: col-resize;
        > div {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 21px;
          width: 4px;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
        }
      }
    }
    /** Don't display margin and resize handle for first column in line */
    &:first-of-type {
      margin-left: 0;
      > .resize_handle_wrapper {
        display: none;
      }
    }
  }
`,Le=async({content:e,editor:t})=>{if("string"===typeof e)return navigator.clipboard.writeText(e);if(!t)throw Error("editor is required when serializing Prosemirror content");const o=e instanceof z.NB?z.HY.from(e):e instanceof z.p2?e.content:e,n=new A.nkU(t.schema).serializeFragment(o),r=(new A.GRY).serializeFragment(o),a=document.createElement("div");return a.append(n),navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([a.innerHTML],{type:"text/html"}),"text/plain":new Blob([r],{type:"text/plain"})})])},Se="copy-button",Te="Copy highlights to clipboard",Pe=({editor:e,highlights:t,isTooltipOpen:o,setTooltip:n})=>r.createElement(d.Z,{className:Se,contentEditable:!1},r.createElement(h.Z,{sx:{padding:"2px",visibility:o?"visible":"hidden"},onClick:async o=>{t&&(o.preventDefault(),o.stopPropagation(),n("Copied!"),setTimeout((()=>{n(Te)}),1e3),await Le({editor:e,content:t}))},contentEditable:!1,onMouseEnter:()=>n(Te),onMouseLeave:()=>n(void 0)},r.createElement($.JO,{icon:$.PJ.COPY,size:18}))),Be=(0,a.ZP)("div")((e=>({display:"flex",alignItems:"center",justifyContent:"flex-start",height:"26px",color:e.theme.palette.grey[200],cursor:"pointer",width:"fit-content",paddingRight:"4px","&:hover":{background:(0,m.Fq)(e.theme.palette.grey[400],.8),borderRadius:"0.125rem",color:e.theme.palette.grey[100]},'div[role="button"]':{cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",height:"26px",marginRight:"5px","> div":{width:"1rem",marginRight:"5px",display:"flex",alignItems:"center",justifyContent:"center",svg:{width:"0.5rem",height:"0.5rem",display:"block",fill:"currentColor",flexShrink:0,transition:"transform 200ms ease-out 0s",transform:"rotateZ(90deg)",opacity:"0.5"}}},span:{color:"currentColor"}}))),Re=({editor:e,node:t,className:o,mouseDownHandler:n,openTooltip:a,setOpenTooltip:i})=>{const[l,s]=(0,r.useState)(void 0),c=null==t?void 0:t.attrs.collapsed,u=null!=l?l:`Click to ${c?"show":"hide"} highlights`;return r.createElement($.u,{classes:{tooltip:o},open:a,title:u,placement:"top-start"},r.createElement(Be,{"data-highlights-decoration":!0,onMouseDown:n,onMouseOver:()=>i(!0),onMouseOut:()=>i(!1)},r.createElement(d.Z,{role:"button","data-collapsed":c},r.createElement(d.Z,{style:{transform:`rotateZ(${c?0:90}deg)`}},r.createElement("svg",{viewBox:"0 0 100 100"},r.createElement("polygon",{points:"5.9,88.2 50,11.8 94.1,88.2 "}))),r.createElement(p.Z,{component:"span",contentEditable:!1,variant:"overline"},"Highlights")),r.createElement(Pe,{editor:e,highlights:t,isTooltipOpen:a,setTooltip:s})))},Me=()=>r.createElement(ee,null,"You haven't highlighted anything from a clip yet"," ",r.createElement("span",null,"When you select text while you're reading, it'll appear here.")),$e=(0,D.Z)(u.Z)({position:"absolute",minWidth:"28px",maxWidth:"28px",minHeight:"28px",maxHeight:"28px",zIndex:99,top:0,right:-17,transition:"all 175ms"}),Ae=(e,t)=>{var o;const a=null==(o=null==t?void 0:t.attrs)?void 0:o[n.TR.BLOCK_UUID];(0,r.useEffect)((()=>{if(a&&(!Ie(t)||!t.attrs.fetched&&t.textContent))try{setTimeout((()=>{var t,o;null==(o=(t=e.view).dispatch)||o.call(t,(0,A.far)({state:e.state,modifiedClips:[a]}))}),0)}catch(o){return}}),[])},Ie=e=>e.attrs.type===n.P7.CLIP_CONTENT,Ne=A.wZq+1;const Ke=e=>{var t;return"capture"===(null==(t=e.content.content[0])?void 0:t.attrs.type)},De=({doc:e,pos:t,clip:o})=>{var r,a;if((null==(r=e.nodeAt(t))?void 0:r.attrs.type)===n.P7.CLIP_CONTENT)return t;const i=o.attrs[n.TR.BLOCK_UUID];return null==(a=(0,A.kSO)(e,i))?void 0:a.pos},He={opacity:1},ze=({value:e,selected:t=!1,...o})=>{const n=r.useMemo((()=>(({emoji:e})=>({display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:e=>e.spacing(2.6),width:e=>e.spacing(4),height:e=>e.spacing(4),borderRadius:"100%",cursor:"pointer",opacity:.6,":focus, &:hover":{...He},transition:e=>e.transitions.create(["opacity"]),position:"relative",overflow:"hidden","&::before":{fontSize:e=>e.spacing(4),content:`"${e}"`,position:"absolute",filter:e=>`blur(${e.spacing(4)})`,top:"50%",left:"50%",transform:"translate(-50%, -50%) scale(4)"}}))({emoji:e.emoji})),[e.emoji]);return r.createElement(d.Z,{component:"span",...o,sx:[n,t&&He]},e.emoji)},Ze=(0,a.ZP)((e=>r.createElement(d.Z,{component:"span",...e})),{name:"ClipFaviconFaviconContainer"})((({theme:e,selected:t})=>({display:"inline-flex",position:"relative",width:e.spacing(4),height:e.spacing(4),cursor:"pointer",opacity:t?1:.6,":focus, &:hover":{opacity:1},transition:e.transitions.create(["opacity"])}))),je=(0,a.ZP)((({layer:e,...t})=>{var o;return r.createElement($.qE,{...t,src:"avatar"===e.type||"favicon"===e.type?e.picture:void 0,name:"initials"===e.type&&null!=(o=e.name)?o:""})}),{name:"Layer"})({}),Fe=(0,a.ZP)((e=>r.createElement(je,{...e,size:"large"})),{name:"BackgroundLayer"})({width:"100% !important",height:"100% !important"}),Ue=(0,a.ZP)((e=>r.createElement(je,{...e,size:"small"})),{name:"ForegroundLayer"})({position:"absolute",right:0,bottom:0,width:"50% !important",height:"50% !important"}),Je=({value:e,selected:t=!1,onClick:o})=>r.createElement(Ze,{onClick:o,selected:t},r.createElement(Fe,{layer:e.background}),e.foreground&&r.createElement(Ue,{layer:e.foreground})),We=({value:e,...t})=>"emoji"===e.type?r.createElement(ze,{...t,value:e}):r.createElement(Je,{...t,value:e}),qe=({authors:e,favicons:t})=>{const o=(({authors:e,favicons:t})=>{const o=new Map;return e.forEach((e=>{const t=[];e.picture&&t.push({type:"avatar",picture:e.picture}),e.name&&t.push({type:"initials",name:e.name}),o.set(e,t)})),t.forEach((e=>{o.set(e,[{type:"favicon",picture:e}])})),o})({authors:e,favicons:t}),n=[];for(const[r,a]of o.entries())for(const e of a){n.push({type:"favicon",background:e,foreground:void 0});for(const[t,a]of o.entries())if(t!==r)for(const o of a)n.push({type:"favicon",background:e,foreground:o})}return n},Ge=(e,t)=>F().isEqual(F().omitBy(e,F().isUndefined),F().omitBy(t,F().isUndefined)),Ve={label:"Emoji",isEnabled:()=>!0,TabPanel:({onChange:e})=>r.createElement($._K,{onSelect:t=>e({type:"emoji",emoji:t.native})})},Ye={label:"Presets",isEnabled:({favicons:e,authors:t})=>e.length>0||t.length>0,TabPanel:({favicons:e,authors:t,value:o,onChange:n})=>{const a=qe({authors:t,favicons:e});return r.createElement(d.Z,{display:"flex",gap:1,p:1},a.map(((e,t)=>r.createElement(We,{key:t,value:e,onClick:()=>n(e),selected:Ge(o,e)}))))}},Qe=[Ve,Ye],Xe=e=>{const[t,o]=r.useState((()=>{var t;return(null==(t=e.value)?void 0:t.type)&&["favicon","initials"].includes(e.value.type)?Ye.label:Ve.label})),{TabPanel:n}=Qe.find((e=>e.label===t));return r.createElement(d.Z,{sx:{width:"100%"}},r.createElement(f.Z,{value:t,onChange:(e,t)=>{o(t)}},Qe.filter((({isEnabled:t})=>t(e))).map((({label:e})=>r.createElement(b.Z,{key:e,value:e,label:e})))),r.createElement(n,{...e}))},et={".MuiPopover-paper":{backgroundColor:"background.default",border:e=>`1px solid ${e.palette.grey[300]}`},".MuiTabs-root":{px:e=>e.spacing(2),borderBottom:e=>`1px solid ${e.palette.grey[300]}`}},tt=({authors:e,favicons:t,defaultBackground:o="avatar",value:n,onChange:a})=>{const[l,s]=r.useState(null),c=(0,r.useMemo)((()=>{var n;const r=qe({authors:e,favicons:t});return r.length>0?null!=(n=r.find((e=>e.background.type===o&&e.foreground)))?n:r[0]:{type:"emoji",emoji:"\ud83d\udccc"}}),[o,e,t]),d=()=>{s(null)},u=Boolean(l),p=(0,r.useMemo)((()=>{if(null==n)return c;if("favicon"===n.type){const o=qe({authors:e,favicons:t});return o.some((e=>Ge(n,e)))?n:o[0]}return n}),[n,c,e,t]);return r.createElement(r.Fragment,null,r.createElement(We,{value:p,onClick:e=>{s(e.currentTarget)},selected:!0}),r.createElement(i.ZP,{open:u,anchorEl:l,onClose:d,anchorOrigin:{vertical:"bottom",horizontal:"left"},sx:et},r.createElement(Xe,{value:p,onChange:e=>{a(e),d()},favicons:t,authors:e})))},ot={display:"flex",alignItems:"center",justifyContent:"center",color:"text.secondary",fontSize:12,padding:"4px",columnGap:"8px",".highlightCount, .noteCount":{display:"flex",alignItems:"center",justifyContent:"center",columnGap:"2px"}},nt=({count:e,sx:t})=>r.createElement(d.Z,{sx:{...ot,...t}},r.createElement(d.Z,{className:"highlightCount"},r.createElement($.JO,{icon:$.PJ.MARKER,size:20}),r.createElement("span",null,e.highlights)),r.createElement(d.Z,{className:"noteCount"},r.createElement($.JO,{icon:$.PJ.ANNOTATION,size:20}),r.createElement("span",null,e.notes))),rt=({editor:e,node:t,count:o,sx:a})=>{const[i,l]=(0,r.useState)(!1),[s,c]=(0,r.useState)(!1),[m,g]=(0,r.useState)(void 0),h=(0,r.useCallback)((()=>{const o=at({doc:e.state.doc,node:t});if(o)return void 0===m?e.commands.insertHighlightsBlock({pos:o.pos,collapsed:!0}):m.collapsed?m.collapsed?e.chain().updateBlockAttributesAt({pos:m.pos,attrs:{type:n.P7.HIGHLIGHTS,collapsed:!1}}).scrollToBlock({uuid:m.uuid}).run():void 0:e.commands.scrollToBlock({uuid:m.uuid})}),[e,m,t]),f=(0,r.useCallback)((()=>{var o;const{doc:r}=e.state,a=at({doc:r,node:t});if(!a)return;const i=null==(o=a.node)?void 0:o.attrs[n.TR.BLOCK_UUID],l=(0,A.x0V)(r,i);null==c||c(!!l),g(l?{pos:l.pos,uuid:l.node.attrs[n.TR.BLOCK_UUID],collapsed:l.node.attrs.collapsed}:void 0)}),[e.state,t]);return r.createElement(_.Z,{placement:"top",open:i,disableHoverListener:!0,onMouseEnter:()=>{f(),l(!0)},onMouseLeave:()=>l(!1),title:r.createElement(d.Z,{display:"inline-flex",gap:1,alignItems:"center"},r.createElement(p.Z,{variant:"body2"},s?"Open":"Insert"),r.createElement($.z9,{keys:"/highlights"}),r.createElement(p.Z,{variant:"body2"},"block"))},r.createElement(u.Z,{id:"highlight-count-button",sx:{height:32,...a},onClick:()=>{l(!1),h()},"aria-label":"Highlights Count",color:"inherit",size:"small"},r.createElement(nt,{count:o})))},at=({doc:e,node:t})=>{var o;if(!t.isAtom)return(0,A.kSO)(e,t.attrs[n.TR.BLOCK_UUID]);const r=null==(o=(0,N.N2)(e,(e=>e.eq(t))))?void 0:o[0];if(!r)return;const a=(0,A.BQY)(e,r.pos);return a?{node:a.node,pos:a.from}:void 0},it=({editor:e,node:t,isLauncher:o})=>{const a=!o&&t.attrs.status===n.n9.LATER,i=((e,t)=>{const o=e.state.doc;return(0,r.useMemo)((()=>{var e;const r=(0,A.FDR)({doc:o,clipId:t.attrs[n.TR.BLOCK_UUID]});return(null==r?void 0:r.length)?{highlights:r.length,notes:r.filter((e=>!!e.highlightNote)).length}:(0,A.s6O)(null==(e=t.attrs)?void 0:e.highlights)}),[JSON.stringify(o)])})(e,t);return a?r.createElement(d.Z,{sx:{position:"inherit",zIndex:999,textAlign:"center",...t.attrs.status===n.n9.LATER&&{position:"absolute",backgroundColor:e=>(0,m.Fq)(e.palette.background.paper,.9),borderRadius:"4px",top:"20px",left:"50%",transform:"translateX(-55%)"}}},r.createElement(rt,{editor:e,node:t,count:i})):null},lt=({isPaywallContent:e,shouldDisplayHighlights:t})=>r.createElement(d.Z,{sx:{display:t?"none":"initial",position:"absolute",top:23,left:65,marginRight:"50px",color:"text.hint",fontSize:"14px",lineHeight:"16px",a:{color:"inherit",cursor:"pointer"}}},e?"This article is hidden behind a paywall and cannot be clipped. Please paste the content here.":"Import new content, an existing source, or create your own"),st=(0,a.ZP)(d.Z)((({theme:e})=>({position:"absolute",left:"13.5px",top:e.spacing(2)}))),ct=({editor:e,node:t,children:o,isLauncher:a,favicon:i,onChangeFavicon:l,apiUrl:s})=>{const c=!a&&t.attrs.status===n.n9.LATER,d=(0,r.useMemo)((()=>[(0,n.mS)({url:t.attrs.href,apiUrl:s})]),[t.attrs.href,s]),u=(0,r.useMemo)((()=>{var e,o;if(null==(e=t.attrs)?void 0:e.email){return[{name:JSON.parse(t.attrs.email).name}]}if(null==(o=t.attrs)?void 0:o.video){const e=JSON.parse(t.attrs.video);return[{name:e.name,picture:e.profile_image_url}]}return[]}),[t.attrs.email,t.attrs.video]);return r.createElement(r.Fragment,null,r.createElement(it,{node:t,editor:e,isLauncher:a}),r.createElement(st,null,r.createElement(tt,{value:i,onChange:l,favicons:d,authors:u,defaultBackground:t.attrs.video?"favicon":void 0})),(0,A.NAk)(t)&&r.createElement(lt,{isPaywallContent:t.attrs.isPaywallContent,shouldDisplayHighlights:c}),o)},dt=()=>r.createElement($.JO,{icon:$.PJ.BOOKMARK_DEFAULT,className:"no_seshat_propagation",color:"text.secondary"}),ut=()=>r.createElement($.JO,{icon:$.PJ.BOOKMARK_READ,className:"no_seshat_propagation"}),pt=()=>r.createElement($.JO,{icon:$.PJ.BOOKMARK_LATER,className:"no_seshat_propagation"}),mt=e=>({title:"Mark as not for later",shortcutLauncher:void 0,shortcutApp:"L",icon:r.createElement(dt,null),update:({updateAttributes:e,markAsReadNotLater:t,isLauncher:o,type:n})=>{if("video"===n)return e({status:void 0,contentEditable:!1});null==t||t(),e({status:void 0,contentEditable:!o})},next:()=>ht(e)}),gt={text:"Read later",video:"Watch later"},ht=e=>({title:gt[e],shortcutLauncher:void 0,shortcutApp:"L",icon:r.createElement(pt,null),update:({updateAttributes:e,markAsReadLater:t})=>{null==t||t(),e({status:n.n9.LATER,contentEditable:!1})},next:(t=!1)=>t?yt(e):mt(e)}),ft={text:"Mark as read",video:"Mark as watched"},bt=e=>({title:ft[e],shortcutLauncher:void 0,shortcutApp:"R",icon:r.createElement(ut,null),update:({updateAttributes:e,toggleRead:t,type:o})=>{null==t||t(),e({status:n.n9.READ,contentEditable:"video"!==o})},next:(t=!1)=>t?vt(e):mt(e)}),_t={text:"Mark as unread",video:"Mark as unwatched"},vt=e=>({...ht(e),title:_t[e],shortcutApp:"R",update:({updateAttributes:e,toggleRead:t})=>{null==t||t(),e({status:n.n9.LATER,contentEditable:!1})}}),yt=e=>({...bt(e),shortcutApp:"R"}),xt=(e="text")=>({editable:mt(e),[n.n9.LATER]:ht(e),[n.n9.READ]:bt(e)}),Et=({updateAttributes:e,status:t,isReadView:o,isLauncher:a=!1,toggleRead:i,markAsReadLater:l,type:s,markAsReadNotLater:c})=>{const u=(0,r.useMemo)((()=>{const e=xt(s)[t||"editable"];return null==e?void 0:e.next(o)}),[o,t,s]),p=r.useCallback((t=>{t.preventDefault(),t.stopPropagation(),null==u||u.update({updateAttributes:e,isLauncher:a,toggleRead:i,markAsReadLater:l,type:s,markAsReadNotLater:c})}),[u,e,a,i,l,s,c]);return r.createElement(d.Z,{sx:{display:"flex",alignItems:"center"}},r.createElement($.u,{placement:"bottom",title:null==u?void 0:u.title,shortcut:a?null==u?void 0:u.shortcutLauncher:null==u?void 0:u.shortcutApp},r.createElement(h.Z,{onMouseDown:p,contentEditable:!1,size:"small",sx:{padding:0}},t===n.n9.LATER&&r.createElement(pt,null),t===n.n9.READ&&r.createElement(ut,null),void 0===t&&r.createElement(dt,null))))},Ct=({status:e,updateAttributes:t,isHovered:o,toggleRead:a,markAsReadLater:i,type:l,markAsReadNotLater:s})=>{const[c,u]=r.useState(null),p=Boolean(c),m=(0,r.useCallback)((e=>{u(e.currentTarget)}),[]),g=(0,r.useCallback)((()=>{u(null)}),[]),f=e===n.n9.READ?((e="text")=>({editable:mt(e),[n.n9.LATER]:vt(e),[n.n9.READ]:yt(e)}))(l):xt(l);return r.createElement(d.Z,null,r.createElement(h.Z,{onClick:m,size:"small",sx:{padding:0,opacity:o||p?1:0},"aria-controls":p?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":p?"true":void 0},r.createElement($.JO,{icon:$.PJ.CHEVRON_DOWN,color:"text.hint",size:20})),r.createElement(v.Z,{variant:"menu",anchorEl:c,id:"account-menu",open:p,onClose:g,onClick:g,transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"}},Object.entries(f).map((([o,n])=>{const c=(e||"editable")===o;return r.createElement(y.Z,{key:o,selected:c,onClick:()=>n.update({updateAttributes:t,toggleRead:a,markAsReadLater:i,markAsReadNotLater:s,isLauncher:!1,type:l})},r.createElement(x.Z,null,n.icon),r.createElement(E.Z,{sx:{mr:1}},n.title),c?r.createElement($.z9,{keys:["\u2713"]}):r.createElement($.z9,{keys:[n.shortcutApp]}))}))))},wt=({status:e,sx:t,updateAttributes:o,isReadView:n=!1,isLauncher:a=!1,options:i,type:l,className:s})=>{const{ref:c,isHovered:u}=(0,Z.XI)();return r.createElement(d.Z,{ref:c,sx:{display:"flex",alignItems:"center",...t},className:"no_seshat_propagation "+s},r.createElement(Et,{status:e,updateAttributes:o,isReadView:n,isLauncher:a,toggleRead:null==i?void 0:i.toggleRead,markAsReadLater:null==i?void 0:i.markAsReadLater,type:l,markAsReadNotLater:null==i?void 0:i.markAsReadNotLater}),!a&&r.createElement(Ct,{status:e,updateAttributes:o,isHovered:u,toggleRead:null==i?void 0:i.toggleRead,markAsReadLater:null==i?void 0:i.markAsReadLater,type:l,markAsReadNotLater:null==i?void 0:i.markAsReadNotLater}))},kt=(0,a.ZP)(d.Z)((({fetching:e})=>({top:0,width:"100%","& > .MuiBox-root:first-of-type":{overflow:"hidden","& ~ .seshat_block_wrapper":{display:!0===e?"none":"",overflow:"hidden",top:0,'.seshat_block[type="clipContent"] > .MuiBox-root':{top:"15px",position:"static",overflow:"hidden"}}}}))),Ot=(0,a.ZP)(wt)((({isLauncher:e})=>({position:"fixed",top:"18px",right:e?"12px":"8px",borderRadius:"4px",zIndex:999}))),Lt=(0,a.ZP)(u.Z)((()=>({position:"fixed",bottom:"20px",left:"50%",transform:"translateX(-50%)",zIndex:999}))),St=(0,a.ZP)("div")((({theme:e})=>({display:"flex",alignItems:"center",whiteSpace:"nowrap",fontWeight:600,margin:"0",fontSize:"10px","&, & .MuiTypography-root":{color:e.palette.text.disabled},"& .MuiCircularProgress-root":{width:"12px",height:"12px"}}))),Tt=({isClipTweet:e})=>{const[t,o]=(0,r.useState)(e?"GATHERING THE TWEET(S)...":"SAVING YOUR CLIP...");return(0,r.useEffect)((()=>{e&&setTimeout((()=>{o("IT WILL BE WORTH THE WAIT...")}),3e3)}),[e]),r.createElement(d.Z,{p:e?"10px":"0 10px 10px"},r.createElement(d.Z,{display:"flex",justifyContent:"space-between",mb:"8px"},r.createElement(C.Z,{width:"40%",variant:"text",animation:"wave",height:30}),r.createElement(d.Z,{display:"flex",alignItems:"center"},r.createElement(St,null,r.createElement(w.Z,{color:"inherit",size:12,sx:{marginRight:1}}),r.createElement(p.Z,{variant:"overline"},t)))),r.createElement(C.Z,{variant:"text",animation:"wave",height:28,sx:{marginBottom:"-4px"}}),r.createElement(C.Z,{variant:"text",animation:"wave",height:28,sx:{marginBottom:"2px"}}))},Pt={position:"absolute",zIndex:"5",bottom:"6px",left:"50%",transform:"translateX(-50%)",typography:"overline",color:"text.hint",px:2,py:"3px",boxShadow:"0px 4px 4px rgba(4, 4, 7, 0.25)",mb:0,backgroundColor:"transparent",background:"linear-gradient(138.16deg, #1A1B1F -14.83%, #1A1B1F 92.59%) padding-box, linear-gradient(180deg, #B8B8B8 -76.62%, #111213 131.05%) border-box",border:"1px solid transparent",display:"flex",alignItem:"center",borderRadius:1},Bt=({node:e,editor:t})=>{const o=(0,r.useMemo)((()=>{const t=[];return e.descendants(((e,o)=>{e.attrs.type===n.P7.TWEET&&t.push({node:e,pos:o})})),t}),[e]),a=(0,r.useCallback)((()=>{var e,n,r;const a=null==(e=o[1])?void 0:e.pos,i=o[o.length-1],l=(null==i?void 0:i.pos)+(null==i?void 0:i.node.nodeSize);a&&(null==(r=null==t?void 0:(n=t.commands).deleteRange)||r.call(n,{from:a,to:l}))}),[null==t?void 0:t.commands,o]);return r.createElement(r.Fragment,null,e.content.content.length>1&&r.createElement(d.Z,{className:"clipContent_buttonTwitter",sx:Pt,gap:1},r.createElement($.JO,{icon:$.PJ.CLIPBOARD,size:16}),"Thread (",e.content.content.length,")",r.createElement(_.Z,{title:r.createElement(p.Z,{variant:"body2",sx:{color:"text.hint"}},"Remove thread"),placement:"top"},r.createElement(h.Z,{size:"small",sx:{p:0},onClick:a},r.createElement($.JO,{icon:$.PJ.CLOSE,size:16})))))},Rt=(0,a.ZP)(d.Z)((({theme:e})=>({position:"absolute",left:e.spacing(1),top:e.spacing(2)}))),Mt=({name:e,profile_image_url:t,username:o,children:a,node:i,isLauncher:l,editor:s,favicon:c,onChangeFavicon:d,apiUrl:u})=>{const m=(null==i?void 0:i.attrs.status)===n.n9.LATER&&!l,g=(0,r.useMemo)((()=>[(0,n.mS)({url:i.attrs.href,apiUrl:u})]),[i.attrs.href,u]);return r.createElement(r.Fragment,null,r.createElement(it,{node:i,editor:s,isLauncher:l}),r.createElement(Rt,null,r.createElement(tt,{value:c,onChange:d,favicons:g,authors:[{name:o,picture:t}]})),r.createElement(p.Z,{sx:{mb:1,ml:m?"34px":0,position:"absolute",zIndex:"4",top:"14px",left:"73px",color:"grey.100"},className:"clipContent_twitterUsername"},e," ",r.createElement(p.Z,{component:"a",href:`https://twitter.com/@${o}`,sx:{color:"grey.300",fontSize:"13px",textDecoration:"none",cursor:"pointer"},target:"_blank"},"@",o)),r.createElement(Bt,{editor:s,node:i}),a)},$t=({updateAttributes:e,node:t,editor:o,options:a,getPos:i})=>{var l,s,c,u,p,m,g,h;const f=i(),b=o.state.selection.from===f,_="launcher"===(null==a?void 0:a.extensionVersion),v=(({node:e,fetchClip:t,fetchTwitterClip:o,editor:a,pos:i})=>{const[l,s]=(0,r.useState)(!1),c=e.attrs[n.TR.BLOCK_UUID],{attrs:{fetched:d,href:u,hrefBackup:p},textContent:m}=e,g=(0,r.useCallback)((async()=>{var r,l,d,m;let g,h,f,b=i;try{if(s(!0),(0,n.hA)(u)&&o)try{const t=await o(u);if(b=De({doc:a.state.doc,clip:e,pos:i}),!b)throw new Error("no clip in doc");if(a.chain().updateBlockAttributesAt({pos:b,attrs:{fetched:!0}}).setMeta("addToHistory",!1).run(),!t)throw new Error("no content returned when fetching tweet");const n=t.includes.users[0],r={name:n.name,username:n.username,profile_image_url:n.profile_image_url};a.chain().updateBlockAttributesAt({pos:b,attrs:{twitter:JSON.stringify(r)}}).setMeta("addToHistory",!1).run(),h=t.content}catch(_){throw s(!1),new Error("no content returned when fetching tweet")}else if((0,n.Qd)(u)){const t={name:"",profile_image_url:""},o=(0,n.jN)(u),r=(0,n.l4)(u);a.chain().updateBlockAttributesAt({pos:i,attrs:{video:JSON.stringify(t)}}).setMeta("addToHistory",!1).run(),f=e.attrs.title,h=`<iframe src="${o}" alt="${r}"></iframe>`}else if(t)try{const o=await t(u,p);if(g=null==o?void 0:o.paywallDetected,b=De({doc:a.state.doc,clip:e,pos:i}),!b)throw new Error("no clip in doc");if(a.chain().updateBlockAttributesAt({pos:b,attrs:{fetched:!0,isPaywallContent:g}}).setMeta("addToHistory",!1).run(),!g&&!(null==o?void 0:o.content))throw new Error("no content returned when fetching article");f=null==o?void 0:o.title,h=null==o?void 0:o.content}catch(_){throw s(!1),new Error("no content returned when fetching article")}const l=a.chain();if(h){const{jsonContent:t}=(0,A.WLE)({HTMLContent:h,schema:a.schema,options:{parseOptions:{preserveWhitespace:"full"}},config:{bidirectionalName:"reference_bracket"}}),o=null==(r=null==t?void 0:t[0])?void 0:r.content;o&&l.replaceWith({from:b+1,to:b+e.nodeSize-Ne,content:o}).matchHighlightsWithClipContent(),f&&l.insertClipTitle({clipUuid:c,title:f}),l.removeOrphanHighlightsBlock()}g&&l.addHighlightsInHighlightsAttribute(),f&&Ke(a.state.doc)&&!(0,A.Xae)(a)&&l.turnEditorIntoCard({cardType:"note",title:f}),s(!1),l.setMeta(A.aZt,!0).setMeta("addToHistory",!1),l.run()}catch(v){s(!1);const t=a.chain();b=null!=(l=De({doc:a.state.doc,clip:e,pos:i}))?l:i,t.focus(b).insertClipBookmark({nodeViewAttrs:{href:u,hrefBackup:p,title:null!=(m=null!=(d=e.attrs.title)?d:f)?m:u,highlights:e.attrs.highlights,hasError:!0},attrs:{...e.attrs,type:n.P7.NODE_VIEW,fetched:void 0,isPaywallContent:void 0}}),t.focus(b).deleteBlock(),t.setMeta(A.OnH,!0).run()}}),[c,u,o,t,a,i,p,e]);return(0,r.useEffect)((()=>{!u||m||d||l||g()}),[d,l,u,m]),l})({node:t,fetchClip:null==(s=null==(l=null==a?void 0:a.clip)?void 0:l.content)?void 0:s.fetchClip,fetchTwitterClip:null==(u=null==(c=null==a?void 0:a.clip)?void 0:c.content)?void 0:u.fetchTwitterClip,editor:o,pos:f}),y=t.attrs.favicon,x=(0,r.useCallback)((t=>{e({favicon:t})}),[e]);Ae(o,t);const E=!!(null==(p=t.attrs)?void 0:p.href)&&!!(0,n.hA)(null==(m=t.attrs)?void 0:m.href),C=E&&t.attrs.twitter,{name:w=null,username:k=null,profile_image_url:O=null}=C&&t.attrs.twitter?JSON.parse(t.attrs.twitter):{};return r.createElement(kt,{fetching:v},r.createElement(d.Z,{contentEditable:!1},v&&r.createElement(Tt,{isClipTweet:E})||C&&r.createElement(Mt,{favicon:y,onChangeFavicon:x,name:w,username:k,profile_image_url:O,isLauncher:_,node:t,apiUrl:null!=(g=null==a?void 0:a.apiUrl)?g:"",editor:o},r.createElement(At,{node:t,updateAttributes:e,isLauncher:_,options:null==a?void 0:a.clip,className:"twitterClipButton"}))||r.createElement(ct,{favicon:y,onChangeFavicon:x,node:t,editor:o,isLauncher:_,apiUrl:null!=(h=null==a?void 0:a.apiUrl)?h:""},r.createElement(At,{node:t,updateAttributes:e,isLauncher:_,isFocused:b,options:null==a?void 0:a.clip}))))},At=({node:e,updateAttributes:t,isLauncher:o,isFocused:a,options:i,className:l})=>{const s=e.attrs.status;return r.createElement(r.Fragment,null,r.createElement(Ot,{isLauncher:o,status:s,updateAttributes:t,options:i,type:e.attrs.video?"video":"text",className:l}),!o&&s===n.n9.LATER&&r.createElement(Lt,{variant:"chip",size:"small",endIcon:a?r.createElement($.z9,{keys:["\u21b5"]}):void 0},e.attrs.video?"Watch":"Read"))},It=e=>{var t;const o=null==(t=e.attrs.highlights)?void 0:t.content,n=e.attrs.kindleHighlights;return{highlights:(o||n||[]).length,notes:(null==o?void 0:o.filter((e=>{var t;return 2===(null==(t=null==e?void 0:e.content)?void 0:t.length)})).length)||(null==n?void 0:n.filter((e=>null==e?void 0:e.note)).length)||0}},Nt={position:"relative",height:"auto",minHeight:"170px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"},Kt={mx:"auto",maxWidth:"65%",textAlign:"center",fontFamily:"GT Super Text",fontSize:"24px",lineHeight:"32px"},Dt={position:"absolute",top:"calc(50% - 42px)",left:"10%",width:"100%",maxWidth:"64px",height:"100%",maxHeight:"84px","& img":{width:"100%",height:"100%"}},Ht=({node:e,editor:t,getPos:o,updateAttributes:a,options:i})=>{var l;const{doc:s}=t.state,c=A.jh_.createFromPosition(s,o()).firstBlock(),m=(0,A.Tvz)(t),g=null==(l=null==i?void 0:i.book)?void 0:l.AuthorReferenceComponent,{asin:h,coverUrl:f,title:b,status:_}=e.attrs,v=It(e);return Ae(t,c.node),r.createElement(I.T5,null,r.createElement(d.Z,{sx:Nt,className:n.QK.CLIP_BOOK},r.createElement(rt,{editor:t,node:e,count:v}),r.createElement(d.Z,{sx:{textAlign:"center"}},r.createElement(p.Z,{sx:Kt},b),r.createElement(p.Z,null,g&&r.createElement(g,{cardUuid:m},(e=>e?r.createElement(d.Z,{sx:{maxWidth:300,margin:"0 auto"}},"By ",e):r.createElement(r.Fragment,null))))),h&&r.createElement(u.Z,{href:(0,A.Gmd)(h),variant:"chip",size:"small",endIcon:r.createElement($.z9,{keys:["\u21b5"]}),target:"_blank",rel:"noopener noreferrer"},"Read"),r.createElement(d.Z,{component:"img",src:f,alt:b,sx:Dt}),r.createElement(wt,{sx:{position:"absolute",top:10,right:"4px"},status:_,updateAttributes:a,options:i})))},zt=(0,a.ZP)(d.Z)((({theme:{palette:e,spacing:t}})=>({display:"flex",alignItems:"center",justifyContent:"space-between",overflow:"none","& > .MuiButton-root":{display:"flex",alignItems:"center",minWidth:0,"& .MuiTypography-root":{color:e.grey[300],overflow:"hidden",textOverflow:"ellipsis"}},"& .MuiBox-root":{display:"flex",alignItems:"center","& .MuiButton-root#clipBookmarkButton":{marginLeft:t(4)}}})));var Zt=({sx:e,onClick:t,error:o,type:n})=>{const[a,i]=(0,r.useState)(null!=o&&o);(0,U.useHotkeys)([{name:"Clip content",keys:"meta+shift+c",callback:t}]);const l=(0,r.useMemo)((()=>a?{text:"Try again",icon:$.PJ.ALERT}:"video"===n?{text:"Clip video",icon:$.PJ.VIDEO}:{text:"Clip content",icon:$.PJ.CLIPBOARD}),[a,n]);return r.createElement(u.Z,{onClick:t,onMouseEnter:()=>{a&&i(!1)},onMouseLeave:()=>{o&&i(!0)},id:"clipBookmarkButton","aria-label":"Clip Content from Source",sx:{display:"inline-flex",alignItems:"center",transition:$.rS.transitions.create("all",{duration:$.rS.transitions.duration.standard}),...e}},r.createElement($.JO,{icon:l.icon,sx:{mr:.25,color:"text.secondary"}}),r.createElement(p.Z,{sx:{mr:2,color:"text.secondary",minWidth:70,textAlign:"left"},variant:"body2",noWrap:!0},l.text),r.createElement($.z9,{keys:["\u2318","\u21e7","C"]}))};const jt=(0,a.ZP)(d.Z)((({theme:e})=>({display:"flex",marginRight:e.spacing(1)}))),Ft=({node:e,editor:t,updateAttributes:o,apiUrl:a})=>{const{title:i,href:l}=e.attrs,s=It(e),c=e.attrs.favicon,m=(0,r.useCallback)((e=>{o({favicon:e})}),[o]),g=(0,r.useMemo)((()=>[(0,n.mS)({url:e.attrs.href,apiUrl:null!=a?a:""})]),[e.attrs.href,a]);return r.createElement(I.T5,null,r.createElement(zt,{className:n.QK.CLIP_BOOKMARK},r.createElement(u.Z,{color:"inherit",href:l,target:"_blank",rel:"noreferrer"},r.createElement(jt,null,r.createElement(tt,{value:c,onChange:m,favicons:g,authors:[],defaultBackground:e.attrs.video?"favicon":void 0})),r.createElement(p.Z,{variant:"overline",component:"p",noWrap:!0},i)),r.createElement(d.Z,null,r.createElement(rt,{editor:t,node:e,count:s}),r.createElement(Zt,{error:e.attrs.hasError,type:(0,n.Qd)(l)?"video":"text",onClick:()=>{t.commands.replaceClipBookmarkByClipContent()}}))))},Ut=(0,D.Z)("div")((({theme:{palette:e}})=>({ul:{marginBlockStart:0,paddingInlineStart:0,listStyleType:"none",fontSize:"12px"},"li.placeholder":{color:e.text.secondary},"li:not(.placeholder)":{width:"fit-content",fontSize:"12px",textDecoration:"underline",overflow:"hidden",textOverflow:"ellipsis",cursor:"pointer"},".heading1 + .heading2":{paddingLeft:"30px"},".heading2 + .heading3":{paddingLeft:"60px"}}))),Jt=({editor:e})=>{const[t,o]=r.useState((0,A.VA1)({editor:e})),n=r.useMemo((()=>0===(null==t?void 0:t.length)),[t]),a=r.useCallback((()=>{const n=(0,A.VA1)({editor:e});n!==t&&o(n)}),[t,e]);return r.useEffect((()=>(e.on("update",a),()=>{e.off("update",a)})),[e,a]),r.createElement(I.T5,null,r.createElement(Ut,null,r.createElement("ul",{className:"table_of_content"},n?r.createElement("li",{className:"placeholder"},"Add headings to create a table of contents."):null==t?void 0:t.map((t=>{var o,n;return r.createElement("li",{key:null==(o=t.attrs)?void 0:o["block-id"],className:`cursor ${null==(n=t.attrs)?void 0:n.type}`,onClick:()=>{var o;return e.commands.scrollToBlock({uuid:null==(o=t.attrs)?void 0:o["block-id"]})}},t.text||"Untitled")})))))},Wt=A.$3k.extend({addNodeView:()=>(0,I.fW)(Jt)}),qt=e=>{var t,o;const{getPos:a,node:i,updateAttributes:l}=e,s=r.useMemo((()=>{var t;return null==(t=(0,A.BQY)(e.editor.state.doc,a()))?void 0:t.node}),[a,e.editor.state]),c=r.useMemo((()=>{var t;return null==(t=e.injectedProps)?void 0:t.NestedCardLink}),[null==(t=e.injectedProps)?void 0:t.NestedCardLink]);return r.createElement(r.Fragment,null,c?r.createElement(c,{updateAttributes:l,nodeAttrs:i.attrs,cardUuid:null==(o=null==s?void 0:s.attrs)?void 0:o[n.TR.BLOCK_UUID]},r.createElement(I.ms,null)):r.createElement(I.ms,null))},Gt={[n.P7.CODE]:({updateAttributes:e,node:{attrs:{language:t}},editor:o})=>{const[n,a]=(0,r.useState)();(({language:e,updateAttrs:t})=>{(0,r.useEffect)((()=>{e&&!A.lZj.includes(e)&&t({language:void 0})}),[])})({language:t,updateAttrs:e}),(({language:e,updateAttrs:t})=>{(0,r.useEffect)((()=>{const o=oe.get("lastUsedCodeBlockLanguage");!e&&o&&t({language:o})}),[])})({language:t,updateAttrs:e}),(({language:e})=>{(0,r.useEffect)((()=>{e&&(0,A.NQL)(e)&&oe.set("lastUsedCodeBlockLanguage",e)}),[e])})({language:t});const{handleClick:i,handleClose:l,id:s,open:c,anchorEl:p}=(({setSelectionPos:e,editor:t})=>{const[o,n]=(0,r.useState)(null),a=(0,r.useCallback)((r=>{e(t.state.selection.from),n(o?null:r.currentTarget)}),[o,t.state.selection.from,e]),i=(0,r.useCallback)((()=>{n(null)}),[]),l=Boolean(o);return{handleClick:a,handleClose:i,id:l?"language-popper":void 0,open:l,anchorEl:o}})({editor:o,setSelectionPos:a}),m=t||A.J5m,g=(0,r.useCallback)(((t,r)=>{e({language:r===A.J5m?void 0:r}),n&&(null==o||o.chain().focus().setTextSelection(n).run()),l()}),[e,o,n,l]);return r.createElement(d.Z,{contentEditable:!1},r.createElement(u.Z,{sx:{display:"flex",alignItems:"center",cursor:"pointer",mb:1},size:"small",color:"inherit","aria-describedby":s,onClick:i},r.createElement(d.Z,null,m),r.createElement($.JO,{icon:$.PJ.CHEVRON_DOWN})),r.createElement(te,{id:s,language:m,open:c,onChange:g,anchorEl:p,onClose:l}))},[n.P7.CARD_CONTENT]:e=>{var t,o,a,i,l;const{getPos:s,node:c,updateAttributes:u}=e,p=(0,r.useRef)(null),[m,g]=(0,r.useState)(0),h=(0,r.useMemo)((()=>"task"!==c.attrs.cardType&&0===s()),[s,c.attrs.cardType]),f=(0,r.useCallback)((e=>{var t,o;return e.stopPropagation(),e.preventDefault(),u({collapsed:!(null==(t=c.attrs)?void 0:t.collapsed)}),!(null==(o=c.attrs)?void 0:o.collapsed)}),[c,u]),b=!(null==(a=null==(o=null==(t=c.content.content)?void 0:t[0])?void 0:o.content.content)?void 0:a[0].textContent),_=(0,r.useCallback)((e=>{const t=new ResizeObserver((t=>{window.requestAnimationFrame((()=>{t&&Array.isArray(t)&&t.length&&g(e.offsetWidth)}))}));return t.observe(e),()=>{t.unobserve(e)}}),[]);r.useEffect((()=>{if(!p.current||!b)return;const e=p.current;return _(e)}),[b,_]);const v=null==(l=null==(i=e.options)?void 0:i.card)?void 0:l.CardTitleView;return v?r.createElement(r.Fragment,null,r.createElement(d.Z,{ref:p},r.createElement(v,{chevronMouseDownHandler:f,updateAttributes:u,nodeAttrs:c.attrs,isSeshatEditorTitle:h,cardUuid:c.attrs[n.TR.BLOCK_UUID]})),b&&r.createElement(d.Z,{contentEditable:!1,sx:{position:"absolute",left:`${m+2}px`,fontSize:"36px",color:"text.hint",zIndex:"-1",padding:"3px 2px"}},"Untitled")):r.createElement(r.Fragment,null)},[n.P7.CLIP_CONTENT_TITLE]:e=>{var t,o;const{editor:n,options:a}=e,i=null==(o=null==(t=null==a?void 0:a.clip)?void 0:t.book)?void 0:o.AuthorReferenceComponent,l=(0,A.Tvz)(n,"read_later_view"===(null==a?void 0:a.extensionVersion)),s=(c=(null==n?void 0:n.state.doc.textContent)||"",Math.round(c.split(" ").length/296));var c;return i?r.createElement(d.Z,{className:"clipContentTitle_author",sx:{position:"absolute",bottom:"-24px",left:"50%",transform:"translateX(-50%)","& .author":{textOverflow:"ellipsis",maxWidth:"178px",display:"inline-block",whiteSpace:"pre",overflow:"hidden",verticalAlign:"bottom"}}},r.createElement(i,{cardUuid:l},(e=>e?r.createElement(d.Z,null,r.createElement(p.Z,{component:"span",sx:{color:"grey['100']"}},"By"," "),e,r.createElement(p.Z,{component:"span",sx:{color:"grey['100']"}}," ","\u2022 ",s,"min")):r.createElement(d.Z,null,r.createElement(p.Z,{component:"span",sx:{color:"grey['100']"}},s,"min"))))):r.createElement(r.Fragment,null)}},Vt={[n.P7.BLOCKQUOTE]:({node:e})=>0!==e.childCount?r.createElement(r.Fragment,null):r.createElement(ee,null,"This blockquote is empty."),[n.P7.BLOCK_COLUMN]:({getPos:e,node:t,editor:o})=>{const a=(0,r.useRef)(t.attrs.width),i=(0,r.useRef)(0),l=(0,r.useRef)(0);r.useEffect((()=>{a.current=t.attrs.width}),[t.attrs.width]);const s=r.useCallback((t=>{if(0===t.buttons||!a.current)return o.view.setProps({editable:()=>!0}),void document.removeEventListener("mousemove",s);const r=i.current/A.Ft0,c=t.clientX-l.current;let d;c>=r/2?(d=a.current-1,l.current+=r):c<=-r/2&&(d=a.current+1,l.current-=r),d&&((({editor:e,pos:t,currentWidth:o,updatedWidth:r})=>{const{nodeBefore:a}=e.state.doc.resolve(t);if(!a)return;const i=r,l=i<o?a.attrs.width+1:a.attrs.width-1;ke({width:i,adjacentColumnWidth:l})&&e.chain().updateBlockAttributesAt({pos:t,attrs:{type:n.P7.BLOCK_COLUMN,width:i},scrollIntoView:!1}).updateBlockAttributesAt({pos:t-a.nodeSize,attrs:{type:n.P7.BLOCK_COLUMN,width:l},scrollIntoView:!1}).run()})({editor:o,pos:e(),currentWidth:a.current,updatedWidth:d}),a.current=d)}),[o,e]),c=r.useCallback((t=>{var n;if(t.preventDefault(),!a.current){const t=e(),n=((e,t)=>{const{childCount:o}=e.doc.resolve(t).parent;if(!(o>A.Ft0/2))return A.Ft0/o})(o.state,t);if(!n)return;a.current=n,(({editor:e,pos:t,width:o})=>{const{tr:n}=e.state,{parent:r,parentOffset:a}=e.state.doc.resolve(t),i=t-a;r.content.forEach(((e,t)=>{n.setNodeMarkup(i+t,void 0,{...e.attrs,width:o})})),e.view.dispatch(n)})({editor:o,pos:t,width:n})}i.current=null==(n=o.view.dom.getBoundingClientRect())?void 0:n.width,l.current=t.clientX,o.view.setProps({editable:()=>!1}),document.addEventListener("mousemove",s)}),[o,s,e]);return r.createElement("div",{contentEditable:!1,className:"resize_handle_wrapper"},r.createElement("div",{"data-resize-handle":!0,onMouseDown:c},r.createElement("div",null)))},[n.P7.CLIP_CONTENT]:({updateAttributes:e,node:t,editor:o,options:a,getPos:i,...l})=>((0,r.useEffect)((()=>{var e,r,l;try{if((null==(e=t.attrs)?void 0:e.status)!==n.n9.LATER)return;const s=null==(l=null==(r=null==o?void 0:o.view)?void 0:r.nodeDOM)?void 0:l.call(r,i());if(!s)return;const c=e=>{var o,r,i,l,s,c;if(null==(o=e.target)?void 0:o.closest(".no_seshat_propagation"))return;if(null==(r=e.target)?void 0:r.closest("#highlight-count-button"))return;const d=null==(i=t.attrs)?void 0:i[n.TR.BLOCK_UUID];d&&(e.preventDefault(),e.stopPropagation(),null==(c=null==(s=null==(l=null==a?void 0:a.clip)?void 0:l.content)?void 0:s.goToClip)||c.call(s,d))};return s.addEventListener("mousedown",c),()=>{s.removeEventListener("mousedown",c)}}catch(s){return}}),[o.view,i,t.attrs,null==a?void 0:a.clip]),r.createElement($t,{node:t,updateAttributes:e,editor:o,options:a,getPos:i,...l})),[n.P7.HIGHLIGHTS]:({updateAttributes:e,node:t,editor:o})=>{var n;const[a,i]=(0,r.useState)(!1),l=null==(n=t.attrs)?void 0:n.collapsed,s=(0,r.useCallback)((t=>{var o;(null==(o=t.target)?void 0:o.closest(".copy-button"))||(t.stopPropagation(),t.preventDefault(),e({collapsed:!l}))}),[l,e]);return r.createElement(r.Fragment,null,r.createElement(Re,{editor:o,node:t,mouseDownHandler:s,openTooltip:a,setOpenTooltip:i}),!t.attrs.collapsed&&(0,A.XDY)(t)&&r.createElement(Me,null))},[n.P7.HIGHLIGHT]:({editor:e,getPos:t,node:o})=>{var a;const i=o.textContent?A.wZq:0,l=(0,r.useCallback)((()=>{e.chain().focus(t()+1+i+1).insertHighlightNote().run()}),[i,e,t]);return r.createElement(r.Fragment,null,o.attrs.timestamp&&r.createElement(Z.EK,{value:o.attrs.timestamp}),(null==(a=o.lastChild)?void 0:a.attrs.type)!==n.P7.HIGHLIGHT_NOTE&&r.createElement($.u,{title:"Quick Note",shortcut:$.sr.RETURN,placement:"top"},r.createElement($e,{"data-add-highlight-note":!0,onClick:l,contentEditable:!1,disableRipple:!0,size:"small"},r.createElement($.JO,{sx:{color:"text.secondary"},icon:$.PJ.QUICK_NOTE}))))}},Yt={launcher:{[n.P7.CLIP_CONTENT]:({updateAttributes:e,node:t,...o})=>r.createElement($t,{node:t,updateAttributes:e,...o})}},Qt=e=>{var t,o;if(!e)return Yt;const n=null!=(t=e.extensionVersion)?t:"main";return{...e.wrapperComponentOverrides,...Yt,[n]:{...Yt[n],...null==(o=e.wrapperComponentOverrides)?void 0:o[n]}}};class Xt{constructor(e,t,{editor:o,props:n}){this.ref=null,this.id=Math.floor(4294967295*Math.random()).toString(),this.component=e,this.editor=o,this.props=n,this.element=t,this.render()}render(){var e;this.reactElement=r.createElement(this.component,{...this.props}),this.editor.options.useFlushSync?(0,J.flushSync)((()=>{var e;null==(e=this.editor.contentComponent)||e.setState({renderers:this.editor.contentComponent.state.renderers.set(this.id,this)})})):null==(e=this.editor.contentComponent)||e.setState({renderers:this.editor.contentComponent.state.renderers.set(this.id,this)})}updateProps(e={}){this.props={...this.props,...e},this.render()}destroy(){var e;if(this.editor.options.useFlushSync)(0,J.flushSync)((()=>{var e;if(null==(e=this.editor)?void 0:e.contentComponent){const{renderers:e}=this.editor.contentComponent.state;e.delete(this.id),this.editor.contentComponent.setState({renderers:e})}}));else if(null==(e=this.editor)?void 0:e.contentComponent){const{renderers:e}=this.editor.contentComponent.state;e.delete(this.id),this.editor.contentComponent.setState({renderers:e})}}}class eo extends r.Component{componentDidMount(){this.maybeMoveContentDOM()}maybeMoveContentDOM(){this.props.contentDOMElement&&this.props.viewDomElement&&(this.props.contentDOMElement.isSameNode(this.props.viewDomElement.lastElementChild)||this.props.viewDomElement.append(this.props.contentDOMElement))}componentDidUpdate(){this.maybeMoveContentDOM()}render(){return this.props.children}}class to{constructor(e,t,o){this.contentDOMElement=null,this.viewDomElement=null,this.selected=!1,this.deleteNode=()=>{const e=this.props.getPos(),t=e+this.props.node.nodeSize;this.props.editor.commands.deleteRange({from:e,to:t})},this.updateAttributes=e=>{this.props.editor.commands.command((({tr:t})=>{const o=this.props.getPos();return t.setNodeMarkup(o,void 0,{...this.props.node.attrs,...e}),!0}))},this.Component=e,this.editor=t.editor,this.rendererOptions=o,this.props={...t,editor:this.editor,selected:!1,extension:{},getPos:"function"===typeof t.getPos?t.getPos:()=>-1,updateAttributes:(e={})=>this.updateAttributes(e),deleteNode:()=>this.deleteNode()},this.init()}init(){this.viewDomElement=document.createElement("div"),this.viewDomElement.classList.add(this.rendererOptions.viewDomClass),this.updateDomAttributes(),this.contentDOMElement=document.createElement("div"),this.contentDOMElement.classList.add(this.rendererOptions.contentDomClass);this.renderer=new Xt((()=>r.createElement(eo,{updateAttributes:this.updateAttributes,viewDomElement:this.viewDomElement,contentDOMElement:this.contentDOMElement},r.createElement(this.Component,{...this.props,editor:this.editor}))),this.viewDomElement,{editor:this.editor,props:this.props})}get dom(){return this.viewDomElement}get contentDOM(){return this.contentDOMElement}updateDomAttributes(){Object.keys(this.props.node.attrs).forEach((e=>{var t,o,n;void 0!==this.props.node.attrs[e]&&null!==this.props.node.attrs[e]&&!1!==(null==(t=A.fq6[e])?void 0:t.rendered)?null==(o=this.viewDomElement)||o.setAttribute(e,this.props.node.attrs[e]):null==(n=this.viewDomElement)||n.removeAttribute(e)}))}update(e){var t;return!!e.attrs[n.TR.BLOCK_UUID]&&(this.props={...this.props,node:e},null==(t=this.renderer)||t.updateProps(this.props),this.updateDomAttributes(),!0)}ignoreMutation(e){if(!this.dom||!this.contentDOM)return!0;if(this.props.node.isLeaf||this.props.node.isAtom)return!0;if("selection"===e.type)return!1;if(this.dom.contains(e.target)&&"childList"===e.type&&(["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document)){if([...Array.from(e.addedNodes),...Array.from(e.removedNodes)].every((e=>e.isContentEditable)))return!1}return this.contentDOM===e.target&&"attributes"===e.type||!this.contentDOM.contains(e.target)}selectNode(){var e;null==(e=this.renderer)||e.updateProps({selected:!0})}deselectNode(){var e;null==(e=this.renderer)||e.updateProps({selected:!1})}destroy(){var e;null==(e=this.renderer)||e.destroy(),this.contentDOMElement=null}}const oo=e=>(0,A.VYO)(e).extend({addNodeView(){return t=((e,t)=>o=>{var n,a,i;const l=o.node.attrs.type;if(!l)return r.createElement(r.Fragment,null);const s=null==(a=null==t?void 0:t.wrapperComponentOverrides)?void 0:a[null!=(n=null==t?void 0:t.extensionVersion)?n:"main"],c=null!=(i=null==s?void 0:s[l])?i:e[l];return r.createElement(r.Fragment,null,c&&r.createElement(c,{...o,options:t}))})({...Gt,...Vt},e),e=>e.editor.contentComponent?new to(t,e,{viewDomClass:n.oS.BLOCK,contentDomClass:n.oS.BLOCK_WRAPPER,...o}):{};var t,o}});class no{constructor(e,{editor:t,props:o={},as:r="div",wrapper:a}){this.ref=null,this.id=(0,n.D1)(),this.component=e,this.editor=t,this.props=o,this.element=document.createElement(r),this.element.classList.add("react-renderer"),null==a||a.append(this.element),this.render()}render(){var e;const t=this.component,o=this.props;(function(e){return!("function"!==typeof e||!e.prototype||!e.prototype.isReactComponent)}(t)||function(e){var t;return!("object"!==typeof e||"Symbol(react.forward_ref)"!==(null==(t=e.$$typeof)?void 0:t.toString()))}(t))&&(o.ref=e=>{this.ref=e}),this.reactElement=r.createElement(t,{...o}),this.editor.options.useFlushSync?(0,J.flushSync)((()=>{var e;(null==(e=this.editor)?void 0:e.contentComponent)&&this.editor.contentComponent.setState({renderers:this.editor.contentComponent.state.renderers.set(this.id,this)})})):(null==(e=this.editor)?void 0:e.contentComponent)&&this.editor.contentComponent.setState({renderers:this.editor.contentComponent.state.renderers.set(this.id,this)})}updateProps(e={}){this.props={...this.props,...e},this.render()}destroy(){var e,t;if(this.editor.options.useFlushSync)(0,J.flushSync)((()=>{var e;if(null==(e=this.editor)?void 0:e.contentComponent){const{renderers:e}=this.editor.contentComponent.state;e.delete(this.id),this.editor.contentComponent.setState({renderers:e})}}));else if(null==(e=this.editor)?void 0:e.contentComponent){const{renderers:e}=this.editor.contentComponent.state;e.delete(this.id),this.editor.contentComponent.setState({renderers:e})}null==(t=this.element.parentElement)||t.removeChild(this.element)}}const ro=e=>{var t,o;if(!e)return;const r=null==(t=e.getAttributes("textStyle"))?void 0:t.fontColor,a=null==(o=e.getAttributes(n.d9.HIGHLIGHT))?void 0:o.color;if(!r&&!a)return;const i=r?"text":"background";return{type:i,color:"text"===i?r:a}},ao=e=>{switch(e){case 1:default:return r.createElement($.JO,{icon:$.PJ.H1,height:20});case 2:return r.createElement($.JO,{icon:$.PJ.H2,height:20});case 3:return r.createElement($.JO,{icon:$.PJ.H3,height:20})}},io={...A.XEN,icon:r.createElement($.JO,{icon:$.PJ.TEXT2,height:20}),shortcut:r.createElement($.z9,{keys:[$.sr.COMMAND,$.sr.OPTION,"0"]})},lo=e=>({...(0,A.LL7)(e),shortcut:r.createElement($.z9,{keys:[$.sr.COMMAND,$.sr.OPTION,`${e}`]}),icon:ao(e)}),so={...A.Ukw,icon:r.createElement($.JO,{icon:$.PJ.UNORDERED_LIST,height:20}),shortcut:r.createElement($.z9,{keys:[$.sr.COMMAND,$.sr.OPTION,"5"]})},co={...A.scU,icon:r.createElement($.JO,{icon:$.PJ.ORDERED_LIST,height:20}),shortcut:r.createElement($.z9,{keys:[$.sr.COMMAND,$.sr.OPTION,"6"]})},uo={...A.OL9,icon:r.createElement($.JO,{icon:$.PJ.TODOLIST,height:20}),shortcut:r.createElement($.z9,{keys:[$.sr.COMMAND,$.sr.OPTION,"4"]})},po={...A.P97,icon:r.createElement($.JO,{icon:$.PJ.QUOTE,height:20}),shortcut:r.createElement($.z9,{keys:[$.sr.COMMAND,$.sr.OPTION,"8"]})},mo={...A.y8x,icon:r.createElement($.JO,{icon:$.PJ.CODE,height:20}),shortcut:r.createElement($.z9,{keys:[$.sr.COMMAND,$.sr.OPTION,"7"]})},go={...A.dY2,icon:r.createElement($.JO,{icon:$.PJ.DIVIDER_VERTICAL,height:20})},ho={...A.Aw$,icon:r.createElement($.JO,{icon:$.PJ.PLAY,height:20})},fo={...A.cBh,icon:r.createElement($.JO,{icon:$.PJ.ALIGN_LEFT})},bo={...A.pk7,icon:r.createElement($.JO,{icon:$.PJ.CARD_FILLED,height:20}),shortcut:r.createElement($.z9,{keys:[$.sr.COMMAND,$.sr.OPTION,"9"]})},_o={...A.IG8,icon:r.createElement($.JO,{icon:$.PJ.MARKER,height:20})},vo={...A.mOY,icon:r.createElement($.JO,{icon:$.PJ.CONNECTION,height:20}),shortcut:r.createElement($.z9,{keys:["[","["]})},yo=e=>({...(0,A.SVd)(e),icon:r.createElement($.JO,{icon:$.PJ.DOWNLOAD,height:20,style:{transform:"rotate(180deg)"}})}),xo={...A.Fnn,icon:r.createElement($.JO,{icon:$.PJ.ALIGNED})},Eo=[io,lo(1),lo(2),lo(3),uo,so,co,mo,po,bo,vo,go,ho,xo,yo(A.G5o.IMAGE),yo(A.G5o.PDF),yo(A.G5o.FILE),fo,_o],Co=(e,t)=>{const{state:o}=e,n=(0,A.BQY)(o.doc,o.selection.from),r=Eo.find((e=>e.schemaType===(null==n?void 0:n.node.type.name)));(null==r?void 0:r.unsetNodeToParagraph)&&(null==r||r.unsetNodeToParagraph(e)),t.runCommand(e)},wo={"basic-content":(e,t)=>ko(e,t),"basic-node-view-content":(e,t)=>t.runCommand(e),"turn-into":(e,t)=>Co(e,t),mark:(e,t)=>t.runCommand(e)},ko=(e,t)=>{var o;const r=(0,A.BQY)(e.state.doc,e.state.selection.anchor);((null==r?void 0:r.node.type.spec.group)!==n.ur.BLOCK||(null==(o=null==r?void 0:r.node.attrs)?void 0:o.type)!==n.P7.PARAGRAPH||""!==(null==r?void 0:r.node.textContent))&&e.commands.insertBlock(),t.runCommand(e)},Oo=(e,t,o)=>{const n="text"===t?"lastUsedColor":"lastUsedBackgroundColor";oe.set(n,{type:t,color:o});const r=ro(e),a=(null==r?void 0:r.type)===t&&(null==r?void 0:r.color)===o;if("text"===t){const t=null==e?void 0:e.chain().focus().unsetHighlight();return a?t.unsetFontColor().run():t.setFontColor(o).run()}if("background"===t){const t=null==e?void 0:e.chain().focus().unsetFontColor();return a?t.unsetHighlight().run():t.setHighlight({color:o}).run()}return!1},Lo=(e,t,o)=>{const n=wo[t];null==n||n(e,o)},So=[$.sr.COMMAND,$.sr.SHIFT,"C"],To=[$.sr.COMMAND,$.sr.SHIFT,"H"],Po=[{value:"bold",label:"Bold",icon:$.PJ.BOLD,shortcut:[$.sr.COMMAND,"B"],runCommand:e=>{null==e||e.commands.toggleBold()}},{value:"underline",label:"Underline",icon:$.PJ.UNDERLINE,shortcut:[$.sr.COMMAND,"U"],runCommand:e=>{null==e||e.commands.toggleUnderline()}},{value:"italic",label:"Italic",icon:$.PJ.ITALIC,shortcut:[$.sr.COMMAND,"I"],runCommand:e=>{null==e||e.commands.toggleItalic()}},{value:"strike",label:"Strikethrough",shortcut:[$.sr.COMMAND,$.sr.SHIFT,"S"],icon:$.PJ.STRIKETHROUGH,runCommand:e=>{null==e||e.chain().focus().toggleStrike().run()}},{value:"code",label:"Code",icon:$.PJ.CODE,shortcut:[$.sr.COMMAND,"E"],runCommand:e=>{null==e||e.chain().focus().toggleCode().run()}},{value:"link",label:"Link",icon:$.PJ.LINK,shortcut:[$.sr.COMMAND,"K"],runCommand:e=>{null==e||e.chain().focus().toggleEditLinkMenu().run()}},{value:"bidirectionalLink",label:"Bidirectional link",icon:$.PJ.BIDIRECTIONAL_LINK,shortcut:["[","["],runCommand:e=>{null==e||e.chain().insertMentionPlaceholderOnTextSelection({}).closeBalloonMenu().run()}}],Bo=[...A.qwe.sort(((e,t)=>e.order&&t.order?e.order-t.order:e.order)).map((e=>({value:e.title,colors:{color:e.color},label:e.title,icon:$.PJ.TEXT_COLOR})))],Ro=[...A.wWj.map((e=>({value:e.title,colors:{color:e.color},colorForIcon:e.colorForIcon,label:e.title,icon:$.PJ.MARKER2})))],Mo=[{icon:$.PJ.TEXT1,value:n.P7.PARAGRAPH,label:"Text",shortcut:[$.sr.COMMAND,$.sr.SHIFT,"0"]},{icon:$.PJ.H1,value:n.P7.HEADING_1,label:"Heading 1",shortcut:[$.sr.COMMAND,$.sr.SHIFT,"1"]},{icon:$.PJ.H2,value:n.P7.HEADING_2,label:"Heading 2",shortcut:[$.sr.COMMAND,$.sr.SHIFT,"2"]},{icon:$.PJ.H3,value:n.P7.HEADING_3,label:"Heading 3",shortcut:[$.sr.COMMAND,$.sr.SHIFT,"3"]},{icon:$.PJ.UNORDERED_LIST,value:n.P7.BULLETED_LIST,label:"Bullet List",shortcut:[$.sr.COMMAND,$.sr.SHIFT,"4"]},{icon:$.PJ.ORDERED_LIST,value:n.P7.NUMBERED_LIST,label:"Numbered List",shortcut:[$.sr.COMMAND,$.sr.SHIFT,"5"]},{icon:$.PJ.CODE,value:n.P7.CODE,label:"Code",shortcut:[$.sr.COMMAND,$.sr.SHIFT,"6"]},{icon:$.PJ.QUOTE,value:n.P7.BLOCKQUOTE,label:"Quote",shortcut:[$.sr.COMMAND,$.sr.SHIFT,"7"]}],$o=[{icon:$.PJ.ALIGN_LEFT,value:"left",label:"Left"},{icon:$.PJ.ALIGNED,value:"center",label:"Center"},{icon:$.PJ.ALIGNED,value:"right",label:"Right"},{icon:$.PJ.ALIGNED,value:"justify",label:"Justify"}],Ao=({palette:{grey:e},transitions:t,zIndex:o})=>({height:32,width:"fit-content",zIndex:o.tooltip,position:"relative",display:"flex",background:"none","& .MuiDivider-root":{height:12,alignSelf:"center"},"& .MuiSelect-select":{pl:1,display:"flex",alignItems:"center",minHeight:"unset !important","&.Mui-selected.last-used, &.active.last-used":{bgcolor:"initial",color:"primary.main",border:"none"}},"& .MuiSelect-icon, .MuiBox-root > .MuiSvgIcon-root":{transition:t.create("all",{duration:t.duration.shortest})},"& .MuiToggleButtonGroup-root, & .MuiButtonGroup-root":{alignItems:"center",gap:"2px",px:"2px","& .MuiToggleButton-root":{borderRadius:"4px !important",border:"unset",ml:"1 !important",p:"4px",color:e[200],bgcolor:"initial","&:hover":{color:"#fff"},"&.Mui-selected, &.active":{bgcolor:"initial",color:"primary.main"}}},"& .MuiInput-root:first-of-type, & .MuiInput-root:last-of-type":{borderRadius:"8px"}}),Io=({children:e})=>r.createElement(k.Z,{id:"ballon_seshat",elevation:4,sx:{width:"fit-content",background:({palette:e})=>(0,m.Fq)(e.background.default,.7),"& .MuiPaper-root":{background:"none"},"&:before":{content:'" "',position:"absolute",width:"100%",height:"100%",borderRadius:2,backdropFilter:"blur(10px)"}}},r.createElement(k.Z,{sx:Ao,elevation:8},e)),No=({palette:e})=>({color:"grey.50",width:"100%",padding:"0px 11px 0px 14px","& .MuiTypography-root":{color:"grey.50",bgcolor:(0,m.Fq)(e.background.default,.7),backdropFilter:"blur(8px)"}}),Ko=({tooltipTitle:e,title:t,children:o,...n})=>r.createElement(_.Z,{title:e,componentsProps:{tooltip:{sx:No}},PopperProps:{disablePortal:!0}},r.createElement(O.Z,{...n,disableRipple:!0},o)),Do=({openLauncher:e,openTooltip:t,openLauncherShortcut:o})=>{const n=(0,r.useCallback)((t=>{t.preventDefault(),t.stopPropagation(),null==e||e()}),[e]);return r.createElement(L.Z,null,r.createElement(Ko,{title:"note",tooltipTitle:!1===t?"":r.createElement(d.Z,{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},"Note"," ",r.createElement($.z9,{keys:(o||"\u2318+L").split("+")})),value:"",onMouseDown:n},r.createElement($.JO,{icon:$.PJ.QUICK_NOTE,size:22})))},Ho={"&&, .MuiTypography-root":{color:"grey.100"}},zo=e=>({transitions:t,palette:{text:o}})=>({whiteSpace:"nowrap",color:e?"text.primary":"grey.200","* .MuiTypography-root, .MuiSelect-iconStandard":{color:e?"text.primary":"grey.100"},"& .MuiSelect-icon, .MuiBox-root > .MuiSvgIcon-root":{transition:t.create("all",{duration:t.duration.shortest})},"&.MuiButtonBase-root.MuiToggleButton-root, .MuiTypography-root, .MuiSelect-iconStandard":{color:e?"text.primary":"grey.200"},"&:hover > .MuiTypography-root":{color:"text.primary"},"& .MuiList-root":{"& .MuiMenuItem-root":{".MuiBox-root > .MuiTypography-root":{color:o.secondary},".MuiBox-root > .MuiSvgIcon-root path":{stroke:o.disabled}}}}),Zo=e=>({...zo(e),'[aria-expanded="true"] > svg':{stroke:"text.primary"}}),jo={anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},disableAutoFocus:!0,disableEnforceFocus:!0,PaperProps:{sx:({palette:{grey:e,background:t}})=>({mt:.5,background:(0,m.Fq)(t.default,.7),backdropFilter:"blur(10px)",width:221,boxSizing:"border-box",pl:.5,color:"text.primary","& .MuiList-root":{maxHeight:150,py:1,overflowY:"auto",scrollBehavior:"smooth",scrollSnapType:"y mandatory",pr:.25,display:"flex",flexDirection:"column",gap:"2px",background:"none","&::-webkit-scrollbar":{display:"initial",width:12},"&::-webkit-scrollbar-track":{borderRadius:"9999px",bgcolor:e[400],border:"4px solid rgba(0, 0, 0, 0)",backgroundClip:"padding-box"},"&::-webkit-scrollbar-thumb":{bgcolor:e[200],borderRadius:"9999px",border:"4px solid rgba(0, 0, 0, 0)",backgroundClip:"padding-box"},"&::-webkit-scrollbar-thumb:hover":{background:e[300],borderRadius:"9999px",border:"4px solid rgba(0, 0, 0, 0)",backgroundClip:"padding-box"},"& .MuiMenuItem-root":{display:"flex",justifyContent:"space-between",scrollSnapAlign:"center",px:.5,py:0,minHeight:28,borderRadius:2,border:"1px solid transparent","&:hover":{border:`1px solid ${e[200]}`,bgcolor:(0,m.Fq)(t.default,.7)},"&.Mui-focusVisible":{border:`1px solid ${e[200]}`,bgcolor:(0,m.Fq)(t.paper,.7)},"&.Mui-selected":{border:`1px solid ${e[200]}`}}}})}},Fo="Default",Uo=({name:e,options:t,value:o,onChange:n,renderValue:a,shortcut:l,lastUsedColor:s,lastUsedBackgroundColor:c,openPopoverRef:u,setOpenPopoverRef:m,isTextType:g})=>{var h;const[f,b]=(0,r.useState)(!1),v=(0,r.useRef)(null),x=(0,r.useCallback)((()=>b(!0)),[b]),E=(0,r.useCallback)((()=>b(!1)),[b]),C=r.useMemo((()=>{if(!s&&!c)return;if("Highlight"===e){const e=t.find((e=>{var t;return(null==(t=e.colors)?void 0:t.color)===(null==c?void 0:c.color)}));return(null==e?void 0:e.label)===Fo?void 0:e}const o=t.find((e=>{var t;return(null==(t=e.colors)?void 0:t.color)===(null==s?void 0:s.color)}));return(null==o?void 0:o.label)===Fo?void 0:o}),[c,s,e,t]),w=(0,r.useCallback)((e=>e.label!==Fo||o.label!==Fo),[o.label]),k=(0,r.useMemo)((()=>l?r.createElement(r.Fragment,null,r.createElement(d.Z,{sx:{pr:1}},e),r.createElement($.z9,{keys:l})):e),[e,l]);r.useEffect((()=>()=>{f&&E()}),[]);const L=(0,r.useCallback)((e=>{e.preventDefault(),m(e.currentTarget!==u?e.currentTarget:null)}),[u,m]),P=(0,r.useCallback)(((e,t)=>{e.preventDefault(),e.stopPropagation(),null==n||n(e,t),m(null)}),[n,m]),B=(0,r.useCallback)((()=>{m(null),E()}),[E,m]),R=Boolean(v.current&&v.current===u);return r.createElement(r.Fragment,null,r.createElement(_.Z,{title:k,open:f,componentsProps:{tooltip:{sx:Ho}},PopperProps:{disablePortal:!0}},r.createElement(O.Z,{disableRipple:!0,value:1,ref:v,onMouseDown:L,onMouseEnter:x,onMouseLeave:E,sx:zo(R)},a(o),g&&r.createElement($.JO,{icon:R?$.PJ.CHEVRON_UP:$.PJ.CHEVRON_DOWN}))),r.createElement(i.ZP,{sx:g?zo(R):Zo(R),open:R,anchorEl:v.current,onClose:B,onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),B()},...jo},r.createElement(S.Z,null,C&&[r.createElement(y.Z,{value:C,key:"lastUsed",className:"last-used",onMouseDown:e=>P(e,C)},r.createElement(d.Z,{sx:{display:"flex",gap:1}},r.createElement($.JO,{color:"text.secondary",icon:o.icon,sx:{color:C.colorForIcon||(null==(h=C.colors)?void 0:h.color)||"currentColor","& path":{stroke:"currentColor"}}}),r.createElement(d.Z,{sx:{display:"flex",gap:4}},r.createElement(p.Z,{variant:"body2",alignSelf:"center"},"Last used"),r.createElement($.z9,{keys:l||[""]})))),r.createElement(T.Z,{orientation:"horizontal",key:"horizontal",sx:{".Mui-Divider":{marginTop:"4px"}}})],t.map((e=>{var t;return!!w(e)&&r.createElement(y.Z,{value:e,key:e.label,onMouseDown:t=>P(t,e),selected:o===e},r.createElement(d.Z,{sx:{display:"flex",gap:1}},r.createElement($.JO,{color:"text.secondary",icon:e.icon,sx:{color:e.colorForIcon||(null==(t=e.colors)?void 0:t.color)||"currentColor","& path":{stroke:"currentColor"}}}),r.createElement(p.Z,{variant:"body2",alignSelf:"center"},e.label)),e.shortcut&&r.createElement($.z9,{keys:e.shortcut}))})))))},Jo=({editor:e,textStyles:t,currentSelection:o,onTextTypeChange:a,onTextStylesChange:i,onTextColorChange:l,onHighlightColorChange:s,openLauncher:c,lastUsedColor:u,lastUsedBackgroundColor:m,openLauncherShortcut:g})=>{const[h,f]=(0,r.useState)(null),b=(0,r.useCallback)(((e,{value:t})=>a(t)),[a]),_=(0,r.useCallback)(((e,t)=>l(t.colors.color)),[l]),v=(0,r.useCallback)(((e,t)=>s(t.colors.color)),[s]),y=(0,r.useMemo)((()=>{var t,o;const r=(null==(o=null==(t=null==e?void 0:e.state)?void 0:t.selection)?void 0:o.$from).node(A.wZq);return c&&(null==r?void 0:r.attrs.type)===n.P7.CLIP_CONTENT}),[e,c]);return r.createElement(Io,null,r.createElement(P.Z,null,r.createElement(Uo,{name:"Text type",options:Mo,value:(null==o?void 0:o.type)||Mo[0],onChange:b,renderValue:e=>r.createElement(p.Z,null,e.label),openPopoverRef:h,setOpenPopoverRef:f,isTextType:!0})),r.createElement(T.Z,{orientation:"vertical",flexItem:!0}),r.createElement(L.Z,{value:t},Po.map((t=>r.createElement(Ko,{title:t.label,tooltipTitle:r.createElement(r.Fragment,null,r.createElement(d.Z,{sx:{pr:1}},t.label),t.shortcut&&r.createElement($.z9,{keys:t.shortcut})),value:t.value,key:t.label,onMouseDown:e=>{e.preventDefault(),i(t),f(null)},className:e.isActive(t.value)?"active":""},r.createElement($.JO,{icon:t.icon,size:20}))))),r.createElement(P.Z,null,r.createElement(Uo,{name:"Text colors",options:Bo,value:(null==o?void 0:o.color)||Bo[0],onChange:_,lastUsedColor:u,shortcut:So,renderValue:e=>{var t,o;return r.createElement($.JO,{size:20,icon:e.icon,sx:{color:null!=(o=e.colorForIcon)?o:(null==(t=e.colors)?void 0:t.color)||"currentColor","& path":{stroke:"currentColor"}}})},openPopoverRef:h,setOpenPopoverRef:f}),r.createElement(Uo,{name:"Highlight",options:Ro,value:(null==o?void 0:o.highlightColor)||Ro[0],onChange:v,lastUsedBackgroundColor:m,shortcut:To,renderValue:e=>{var t;return r.createElement($.JO,{size:20,icon:e.icon,sx:{color:e.colorForIcon||(null==(t=e.colors)?void 0:t.color)||"currentColor","& path":{stroke:"currentColor"}}})},openPopoverRef:h,setOpenPopoverRef:f}),y&&r.createElement(r.Fragment,null,r.createElement(T.Z,{orientation:"vertical",flexItem:!0}),r.createElement(Do,{openLauncher:c,openLauncherShortcut:g}))))},Wo=({editor:e,currentSelection:t,openLauncher:o,openLauncherShortcut:n})=>{var a,i,l;const[s,c]=(0,r.useState)(!1),u=(e=>{var t,o,n,r,a;return(null==(o=null==(t=null==e?void 0:e.highlightColor)?void 0:t.colors)?void 0:o.color)&&"inherit"!==(null==(r=null==(n=null==e?void 0:e.highlightColor)?void 0:n.colors)?void 0:r.color)?"inherit":null==(a=A.wWj.find((e=>"Yellow"===e.title)))?void 0:a.color})(t),p=(0,r.useCallback)((()=>{e.chain().focus().unsetHighlight().focusAtSelectionEnd().run()}),[e]),m=(0,r.useCallback)((t=>{if("inherit"===t)return p();e.chain().focus().setHighlight({color:t}).focusAtSelectionEnd().run()}),[e,p]);return r.createElement(Io,null,r.createElement(L.Z,null,(null==t?void 0:t.highlightColor)?r.createElement(Ko,{title:"Remove Highlight",tooltipTitle:"removeHighlight"===s?r.createElement(d.Z,{sx:{whiteSpace:"nowrap"}},"Remove Highlight"):"",value:"",onMouseEnter:()=>c("removeHighlight"),onMouseDown:()=>{c(!1),p()}},r.createElement($.JO,{icon:$.PJ.TRASH,size:22})):r.createElement(Ko,{title:"Highlight",value:"",tooltipTitle:"highlight"===s?r.createElement(r.Fragment,null,r.createElement(d.Z,{sx:{pr:1}},"Highlight"),r.createElement($.z9,{keys:To})):"",onMouseOver:()=>c("highlight"),onMouseDown:e=>{"string"===typeof u&&(e.preventDefault(),c(!1),m(u))}},r.createElement($.JO,{icon:$.PJ.MARKER2,size:22,sx:{color:null!=(l=null==(i=null==(a=null==t?void 0:t.highlightColor)?void 0:a.colors)?void 0:i.color)?l:"currentColor","& path":{stroke:"currentColor"}}}))),r.createElement(T.Z,{orientation:"vertical",flexItem:!0}),r.createElement(d.Z,{onMouseDown:()=>c(!1),onMouseOver:()=>c("note")},r.createElement(Do,{openLauncher:o,openTooltip:"note"===s,openLauncherShortcut:n})))},qo=({editor:e,options:t})=>{const[o,n]=(0,r.useState)(oe.get("lastUsedColor")),[a,i]=(0,r.useState)(oe.get("lastUsedBackgroundColor")),l=(0,r.useCallback)((()=>{const{ranges:t}=e.state.selection,{from:o,to:n}=(e=>({from:Math.min(...e.map((e=>e.$from.pos))),to:Math.max(...e.map((e=>e.$to.pos)))}))(t);if((0,N.EG)(e.state.selection)){const t=e.view.nodeDOM(o);if(t)return t.getBoundingClientRect()}return(0,N.pr)(e.view,o,n)}),[e]),s=(e=>{const[t,o]=(0,r.useState)({});return(0,r.useEffect)((()=>{const{state:t}=e;if(!t.selection.$anchor.parent)return;const n=(0,A.BQY)(t.doc,t.selection.from),r=Mo.find((e=>{var t;return e.value===(null==(t=null==n?void 0:n.node)?void 0:t.attrs.type)})),a=Bo.find((t=>{var o;return(null==(o=t.colors)?void 0:o.color)===(0,N.Jo)(e.view.state,"textStyle").fontColor})),i=Ro.find((t=>{var o;return(null==(o=t.colors)?void 0:o.color)===(0,N.Jo)(e.view.state,"highlight").color}));o({type:r,color:a,highlightColor:i})}),[]),t})(e),c=r.createElement(Jo,{editor:e,openLauncherShortcut:null==t?void 0:t.openLauncherShortcut,textType:Mo[0],textStyles:[Po[0].toString()],textColors:Bo[0],textJustify:$o[0],openLauncher:null==t?void 0:t.openLauncher,currentSelection:s,inputError:"Error",lastUsedColor:o,lastUsedBackgroundColor:a,onTextTypeChange:t=>e.chain().focus().updateBlockAttributes({type:t}).run(),onTextStylesChange:t=>{t.runCommand&&t.runCommand(e)},onTextColorChange:t=>{"inherit"!==t?(Oo(e,"text",t),n({color:t,type:"text"})):e.commands.unsetFontColor()},onHighlightColorChange:t=>{"inherit"!==t?(Oo(e,"background",t),i({color:t,type:"background"})):e.commands.unsetHighlight()},onTextJustifyChange:t=>e.chain().focus().setAlign(t).run()}),d=r.createElement(Wo,{editor:e,openLauncher:null==t?void 0:t.openLauncher,currentSelection:s,openLauncherShortcut:null==t?void 0:t.openLauncherShortcut});return r.createElement("div",null,r.createElement(K.ZP,{interactive:!0,showOnCreate:!0,trigger:"manual",getReferenceClientRect:l,content:"read_later_view"===(null==t?void 0:t.extensionVersion)?d:c,appendTo:()=>{var t,o;return(null==(o=null==(t=null==e?void 0:e.view)?void 0:t.dom)?void 0:o.parentElement)||document.body}}))},Go=new W.H$("balloonMenuPlugin"),Vo=()=>({dispatch:e,tr:t})=>(null==e||e(Yo(t)),!0),Yo=e=>e.setMeta(Go,{isOpen:!1}),Qo=()=>({dispatch:e,tr:t})=>(null==e||e(Xo(t)),!0),Xo=e=>e.setMeta(Go,{isOpen:!0}),en=e=>{var t;const{state:o,composing:r}=e,{doc:a,selection:i}=o;if(r||!e.hasFocus())return!1;if((0,A.jPl)(o.selection))return!1;const{ranges:l,$anchor:s}=i,c=Math.min(...l.map((e=>e.$from.pos))),d=Math.max(...l.map((e=>e.$to.pos))),u=0===a.textBetween(c,d).length&&i instanceof W.Bs;if(i.empty||u)return!1;const p=s.parent;if(p.type.name===n.EP.CONTENT_NODE_VIEW)return!1;const m=(0,A.BQY)(a,i.from);if((null==(t=null==m?void 0:m.node)?void 0:t.attrs.type)===n.P7.CARD_CONTENT)return!1;if((null==m?void 0:m.node.attrs.type)===n.P7.CLIP_CONTENT_TITLE)return!1;return!(p.content.content[0]&&p.content.content[0].type.name===n.QK.READ_LATER_DECORATION)},tn=e=>t=>{const o=(()=>{let e;return{onStart:({editor:t,...o})=>{e=new no(qo,{editor:t,props:{editor:t,...o}})},onUpdate({editor:t,...o}){null==e||e.updateProps({editor:t,...o})},onExit(){const t=e;setTimeout((()=>{null==t||t.destroy()}),0),e=void 0}}})();return new W.Sy({key:Go,state:{init:()=>({isOpen:!1}),apply(e,t){const o=e.getMeta(Go);return o?{isOpen:o.isOpen}:t}},props:{handleDOMEvents:{mousedown:e=>{const t=()=>{var o;en(e)&&(null==(o=e.dispatch)||o.call(e,Xo(e.state.tr))),document.removeEventListener("mouseup",t)};return document.addEventListener("mouseup",t),!1},keyup:e=>{var t;return en(e)&&(null==(t=e.dispatch)||t.call(e,Xo(e.state.tr))),!1}}},appendTransaction:(e,t,o)=>on(e,o)?Yo(o.tr):void 0,view(){return{update:({state:n},r)=>{var a,i,l,s,c;const d=null==(a=this.key)?void 0:a.getState(r),u=null==(i=this.key)?void 0:i.getState(n),p=!(null==d?void 0:d.isOpen)&&(null==u?void 0:u.isOpen),m=(null==d?void 0:d.isOpen)&&(null==u?void 0:u.isOpen),g=(null==d?void 0:d.isOpen)&&!(null==u?void 0:u.isOpen);p&&(null==(l=null==o?void 0:o.onStart)||l.call(o,{editor:e,options:t})),m&&(null==(s=null==o?void 0:o.onUpdate)||s.call(o,{editor:e,options:t})),g&&(null==(c=null==o?void 0:o.onExit)||c.call(o))}}}})},on=(e,t)=>{var o;return(null==(o=Go.getState(t))?void 0:o.isOpen)&&e.some((e=>e.selectionSet&&!e.getMeta(Go)))},nn=()=>({dispatch:e,tr:t,state:o})=>(null==e||e(rn(o,t)),!0),rn=(e,t)=>{var o;const n=null==(o=Go.getState(e))?void 0:o.isOpen;return t.setMeta(Go,{isOpen:!n})},an=e=>N.hj.create({name:"BalloonMenuExtension",addCommands:()=>({closeBalloonMenu:Vo,openBalloonMenu:Qo,toggleBalloonMenu:nn}),addProseMirrorPlugins(){return[tn(this.editor)(e)]}}),ln=e=>{const t=(0,r.useCallback)((t=>{t.preventDefault(),t.stopPropagation();const o=t.currentTarget.clientHeight,r=e.editor.view.posAtCoords({top:t.clientY-o,left:t.clientX+32+50});r&&e.editor.chain().setTextSelection(r.pos).insertBlock({type:n.P7.PARAGRAPH}).run()}),[e.editor]),o=(0,r.useCallback)((e=>{e.preventDefault(),e.stopPropagation()}),[]);return r.createElement(h.Z,{contentEditable:!1,onClick:t,onMouseDown:o,size:"small",sx:{padding:0,color:"text.secondary"}},r.createElement($.JO,{icon:$.PJ.ADD,size:24}))},sn=(e,t)=>{var o;if(document.querySelector(`[${A.omo}]`))return;const r=null==(o=e.posAtCoords({left:t.x+32+50,top:t.y}))?void 0:o.pos;let a=r&&(0,A.BQY)(e.state.doc,r);if(!a)return;if(a.node.attrs.type===n.P7.HIGHLIGHT&&(a=(0,A.BQY)(e.state.doc,a.from-1)),!a)return;const i={...a,dom:e.nodeDOM(a.from)};return cn(i)?i:void 0},cn=e=>{var t,o;return 0!==e.from&&(!(!(null==(t=e.dom)?void 0:t.isContentEditable)&&!dn(e.dom))&&!(null==(o=e.dom)?void 0:o.matches(`\n  [type="${n.P7.BLOCK_COLUMN}"],\n  [type="${n.P7.CLIP_CONTENT_TITLE}"],\n  [type="${n.P7.BLOCK_LINE}"],\n  [type="${n.P7.HIGHLIGHT}"],\n  [type="${n.P7.HIGHLIGHT}"] *\n  `)))},dn=e=>{const t=null==e?void 0:e.getAttribute("type");return!!t&&[n.P7.CLIP_CONTENT,n.QK.CLIP_BOOK].includes(t)},un=e=>{const t=e.editor,o=t.view,n=(0,r.useCallback)((e=>{const n={x:e.clientX,y:e.clientY},r=sn(o,n);r&&t.chain().focus(r.from).selectCurrentBlock().run()}),[t,o]),a=(0,r.useCallback)((e=>{const t={x:e.clientX,y:e.clientY},n=sn(o,t);if(!n)return;const{doc:r}=o.state,a=A.jh_.createFromPosition(r,n.from),i=new z.p2(a.getFragment(),0,0);o.dragging={slice:i,block:n,move:!0},e.dataTransfer.dropEffect="move",e.dataTransfer.effectAllowed="move",e.dataTransfer.setDragImage(n.dom,0,0)}),[o]),i=(0,r.useCallback)((e=>{e.dataTransfer.dropEffect="move",e.dataTransfer.effectAllowed="move",t.commands.focus()}),[t]);return r.createElement(r.Fragment,null,r.createElement(h.Z,{"data-drag-handle":!0,draggable:!0,contentEditable:!1,onDragStart:a,onDragEnd:i,onMouseUp:n,size:"small",sx:{padding:0,color:"text.secondary",cursor:"grab",userSelect:"none","&:active":{cursor:"grabbing"}}},r.createElement($.JO,{icon:$.PJ.DRAG,style:{fill:"currentColor"},size:24})))},pn={display:"flex",justifyContent:"flex-end",alignItems:"center",position:"absolute",width:"32px",transition:"opacity 350ms ease-out",opacity:0,flexDirection:"column"},mn=({targetElement:e,editor:t,visible:o=!0})=>{const n=r.useRef(null);return(0,r.useLayoutEffect)((()=>{const e=setTimeout((()=>{return e=o,void(n.current&&(n.current.style.opacity=e?"0.5":"0"));var e}),30);return()=>clearTimeout(e)}),[o]),e&&n.current&&gn({element:n.current,block:e}),r.createElement("div",null,r.createElement(d.Z,{sx:pn,ref:n,"data-block-handles":!0},r.createElement(un,{editor:t}),r.createElement(ln,{editor:t})))},gn=({element:e,block:t})=>{var o;const n=null!=(o=e.offsetParent)?o:document.body,r=null==n?void 0:n.getBoundingClientRect(),a=t.getBoundingClientRect();e.style.top=`${fn({block:t,targetRect:a,offsetRect:r})}px`,e.style.right=`${hn({block:t,targetRect:a,offsetRect:r})}px`},hn=({block:e,targetRect:t,offsetRect:o})=>{const n=bn(e)?o.width-t.right:t.left,r=e.offsetLeft<20?e.offsetLeft:0;return o.right-n+r},fn=({block:e,targetRect:t,offsetRect:o})=>{var r;const a=null!=(r=e.querySelector(`.${n.oS.CONTENT}`))?r:e,i=getComputedStyle(a),l=parseInt(i.paddingTop);let s=parseInt(i.lineHeight);return s=isNaN(s)?19:s,t.top-((null==o?void 0:o.top)||0)+(s-24)/2+l},bn=e=>{var t,o;return(null==(t=e.parentElement)?void 0:t.firstElementChild)===e&&(null==(o=e.parentElement.parentElement)?void 0:o.getAttribute("type"))===n.P7.HIGHLIGHT_NOTE},_n=new W.H$("BlockHandlesPlugin"),vn=({editor:e,options:t})=>{var o;const n=(e=>{let t;return{isMounted:()=>!!t,onStart:({editor:o,...n})=>{var r;t=new no(mn,{editor:o,props:{editor:o,...n,...e},wrapper:null!=(r=document.getElementById(A.zhq))?r:document.body})},onUpdate({editor:o,...n}){null==t||t.updateProps({editor:o,...n,...e})},onExit(){const e=t;setTimeout((()=>{null==e||e.destroy()}),0),t=void 0}}})(t);let r;const a=null!=(o=document.getElementById(A.zhq))?o:document.body,i=()=>{var t;null==(t=n.onUpdate)||t.call(n,{editor:e,visible:!1,position:void 0,targetElement:void 0}),r=void 0},l=()=>{var e;null==(e=n.onExit)||e.call(n)};return new W.Sy({key:_n,view:()=>(null==a||a.addEventListener("mouseleave",l),{update(){var t;if(!r||!(null==(t=n.isMounted)?void 0:t.call(n))||!n.onUpdate)return;const o={editor:e,visible:!0,position:r.from,targetElement:r.dom};n.onUpdate(o)},destroy(){l(),null==a||a.removeEventListener("mouseleave",l)}}),props:{handleDOMEvents:{mousemove(t,o){var a,l,s,c;if(!(o instanceof MouseEvent))return;const d=sn(t,{x:o.clientX,y:o.clientY});if(!d)return i(),!1;if(d===r)return!1;const u={editor:e,visible:!0,position:d.from,targetElement:d.dom};if(null==(a=n.isMounted)?void 0:a.call(n))null==(l=n.onUpdate)||l.call(n,u);else{const e=document.querySelector("[data-block-handles]");e&&(null==(s=e.parentNode)||s.removeChild(e)),null==(c=n.onStart)||c.call(n,u)}return r=d,!1},keyup:()=>(i(),!1)}}})},yn=e=>N.hj.create({name:"BlockHandlesExtension",addProseMirrorPlugins(){return[vn({editor:this.editor,options:null==e?void 0:e.blockHandle}),xn()]}}),xn=()=>new W.Sy({props:{handleDOMEvents:{dragstart:(e,t)=>(t.preventDefault(),!0)}}});n.P7.HEADING_1,n.P7.HEADING_2,n.P7.HEADING_3,n.P7.HEADING_4,n.P7.BLOCKQUOTE,n.P7.BULLETED_LIST,n.P7.NUMBERED_LIST,n.P7.TOGGLE_LIST,n.P7.NODE_VIEW,n.P7.HIGHLIGHT_NOTE,d.Z,$.z9,d.Z,n.P7.PARAGRAPH,d.Z,$.z9,d.Z,n.P7.HIGHLIGHT_NOTE;const En=(0,D.Z)("div")((e=>({position:"relative",display:"flex",alignItems:"center",lineHeight:"120%",userSelect:"none",minHeight:"28px",maxHeight:"28px",fontSize:"12px",cursor:"pointer",paddingRight:"14px",backgroundColor:"inherit",border:"0.5px solid transparent",borderRadius:e.theme.shape.borderRadius+4,color:e.theme.palette.grey[100],marginBottom:"1px","& .MuiTypography-root":{color:"currentColor"},"&:hover":{backgroundColor:e.theme.palette.grey[500],border:"0.5px solid #545454",color:e.theme.palette.grey[50]},"&.isSelected":{backgroundColor:"rgba(38, 39, 44, 0.64)",border:"0.5px solid #545454",color:e.theme.palette.grey[50]}}))),Cn=r.forwardRef((({onMouseDown:e,children:t,isSelected:o},n)=>r.createElement(En,{ref:n,className:o?"isSelected":"",onMouseDown:e},t))),wn=(0,D.Z)("div")({width:"20px",height:"20px",borderRadius:"4px",fontWeight:700,padding:"8px",margin:"8px 5px 8px 0",overflow:"hidden"}),kn=({popOverRef:e,onMouseDown:t,item:o,isActive:n})=>{const a=r.useRef(null);return(({itemRef:e,isSelectedItem:t,containerRef:o})=>{r.useEffect((()=>{if(t&&(null==e?void 0:e.current)&&(null==o?void 0:o.current)){var{shouldScroll:n,behavior:r,top:a}=((e,t)=>{const o=t.getBoundingClientRect(),n=e.getBoundingClientRect(),r=o.top-n.top+e.scrollTop,a=r<(null==e?void 0:e.scrollTop)+100,i=r+100>n.height+e.scrollTop,l=a||i,s=o.top+e.scrollTop-n.top<o.height,c=o.top-o.height+e.scrollTop>e.scrollHeight;return{shouldScroll:l,behavior:s||c?"auto":"smooth",top:r-n.height+100}})(null==o?void 0:o.current,e.current);n&&o.current.scrollTo({behavior:r,top:a})}}),[o,t,e])})({itemRef:a,containerRef:e,isSelectedItem:null!=n&&n}),r.createElement(Cn,{ref:a,isSelected:n,onMouseDown:()=>null==t?void 0:t(o)},o.icon&&r.createElement(wn,{className:"flex_column align_center justify_center",itemType:o.schemaType},o.icon),r.createElement(p.Z,null,o.title),r.createElement(d.Z,{sx:{position:"absolute",right:"5px"}},o.shortcut&&o.shortcut))},On=(e,t)=>{var o,n;return null!=(n=null==(o=t.shouldBeHidden)?void 0:o.call(t,e))&&n},Ln=(0,D.Z)("div")((()=>({display:"flex",flexDirection:"column",paddingBottom:"6px"}))),Sn=({typography:e})=>({...e.overline,display:"flex",marginBottom:"8px",paddingLeft:"3px",color:"text.hint",bgcolor:"transparent"}),Tn=({title:e,children:t})=>r.createElement(Ln,null,r.createElement(d.Z,{sx:Sn},e),t),Pn=({editor:e,group:t,popOverRef:o,onMouseDown:n,isItemSelected:a})=>{var i,l;return r.useMemo((()=>{var o,n;return null==(n=null==(o=null==t?void 0:t.items)?void 0:o.filter((t=>!On(e,t))))?void 0:n.length}),[t,e])?r.createElement(Tn,{title:t.groupTitle},null==(l=null==(i=null==t?void 0:t.items)?void 0:i.filter((t=>!On(e,t))))?void 0:l.map(((e,t)=>r.createElement(kn,{popOverRef:o,key:t,isActive:a(t),onMouseDown:n,item:e})))):r.createElement(r.Fragment,null)},Bn=(0,r.forwardRef)(((e,t)=>{const o=(0,r.useRef)(null),{items:n,editor:a,range:i}=e,[l,s]=(0,r.useState)(0),[c,d]=(0,r.useState)(Rn(a,n)),u=(({editor:e,range:t,items:o})=>r.useCallback((({selectedIndex:n,selectedItem:r})=>{const a=void 0!==n&&null!==n?o[n]:r;a&&(t&&e.chain().focus().deleteRange(t).run(),Lo(e,a.currentCommandType,a))}),[e,o,t]))({editor:a,range:i,items:c});(0,r.useEffect)((()=>{s(0),d(Rn(a,n))}),[a,n,d]);const m=(0,r.useCallback)((()=>{s((l+c.length-1)%c.length)}),[c.length,l]),g=(0,r.useCallback)((()=>{s((l+1)%c.length)}),[c.length,l]),h=(0,r.useCallback)((()=>{u({selectedIndex:l})}),[u,l]),f=(0,r.useCallback)((({event:e,destroyHandler:t})=>"ArrowUp"===e.key?(m(),!0):"ArrowDown"===e.key?(g(),!0):"Enter"===e.key?(h(),!0):!("Escape"!==e.key||!t)&&(t(),!0)),[m,g,h]);(0,r.useImperativeHandle)(t,(()=>({onKeyPress:f})));const b=(0,r.useCallback)((e=>t=>e+t===l),[l]);let _=0;return r.createElement(se,{id:"trailing-menu-popover",height:254},r.createElement(V.Z,{tabIndex:-1,scrollableNodeProps:{ref:o},style:{height:"246px"}},c.length<=0&&r.createElement(p.Z,{m:2,sx:{color:$.rS.palette.grey[200]}},"No results found"),n.map((e=>{var t,n;const i=r.createElement(Pn,{popOverRef:o,key:`${e.groupTitle}`,group:e,editor:a,onMouseDown:e=>u({selectedItem:e}),isItemSelected:b(_)});return _+=null!=(n=null==(t=null==e?void 0:e.items)?void 0:t.length)?n:0,i}))))})),Rn=(e,t)=>{var o;return null==(o=null==t?void 0:t.flatMap((e=>null==e?void 0:e.items)))?void 0:o.filter((t=>!On(e,t)))},Mn=()=>{let e,t;return{onStart:o=>{e=new no(Bn,{editor:o.editor,props:o}),t=(0,q.ZP)("body",{getReferenceClientRect:o.clientRect,appendTo:()=>document.getElementById(A.zhq)||document.body,content:e.element,showOnCreate:!0,interactive:!0,trigger:"manual",placement:"bottom-start"})},onUpdate(o){null==e||e.updateProps(o),null==t||t[0].setProps({getReferenceClientRect:o.clientRect})},onKeyDown(t){var o;return null==(o=null==e?void 0:e.ref)?void 0:o.onKeyPress({...t,destroyHandler:()=>this.onExit()})},onExit(){null==t||t[0].destroy(),null==e||e.destroy()}}},$n=new W.H$("EditLinkMenuPlugin"),An=e=>A.qwe.map((t=>({type:`${e}-${t.title}`,title:"text"===e?t.title:`${t.title} Background`,schemaType:"text"===e?"fontColor":n.d9.HIGHLIGHT,icon:r.createElement($.JO,{color:"text.secondary",icon:"text"===e?$.PJ.COLOR_NONE:$.PJ.MARKER2,sx:{color:t.color||"currentColor","& path":{stroke:"currentColor"}}}),search:[e,`${e} ${t.title}`,t.title,"color"],commandsType:["mark"],runCommand:o=>Oo(o,e,t.color)})));$.JO,$.PJ.CODE;const In=[{groupTitle:"Blocks",items:Eo.map((e=>({...e,currentCommandType:e.commandsType.includes("basic-node-view-content")?"basic-node-view-content":"basic-content",runCommand:t=>null==e?void 0:e.runCommand(t)})))},{groupTitle:"Colors",items:An("text").map((e=>({...e,currentCommandType:"mark",runCommand:t=>e.runCommand(t)})))},{groupTitle:"Turn block into",items:Eo.filter((e=>e.commandsType.includes("turn-into"))).map((e=>({...e,currentCommandType:"turn-into",search:e.search.map((e=>`turn into ${e}`)),runCommand:t=>null==e?void 0:e.runCommand(t)})))},{groupTitle:"Highlight",items:An("background").map((e=>({...e,currentCommandType:"mark",runCommand:t=>null==e?void 0:e.runCommand(t)})))}],Nn=({query:e})=>In.map((t=>({...t,items:t.items.filter((t=>t.search.some((t=>t.toLowerCase().indexOf(e.toLowerCase())>-1))))}))),Kn=new W.H$("trailing-menu"),Dn=N.hj.create({name:"TrailingMenuExtension",addOptions:()=>({suggestion:{char:"/",items:Nn,render:Mn,startOfLine:!1,command:({editor:e,range:t,props:o})=>{o.command({editor:e,range:t})},allow:({editor:e,range:t})=>{const o=e.state.doc.resolve(t.from);return!(0,A.KR)(o)}}}),addProseMirrorPlugins(){return[(0,G.ZP)({...this.options.suggestion,pluginKey:Kn,editor:this.editor})]}});const Hn=new W.H$("seshatSuggestion");function zn({pluginKey:e=Hn,editor:t,char:o="@",allowSpaces:n=!1,prefixSpace:r=!0,startOfLine:a=!1,decorationTag:i="span",decorationClass:l="suggestion",command:s=(()=>null),items:c=(()=>[]),render:d=(()=>({})),allow:u=(()=>!0)}){let p;const m=null==d?void 0:d(),g=new W.Sy({key:e,view(){return{update:async(e,o)=>{var n,r,a,i,l,d,u,g,h,f;const b=null==(n=this.key)?void 0:n.getState(o),_=null==(r=this.key)?void 0:r.getState(e.state),v=(null==b?void 0:b.active)&&(null==_?void 0:_.active)&&(null==(a=b.range)?void 0:a.from)!==(null==(i=_.range)?void 0:i.from),y=!(null==b?void 0:b.active)&&(null==_?void 0:_.active),x=(null==b?void 0:b.active)&&!(null==_?void 0:_.active),E=y||v,C=!y&&!x&&(null==b?void 0:b.query)!==(null==_?void 0:_.query)&&!v,w=x||v;if(!E&&!C&&!w||(null==_?void 0:_.escape))return;const k=w&&!E?b:_;if(!k)return;const O=document.querySelector(`[data-decoration-id="${k.decorationId}"]`);p={editor:t,range:k.range,query:null!=(l=k.query)?l:"",text:null!=(d=k.text)?d:"",items:C||E?await c({editor:t,query:null!=(u=k.query)?u:""}):[],command:e=>{s({editor:t,range:k.range,props:e})},decorationNode:O,clientRect:O?()=>{var e,o;const{decorationId:n}=null!=(o=null==(e=this.key)?void 0:e.getState(t.state))?o:{};if(!n)return new DOMRect;const r=document.querySelector(`[data-decoration-id="${n}"]`);return(null==r?void 0:r.getBoundingClientRect())||new DOMRect}:null},w&&(null==(g=null==m?void 0:m.onExit)||g.call(m,{...p,escape:!0})),C&&(null==(h=null==m?void 0:m.onUpdate)||h.call(m,p)),E&&(null==(f=null==m?void 0:m.onStart)||f.call(m,p))},destroy:()=>{var e;p&&(null==(e=null==m?void 0:m.onExit)||e.call(m,p))}}},state:{init:()=>({active:!1,range:{from:0,to:0},query:null,text:null,composing:!1,escape:!1}),apply(i,l,s){var c;const{composing:d}=t.view,{selection:p}=i,{empty:m,from:g}=p,h=null!=(c=i.getMeta(e))?c:{...l};if(h.composing=d,m||t.view.composing){!(g<l.range.from||g>l.range.to)||d||l.composing||(h.active=!1);const e=function(e){const{char:t,allowSpaces:o,prefixSpace:n,startOfLine:r,$position:a}=e,i=t.split("").map((e=>`\\${e}`)).join(""),l=new RegExp(`\\s${i}$`),s=r?"^":"",c=o?new RegExp(`${s}${i}.*?(?=\\s${i}|$)`,"gm"):new RegExp(`${s}(?:^)?${i}[^\\s${i}]*`,"gm"),d=a.depth<=0?0:a.before(),u=a.pos,p=a.doc.textBetween(d,u,"\0","\0"),m=Array.from(p.matchAll(c)).pop();if(!m||void 0===m.input||void 0===m.index)return null;const g=m.input.slice(Math.max(0,m.index-1),m.index),h=/^[\s\0]?$/.test(g);if(n&&!h)return null;const f=m.index+a.start();let b=f+m[0].length;return o&&l.test(p.slice(b-1,b+1))&&(m[0]+=" ",b+=1),f<a.pos&&b>=a.pos?{range:{from:f,to:b},query:m[0].slice(t.length),text:m[0]}:null}({char:o,allowSpaces:n,prefixSpace:r,startOfLine:a,$position:p.$from}),i=`id_${Math.floor(4294967295*Math.random())}`;e&&u({editor:t,state:s,range:e.range})?(h.active=!0,h.decorationId=l.decorationId?l.decorationId:i,h.range=e.range,h.query=e.query,h.text=e.text,h.escape=!!l.decorationId&&h.escape):h.active=!1}else h.active=!1;return(null==h?void 0:h.active)||(h.decorationId=null,h.range={},h.query=null,h.text=null),h}},props:{handleDOMEvents:{keydown(t,o){var n,r;if(!(o instanceof KeyboardEvent))return!1;const a=g.getState(t.state);if(!a)return!1;const{active:i,range:l}=a;if(!i)return!1;if("Escape"===o.key&&(t.dispatch(t.state.tr.setMeta(e,{...a,escape:!0})),null==(n=null==m?void 0:m.onExit)||n.call(m,a),!a.escape&&a.text))return!0;if(a.escape)return!1;return(null==(r=null==m?void 0:m.onKeyDown)?void 0:r.call(m,{view:t,event:o,range:l}))||!1}},decorations(e){var t;const{active:o,range:n,decorationId:r}=null!=(t=g.getState(e))?t:{};return o&&n?Y.EH.create(e.doc,[Y.p.inline(n.from,n.to,{nodeName:i,class:l,"data-decoration-id":r})]):null}}});return g}const Zn=({char:e})=>new W.H$(`trailing-menu-fixed-${e}`),jn=({editor:e,onStart:t,onUpdate:o,onExit:n,chars:r,onKeyDown:a})=>{e&&r.forEach((r=>{e.registerPlugin((({render:e,editor:t,char:o})=>zn({char:o,prefixSpace:!1,items:()=>[],render:e,command:({editor:e,range:t})=>{e.commands.deleteRange(t)},pluginKey:Zn({char:o}),editor:t}))({char:r,editor:e,render:()=>({onStart:e=>null==t?void 0:t({...e,char:r}),onUpdate:e=>null==o?void 0:o({...e,char:r}),onExit:e=>null==n?void 0:n({...e,char:r}),onKeyDown:a?e=>null==a?void 0:a({...e,char:r}):void 0})}))}))},Fn=A.rqI.extend({addKeyboardShortcuts:()=>({[A.NTF.lastUsedColor]:({editor:e})=>{const t=oe.get("lastUsedColor");return!t||(Oo(e,t.type,t.color),!0)}})}),Un=[{id:"people",name:"Smileys & People",emojis:["grinning","smiley","smile","grin","laughing","sweat_smile","rolling_on_the_floor_laughing","joy","slightly_smiling_face","upside_down_face","wink","blush","innocent","smiling_face_with_3_hearts","heart_eyes","star-struck","kissing_heart","kissing","relaxed","kissing_closed_eyes","kissing_smiling_eyes","yum","stuck_out_tongue","stuck_out_tongue_winking_eye","zany_face","stuck_out_tongue_closed_eyes","money_mouth_face","hugging_face","face_with_hand_over_mouth","shushing_face","thinking_face","zipper_mouth_face","face_with_raised_eyebrow","neutral_face","expressionless","no_mouth","smirk","unamused","face_with_rolling_eyes","grimacing","lying_face","relieved","pensive","sleepy","drooling_face","sleeping","mask","face_with_thermometer","face_with_head_bandage","nauseated_face","face_vomiting","sneezing_face","hot_face","cold_face","woozy_face","dizzy_face","exploding_head","face_with_cowboy_hat","partying_face","sunglasses","nerd_face","face_with_monocle","confused","worried","slightly_frowning_face","white_frowning_face","open_mouth","hushed","astonished","flushed","pleading_face","frowning","anguished","fearful","cold_sweat","disappointed_relieved","cry","sob","scream","confounded","persevere","disappointed","sweat","weary","tired_face","yawning_face","triumph","rage","angry","face_with_symbols_on_mouth","smiling_imp","imp","skull","skull_and_crossbones","hankey","clown_face","japanese_ogre","japanese_goblin","ghost","alien","space_invader","robot_face","smiley_cat","smile_cat","joy_cat","heart_eyes_cat","smirk_cat","kissing_cat","scream_cat","crying_cat_face","pouting_cat","see_no_evil","hear_no_evil","speak_no_evil","wave","raised_back_of_hand","raised_hand_with_fingers_splayed","hand","spock-hand","ok_hand","pinching_hand","v","crossed_fingers","i_love_you_hand_sign","the_horns","call_me_hand","point_left","point_right","point_up_2","middle_finger","point_down","point_up","+1","-1","fist","facepunch","left-facing_fist","right-facing_fist","clap","raised_hands","open_hands","palms_up_together","handshake","pray","writing_hand","nail_care","selfie","muscle","mechanical_arm","mechanical_leg","leg","foot","ear","ear_with_hearing_aid","nose","brain","tooth","bone","eyes","eye","tongue","lips","baby","child","boy","girl","adult","person_with_blond_hair","man","bearded_person","red_haired_man","curly_haired_man","white_haired_man","bald_man","woman","red_haired_woman","red_haired_person","curly_haired_woman","curly_haired_person","white_haired_woman","white_haired_person","bald_woman","bald_person","blond-haired-woman","blond-haired-man","older_adult","older_man","older_woman","person_frowning","man-frowning","woman-frowning","person_with_pouting_face","man-pouting","woman-pouting","no_good","man-gesturing-no","woman-gesturing-no","ok_woman","man-gesturing-ok","woman-gesturing-ok","information_desk_person","man-tipping-hand","woman-tipping-hand","raising_hand","man-raising-hand","woman-raising-hand","deaf_person","deaf_man","deaf_woman","bow","man-bowing","woman-bowing","face_palm","man-facepalming","woman-facepalming","shrug","man-shrugging","woman-shrugging","health_worker","male-doctor","female-doctor","student","male-student","female-student","teacher","male-teacher","female-teacher","judge","male-judge","female-judge","farmer","male-farmer","female-farmer","cook","male-cook","female-cook","mechanic","male-mechanic","female-mechanic","factory_worker","male-factory-worker","female-factory-worker","office_worker","male-office-worker","female-office-worker","scientist","male-scientist","female-scientist","technologist","male-technologist","female-technologist","singer","male-singer","female-singer","artist","male-artist","female-artist","pilot","male-pilot","female-pilot","astronaut","male-astronaut","female-astronaut","firefighter","male-firefighter","female-firefighter","cop","male-police-officer","female-police-officer","sleuth_or_spy","male-detective","female-detective","guardsman","male-guard","female-guard","construction_worker","male-construction-worker","female-construction-worker","prince","princess","man_with_turban","man-wearing-turban","woman-wearing-turban","man_with_gua_pi_mao","person_with_headscarf","man_in_tuxedo","bride_with_veil","pregnant_woman","breast-feeding","angel","santa","mrs_claus","superhero","male_superhero","female_superhero","supervillain","male_supervillain","female_supervillain","mage","male_mage","female_mage","fairy","male_fairy","female_fairy","vampire","male_vampire","female_vampire","merperson","merman","mermaid","elf","male_elf","female_elf","genie","male_genie","female_genie","zombie","male_zombie","female_zombie","massage","man-getting-massage","woman-getting-massage","haircut","man-getting-haircut","woman-getting-haircut","walking","man-walking","woman-walking","standing_person","man_standing","woman_standing","kneeling_person","man_kneeling","woman_kneeling","person_with_probing_cane","man_with_probing_cane","woman_with_probing_cane","person_in_motorized_wheelchair","man_in_motorized_wheelchair","woman_in_motorized_wheelchair","person_in_manual_wheelchair","man_in_manual_wheelchair","woman_in_manual_wheelchair","runner","man-running","woman-running","dancer","man_dancing","man_in_business_suit_levitating","dancers","man-with-bunny-ears-partying","woman-with-bunny-ears-partying","person_in_steamy_room","man_in_steamy_room","woman_in_steamy_room","person_climbing","man_climbing","woman_climbing","fencer","horse_racing","skier","snowboarder","golfer","man-golfing","woman-golfing","surfer","man-surfing","woman-surfing","rowboat","man-rowing-boat","woman-rowing-boat","swimmer","man-swimming","woman-swimming","person_with_ball","man-bouncing-ball","woman-bouncing-ball","weight_lifter","man-lifting-weights","woman-lifting-weights","bicyclist","man-biking","woman-biking","mountain_bicyclist","man-mountain-biking","woman-mountain-biking","person_doing_cartwheel","man-cartwheeling","woman-cartwheeling","wrestlers","man-wrestling","woman-wrestling","water_polo","man-playing-water-polo","woman-playing-water-polo","handball","man-playing-handball","woman-playing-handball","juggling","man-juggling","woman-juggling","person_in_lotus_position","man_in_lotus_position","woman_in_lotus_position","bath","sleeping_accommodation","people_holding_hands","two_women_holding_hands","couple","two_men_holding_hands","couplekiss","woman-kiss-man","man-kiss-man","woman-kiss-woman","couple_with_heart","woman-heart-man","man-heart-man","woman-heart-woman","family","man-woman-boy","man-woman-girl","man-woman-girl-boy","man-woman-boy-boy","man-woman-girl-girl","man-man-boy","man-man-girl","man-man-girl-boy","man-man-boy-boy","man-man-girl-girl","woman-woman-boy","woman-woman-girl","woman-woman-girl-boy","woman-woman-boy-boy","woman-woman-girl-girl","man-boy","man-boy-boy","man-girl","man-girl-boy","man-girl-girl","woman-boy","woman-boy-boy","woman-girl","woman-girl-boy","woman-girl-girl","speaking_head_in_silhouette","bust_in_silhouette","busts_in_silhouette","footprints","kiss","love_letter","cupid","gift_heart","sparkling_heart","heartpulse","heartbeat","revolving_hearts","two_hearts","heart_decoration","heavy_heart_exclamation_mark_ornament","broken_heart","heart","orange_heart","yellow_heart","green_heart","blue_heart","purple_heart","brown_heart","black_heart","white_heart","100","anger","boom","dizzy","sweat_drops","dash","hole","bomb","speech_balloon","eye-in-speech-bubble","left_speech_bubble","right_anger_bubble","thought_balloon","zzz"]},{id:"nature",name:"Animals & Nature",emojis:["monkey_face","monkey","gorilla","orangutan","dog","dog2","guide_dog","service_dog","poodle","wolf","fox_face","raccoon","cat","cat2","lion_face","tiger","tiger2","leopard","horse","racehorse","unicorn_face","zebra_face","deer","cow","ox","water_buffalo","cow2","pig","pig2","boar","pig_nose","ram","sheep","goat","dromedary_camel","camel","llama","giraffe_face","elephant","rhinoceros","hippopotamus","mouse","mouse2","rat","hamster","rabbit","rabbit2","chipmunk","hedgehog","bat","bear","koala","panda_face","sloth","otter","skunk","kangaroo","badger","feet","turkey","chicken","rooster","hatching_chick","baby_chick","hatched_chick","bird","penguin","dove_of_peace","eagle","duck","swan","owl","flamingo","peacock","parrot","frog","crocodile","turtle","lizard","snake","dragon_face","dragon","sauropod","t-rex","whale","whale2","dolphin","fish","tropical_fish","blowfish","shark","octopus","shell","snail","butterfly","bug","ant","bee","beetle","cricket","spider","spider_web","scorpion","mosquito","microbe","bouquet","cherry_blossom","white_flower","rosette","rose","wilted_flower","hibiscus","sunflower","blossom","tulip","seedling","evergreen_tree","deciduous_tree","palm_tree","cactus","ear_of_rice","herb","shamrock","four_leaf_clover","maple_leaf","fallen_leaf","leaves"]},{id:"foods",name:"Food & Drink",emojis:["grapes","melon","watermelon","tangerine","lemon","banana","pineapple","mango","apple","green_apple","pear","peach","cherries","strawberry","kiwifruit","tomato","coconut","avocado","eggplant","potato","carrot","corn","hot_pepper","cucumber","leafy_green","broccoli","garlic","onion","mushroom","peanuts","chestnut","bread","croissant","baguette_bread","pretzel","bagel","pancakes","waffle","cheese_wedge","meat_on_bone","poultry_leg","cut_of_meat","bacon","hamburger","fries","pizza","hotdog","sandwich","taco","burrito","stuffed_flatbread","falafel","egg","fried_egg","shallow_pan_of_food","stew","bowl_with_spoon","green_salad","popcorn","butter","salt","canned_food","bento","rice_cracker","rice_ball","rice","curry","ramen","spaghetti","sweet_potato","oden","sushi","fried_shrimp","fish_cake","moon_cake","dango","dumpling","fortune_cookie","takeout_box","crab","lobster","shrimp","squid","oyster","icecream","shaved_ice","ice_cream","doughnut","cookie","birthday","cake","cupcake","pie","chocolate_bar","candy","lollipop","custard","honey_pot","baby_bottle","glass_of_milk","coffee","tea","sake","champagne","wine_glass","cocktail","tropical_drink","beer","beers","clinking_glasses","tumbler_glass","cup_with_straw","beverage_box","mate_drink","ice_cube","chopsticks","knife_fork_plate","fork_and_knife","spoon","hocho","amphora"]},{id:"activity",name:"Activities",emojis:["jack_o_lantern","christmas_tree","fireworks","sparkler","firecracker","sparkles","balloon","tada","confetti_ball","tanabata_tree","bamboo","dolls","flags","wind_chime","rice_scene","red_envelope","ribbon","gift","reminder_ribbon","admission_tickets","ticket","medal","trophy","sports_medal","first_place_medal","second_place_medal","third_place_medal","soccer","baseball","softball","basketball","volleyball","football","rugby_football","tennis","flying_disc","bowling","cricket_bat_and_ball","field_hockey_stick_and_ball","ice_hockey_stick_and_puck","lacrosse","table_tennis_paddle_and_ball","badminton_racquet_and_shuttlecock","boxing_glove","martial_arts_uniform","goal_net","golf","ice_skate","fishing_pole_and_fish","diving_mask","running_shirt_with_sash","ski","sled","curling_stone","dart","yo-yo","kite","8ball","crystal_ball","nazar_amulet","video_game","joystick","slot_machine","game_die","jigsaw","teddy_bear","spades","hearts","diamonds","clubs","chess_pawn","black_joker","mahjong","flower_playing_cards","performing_arts","frame_with_picture","art","thread","yarn"]},{id:"places",name:"Travel & Places",emojis:["earth_africa","earth_americas","earth_asia","globe_with_meridians","world_map","japan","compass","snow_capped_mountain","mountain","volcano","mount_fuji","camping","beach_with_umbrella","desert","desert_island","national_park","stadium","classical_building","building_construction","bricks","house_buildings","derelict_house_building","house","house_with_garden","office","post_office","european_post_office","hospital","bank","hotel","love_hotel","convenience_store","school","department_store","factory","japanese_castle","european_castle","wedding","tokyo_tower","statue_of_liberty","church","mosque","hindu_temple","synagogue","shinto_shrine","kaaba","fountain","tent","foggy","night_with_stars","cityscape","sunrise_over_mountains","sunrise","city_sunset","city_sunrise","bridge_at_night","hotsprings","carousel_horse","ferris_wheel","roller_coaster","barber","circus_tent","steam_locomotive","railway_car","bullettrain_side","bullettrain_front","train2","metro","light_rail","station","tram","monorail","mountain_railway","train","bus","oncoming_bus","trolleybus","minibus","ambulance","fire_engine","police_car","oncoming_police_car","taxi","oncoming_taxi","car","oncoming_automobile","blue_car","truck","articulated_lorry","tractor","racing_car","racing_motorcycle","motor_scooter","manual_wheelchair","motorized_wheelchair","auto_rickshaw","bike","scooter","skateboard","busstop","motorway","railway_track","oil_drum","fuelpump","rotating_light","traffic_light","vertical_traffic_light","octagonal_sign","construction","anchor","boat","canoe","speedboat","passenger_ship","ferry","motor_boat","ship","airplane","small_airplane","airplane_departure","airplane_arriving","parachute","seat","helicopter","suspension_railway","mountain_cableway","aerial_tramway","satellite","rocket","flying_saucer","bellhop_bell","luggage","hourglass","hourglass_flowing_sand","watch","alarm_clock","stopwatch","timer_clock","mantelpiece_clock","clock12","clock1230","clock1","clock130","clock2","clock230","clock3","clock330","clock4","clock430","clock5","clock530","clock6","clock630","clock7","clock730","clock8","clock830","clock9","clock930","clock10","clock1030","clock11","clock1130","new_moon","waxing_crescent_moon","first_quarter_moon","moon","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","crescent_moon","new_moon_with_face","first_quarter_moon_with_face","last_quarter_moon_with_face","thermometer","sunny","full_moon_with_face","sun_with_face","ringed_planet","star","star2","stars","milky_way","cloud","partly_sunny","thunder_cloud_and_rain","mostly_sunny","barely_sunny","partly_sunny_rain","rain_cloud","snow_cloud","lightning","tornado","fog","wind_blowing_face","cyclone","rainbow","closed_umbrella","umbrella","umbrella_with_rain_drops","umbrella_on_ground","zap","snowflake","snowman","snowman_without_snow","comet","fire","droplet","ocean"]},{id:"objects",name:"Objects",emojis:["eyeglasses","dark_sunglasses","goggles","lab_coat","safety_vest","necktie","shirt","jeans","scarf","gloves","coat","socks","dress","kimono","sari","one-piece_swimsuit","briefs","shorts","bikini","womans_clothes","purse","handbag","pouch","shopping_bags","school_satchel","mans_shoe","athletic_shoe","hiking_boot","womans_flat_shoe","high_heel","sandal","ballet_shoes","boot","crown","womans_hat","tophat","mortar_board","billed_cap","helmet_with_white_cross","prayer_beads","lipstick","ring","gem","mute","speaker","sound","loud_sound","loudspeaker","mega","postal_horn","bell","no_bell","musical_score","musical_note","notes","studio_microphone","level_slider","control_knobs","microphone","headphones","radio","saxophone","guitar","musical_keyboard","trumpet","violin","banjo","drum_with_drumsticks","iphone","calling","phone","telephone_receiver","pager","fax","battery","electric_plug","computer","desktop_computer","printer","keyboard","three_button_mouse","trackball","minidisc","floppy_disk","cd","dvd","abacus","movie_camera","film_frames","film_projector","clapper","tv","camera","camera_with_flash","video_camera","vhs","mag","mag_right","candle","bulb","flashlight","izakaya_lantern","diya_lamp","notebook_with_decorative_cover","closed_book","book","green_book","blue_book","orange_book","books","notebook","ledger","page_with_curl","scroll","page_facing_up","newspaper","rolled_up_newspaper","bookmark_tabs","bookmark","label","moneybag","yen","dollar","euro","pound","money_with_wings","credit_card","receipt","chart","currency_exchange","heavy_dollar_sign","email","e-mail","incoming_envelope","envelope_with_arrow","outbox_tray","inbox_tray","package","mailbox","mailbox_closed","mailbox_with_mail","mailbox_with_no_mail","postbox","ballot_box_with_ballot","pencil2","black_nib","lower_left_fountain_pen","lower_left_ballpoint_pen","lower_left_paintbrush","lower_left_crayon","memo","briefcase","file_folder","open_file_folder","card_index_dividers","date","calendar","spiral_note_pad","spiral_calendar_pad","card_index","chart_with_upwards_trend","chart_with_downwards_trend","bar_chart","clipboard","pushpin","round_pushpin","paperclip","linked_paperclips","straight_ruler","triangular_ruler","scissors","card_file_box","file_cabinet","wastebasket","lock","unlock","lock_with_ink_pen","closed_lock_with_key","key","old_key","hammer","axe","pick","hammer_and_pick","hammer_and_wrench","dagger_knife","crossed_swords","gun","bow_and_arrow","shield","wrench","nut_and_bolt","gear","compression","scales","probing_cane","link","chains","toolbox","magnet","alembic","test_tube","petri_dish","dna","microscope","telescope","satellite_antenna","syringe","drop_of_blood","pill","adhesive_bandage","stethoscope","door","bed","couch_and_lamp","chair","toilet","shower","bathtub","razor","lotion_bottle","safety_pin","broom","basket","roll_of_paper","soap","sponge","fire_extinguisher","shopping_trolley","smoking","coffin","funeral_urn","moyai"]},{id:"symbols",name:"Symbols",emojis:["atm","put_litter_in_its_place","potable_water","wheelchair","mens","womens","restroom","baby_symbol","wc","passport_control","customs","baggage_claim","left_luggage","warning","children_crossing","no_entry","no_entry_sign","no_bicycles","no_smoking","do_not_litter","non-potable_water","no_pedestrians","no_mobile_phones","underage","radioactive_sign","biohazard_sign","arrow_up","arrow_upper_right","arrow_right","arrow_lower_right","arrow_down","arrow_lower_left","arrow_left","arrow_upper_left","arrow_up_down","left_right_arrow","leftwards_arrow_with_hook","arrow_right_hook","arrow_heading_up","arrow_heading_down","arrows_clockwise","arrows_counterclockwise","back","end","on","soon","top","place_of_worship","atom_symbol","om_symbol","star_of_david","wheel_of_dharma","yin_yang","latin_cross","orthodox_cross","star_and_crescent","peace_symbol","menorah_with_nine_branches","six_pointed_star","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","ophiuchus","twisted_rightwards_arrows","repeat","repeat_one","arrow_forward","fast_forward","black_right_pointing_double_triangle_with_vertical_bar","black_right_pointing_triangle_with_double_vertical_bar","arrow_backward","rewind","black_left_pointing_double_triangle_with_vertical_bar","arrow_up_small","arrow_double_up","arrow_down_small","arrow_double_down","double_vertical_bar","black_square_for_stop","black_circle_for_record","eject","cinema","low_brightness","high_brightness","signal_strength","vibration_mode","mobile_phone_off","infinity","recycle","fleur_de_lis","trident","name_badge","beginner","o","white_check_mark","ballot_box_with_check","heavy_check_mark","heavy_multiplication_x","x","negative_squared_cross_mark","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","curly_loop","loop","part_alternation_mark","eight_spoked_asterisk","eight_pointed_black_star","sparkle","bangbang","interrobang","question","grey_question","grey_exclamation","exclamation","wavy_dash","copyright","registered","tm","hash","keycap_star","zero","one","two","three","four","five","six","seven","eight","nine","keycap_ten","capital_abcd","abcd","1234","symbols","abc","a","ab","b","cl","cool","free","information_source","id","m","new","ng","o2","ok","parking","sos","up","vs","koko","sa","u6708","u6709","u6307","ideograph_advantage","u5272","u7121","u7981","accept","u7533","u5408","u7a7a","congratulations","secret","u55b6","u6e80","red_circle","large_orange_circle","large_yellow_circle","large_green_circle","large_blue_circle","large_purple_circle","large_brown_circle","black_circle","white_circle","large_red_square","large_orange_square","large_yellow_square","large_green_square","large_blue_square","large_purple_square","large_brown_square","black_large_square","white_large_square","black_medium_square","white_medium_square","black_medium_small_square","white_medium_small_square","black_small_square","white_small_square","large_orange_diamond","large_blue_diamond","small_orange_diamond","small_blue_diamond","small_red_triangle","small_red_triangle_down","diamond_shape_with_a_dot_inside","radio_button","white_square_button","black_square_button"]},{id:"flags",name:"Flags",emojis:["checkered_flag","cn","crossed_flags","de","es","flag-ac","flag-ad","flag-ae","flag-af","flag-ag","flag-ai","flag-al","flag-am","flag-ao","flag-aq","flag-ar","flag-as","flag-at","flag-au","flag-aw","flag-ax","flag-az","flag-ba","flag-bb","flag-bd","flag-be","flag-bf","flag-bg","flag-bh","flag-bi","flag-bj","flag-bl","flag-bm","flag-bn","flag-bo","flag-bq","flag-br","flag-bs","flag-bt","flag-bv","flag-bw","flag-by","flag-bz","flag-ca","flag-cc","flag-cd","flag-cf","flag-cg","flag-ch","flag-ci","flag-ck","flag-cl","flag-cm","flag-co","flag-cp","flag-cr","flag-cu","flag-cv","flag-cw","flag-cx","flag-cy","flag-cz","flag-dg","flag-dj","flag-dk","flag-dm","flag-do","flag-dz","flag-ea","flag-ec","flag-ee","flag-eg","flag-eh","flag-england","flag-er","flag-et","flag-eu","flag-fi","flag-fj","flag-fk","flag-fm","flag-fo","flag-ga","flag-gd","flag-ge","flag-gf","flag-gg","flag-gh","flag-gi","flag-gl","flag-gm","flag-gn","flag-gp","flag-gq","flag-gr","flag-gs","flag-gt","flag-gu","flag-gw","flag-gy","flag-hk","flag-hm","flag-hn","flag-hr","flag-ht","flag-hu","flag-ic","flag-id","flag-ie","flag-il","flag-im","flag-in","flag-io","flag-iq","flag-ir","flag-is","flag-je","flag-jm","flag-jo","flag-ke","flag-kg","flag-kh","flag-ki","flag-km","flag-kn","flag-kp","flag-kw","flag-ky","flag-kz","flag-la","flag-lb","flag-lc","flag-li","flag-lk","flag-lr","flag-ls","flag-lt","flag-lu","flag-lv","flag-ly","flag-ma","flag-mc","flag-md","flag-me","flag-mf","flag-mg","flag-mh","flag-mk","flag-ml","flag-mm","flag-mn","flag-mo","flag-mp","flag-mq","flag-mr","flag-ms","flag-mt","flag-mu","flag-mv","flag-mw","flag-mx","flag-my","flag-mz","flag-na","flag-nc","flag-ne","flag-nf","flag-ng","flag-ni","flag-nl","flag-no","flag-np","flag-nr","flag-nu","flag-nz","flag-om","flag-pa","flag-pe","flag-pf","flag-pg","flag-ph","flag-pk","flag-pl","flag-pm","flag-pn","flag-pr","flag-ps","flag-pt","flag-pw","flag-py","flag-qa","flag-re","flag-ro","flag-rs","flag-rw","flag-sa","flag-sb","flag-sc","flag-scotland","flag-sd","flag-se","flag-sg","flag-sh","flag-si","flag-sj","flag-sk","flag-sl","flag-sm","flag-sn","flag-so","flag-sr","flag-ss","flag-st","flag-sv","flag-sx","flag-sy","flag-sz","flag-ta","flag-tc","flag-td","flag-tf","flag-tg","flag-th","flag-tj","flag-tk","flag-tl","flag-tm","flag-tn","flag-to","flag-tr","flag-tt","flag-tv","flag-tw","flag-tz","flag-ua","flag-ug","flag-um","flag-uy","flag-uz","flag-va","flag-vc","flag-ve","flag-vg","flag-vi","flag-vn","flag-vu","flag-wales","flag-wf","flag-ws","flag-xk","flag-ye","flag-yt","flag-za","flag-zm","flag-zw","fr","gb","it","jp","kr","pirate_flag","rainbow-flag","ru","triangular_flag_on_post","us","waving_black_flag","waving_white_flag"]}],Jn=(0,a.ZP)(d.Z)((({theme:e})=>({width:"430px",minHeight:"40px",maxHeight:"50vh",background:`${(0,m.Fq)(e.palette.background.default,.7)}`,backdropFilter:"blur(16px)",padding:"10px 10px 0px 10px",borderRadius:"4px",overflowY:"scroll",scrollPaddingTop:"5px",scrollSnapType:"y mandatory",borderRight:"5px solid rgba(28, 29, 33, 0)","&::-webkit-scrollbar":{width:"4px"},"&::-webkit-scrollbar-track":{background:"transparent"},"&::-webkit-scrollbar-thumb":{padding:"10px 0",margin:"10px 0",background:e.palette.common.black,borderBox:"padding-box",fontSize:"16px",borderRadius:"8px",opacity:0}}))),Wn=(0,a.ZP)(d.Z)((({theme:{palette:e}})=>({fontSize:"12px",color:e.text.primary,marginBottom:"5px",scrollSnapAlign:"start",textTransform:"uppercase"}))),qn=(0,a.ZP)(d.Z)((()=>({marginBottom:"10px"}))),Gn=(0,a.ZP)(d.Z)((({theme:{palette:e}})=>({fontSize:"24px",boxSizing:"border-box",width:"34px",height:"34px",display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:"4px",padding:"5px",backgroundColor:"transparent",transition:"backgroundColor 0.3s",cursor:"pointer","&:hover, &.active":{backgroundColor:e.grey[300]}}))),Vn=12,Yn=r.forwardRef((({editor:e,range:t,items:o},n)=>{const[a,i]=r.useState(!1),l=r.useRef([]),s=Un,c=r.useMemo((()=>{i(o.length>0);let e=[];return s.forEach(((t,n)=>{const a=[];l.current.push([]),o.forEach((e=>{l.current[n].push(r.createRef()),t.emojis.includes(e.id||"")&&a.push(e)})),e.push({name:t.name,emojis:a})})),F().filter(e,(e=>e.emojis.length>0))}),[s,o]),{selected:u,setSelected:p,selectItem:m}=((e,t,o,n)=>{const[a,i]=r.useState(!0),[l,s]=r.useState({category:0,emoji:0}),c=r.useCallback((()=>{var t;n&&o.chain().focus().deleteRange(n).insertContent(null==(t=e[l.category])?void 0:t.emojis[l.emoji].native).run()}),[o,n,e,l]),d=r.useCallback((()=>{var t;if(null==(t=e[l.category])?void 0:t.emojis[l.emoji-Vn])return{category:l.category,emoji:l.emoji-Vn};if(e[l.category-1]){const t=Math.ceil(e[l.category-1].emojis.length/Vn)-1;let o=l.emoji+t*Vn;return o>e[l.category-1].emojis.length&&(o-=Vn),e[l.category-1].emojis[o]?{category:l.category-1,emoji:o}:{category:l.category-1,emoji:e[l.category-1].emojis.length-1}}return{}}),[e,l]),u=r.useCallback((()=>{var t;return(null==(t=e[l.category])?void 0:t.emojis[l.emoji+1])?{emoji:l.emoji+1}:e[l.category+1]?{category:l.category+1,emoji:0}:{}}),[e,l]),p=r.useCallback((()=>{var t;if(null==(t=e[l.category])?void 0:t.emojis[l.emoji+Vn])return{emoji:l.emoji+Vn};if(e[l.category+1]){if(e[l.category+1].emojis[l.emoji])return{category:l.category+1};if(e[l.category+1].emojis[l.emoji%Vn])return{category:l.category+1,emoji:l.emoji%Vn};if(e[l.category+1])return{category:l.category+1,emoji:e[l.category+1].emojis.length-1}}return{}}),[e,l]),m=r.useCallback((()=>l.emoji>0&&!F().isEqual(l,{category:0,emoji:0})?{emoji:l.emoji-1}:e[l.category-1]?{category:l.category-1,emoji:e[l.category-1].emojis.length-1}:{}),[e,l]),g=r.useCallback((e=>{var o,n,r;const a=null==(r=null==(n=null==(o=t.current)?void 0:o[e.category])?void 0:n[e.emoji])?void 0:r.current;if(a){const e=document.getElementById("EmojiPanel");null==e||e.scrollTo({top:a.offsetTop-a.offsetHeight,behavior:"smooth"})}}),[t]),h=r.useCallback((e=>{var t;["Enter","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Escape"].includes(e.key)&&!0===a&&(e.preventDefault(),e.stopPropagation());const o={ArrowUp:d,ArrowRight:u,ArrowDown:p,ArrowLeft:m};switch(e.key){case"Enter":c();break;case"Escape":return void i(!1)}const n=null==(t=o[e.key])?void 0:t.call(o);if(n){const e={...l,...n};s(e),g(e)}}),[a,d,u,p,m,c,l,g]);return r.useEffect((()=>(document.addEventListener("keydown",h,{capture:!0}),()=>{document.removeEventListener("keydown",h,{capture:!0})})),[h]),{selected:l,setSelected:s,selectItem:c}})(c,l,e,t);return r.createElement(Jn,{id:"EmojiPanel"},a?c.map(((e,t)=>r.createElement(r.Fragment,null,r.createElement(Wn,{key:e.name},e.name),r.createElement(qn,{key:t,className:"flex flex_wrap"},e.emojis.map(((e,o)=>r.createElement(Gn,{key:e.name,className:"cursor flex align_center justify_center "+(u.category===t&&u.emoji===o?"active":""),onClick:()=>m(),title:e.name,onMouseMove:()=>p({category:t,emoji:o}),ref:l.current[t][o]},e.native))))))):r.createElement(d.Z,{sx:{color:"text.primary"}},"No results"))})),Qn=()=>{let e,t;return{onStart:o=>{e=new no(Yn,{editor:o.editor,props:o}),t=(0,q.ZP)("body",{getReferenceClientRect:o.clientRect,appendTo:()=>document.body,content:e.element,showOnCreate:!1,interactive:!0,trigger:"manual",placement:"bottom-start"})},onUpdate(o){null==t||t[0].show(),null==e||e.updateProps(o),null==t||t[0].setProps({getReferenceClientRect:o.clientRect})},onKeyDown(o){var n;return"Escape"===o.event.key&&(null==t||t[0].destroy()),null==(n=null==e?void 0:e.ref)?void 0:n.onKeyPress(o)},onExit(o){null==t||t[0].destroy(),null==e||e.destroy()}}},Xn=N.hj.create({name:"EmojiExtension",addOptions:()=>({suggestion:{char:":",items:$.IA,render:Qn,startOfLine:!1,command:({editor:e,range:t,props:o})=>{o.query(o.query),o.command({editor:e,range:t})}}}),addProseMirrorPlugins(){return[(0,G.q$)({...this.options.suggestion,pluginKey:new W.H$("emoji"),editor:this.editor})]}}),er=({isSpaceBefore:e})=>({display:"inline-block",marginLeft:e?"5px":"0","& .MuiAutocomplete-inputRoot.MuiInputBase-sizeSmall input.MuiAutocomplete-input":{padding:0,fontSize:"1em"},"& .MuiOutlinedInput-root.MuiInputBase-sizeSmall":{width:"168px",padding:0,border:"0.5px solid #545454",background:"rgba(0, 0, 0, 0.16)",borderRadius:"100px",fontSize:"1em",color:"text.primary",pl:"3px"},"& .MuiOutlinedInput-notchedOutline":{display:"none"},"& .MuiAutocomplete-endAdornment":{display:"none"}}),tr={fontSize:"16px",color:"rgba(255, 255, 255, 0.9)",borderRadius:2,background:"rgba(28, 29, 33, 0.72)",backdropFilter:"blur(10px)",border:"0.5px solid rgba(255, 255, 255, 0.24)",width:"245px!important",overflow:"hidden auto",boxShadow:"0px 1px 18px #0000001f, 0px 6px 10px #00000024, 0px 3px 5px -1px #00000033","& .MuiAutocomplete-listbox":{p:"6px",borderRight:"5px solid rgba(28, 29, 33, 0.72)","&::-webkit-scrollbar":{width:"4px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{padding:"10px 0",margin:"10px 0",background:$.rS.palette.common.black,borderBox:"padding-box",fontSize:"16px",borderRadius:"8px",opacity:0},"& .MuiAutocomplete-option":{p:0,mx:0,width:"100%",position:"relative",display:"flex",alignItems:"center",lineHeight:"120%",userSelect:"none",minHeight:"28px",maxHeight:"28px",fontSize:"12px",cursor:"pointer",paddingRight:"3px",backgroundColor:"inherit",color:"grey.100",border:"0.5px solid transparent","& .list_enter":{display:"none"},"&.Mui-focused":{color:"grey.50",bgcolor:"none",border:"0.5px solid #545454",borderRadius:1.5,"&:before":{left:-7},"&>div:first-of-type":{minWidth:"90.5%",maxWidth:"90.5%"},"& .list_enter":{display:"flex"}},"&:last-of-type":{mb:0}},"& .MuiListSubheader-root:not(:empty)":{margin:"0",color:"#797979ff",position:"inherit",fontFamily:"Inter-SemiBold",fontSize:"0.625rem",fontWeight:"600",lineHeight:"1rem",fontStyle:"inherit",letterSpacing:"0.800000011920929px",textTransform:"uppercase",fontFeatureSettings:"'tnum' on,'lnum' on",backgroundColor:"transparent",my:.5,pl:.5},"& li:not(:first-of-type) .MuiListSubheader-root:empty":{height:"0.5px",background:"rgba(0, 0, 0, 0.4)",boxShadow:"0px 0.5px 0px rgba(255, 255, 255, 0.2)",my:1}}},or=e=>(e<10?10:e/2+4)+"em",nr=({injectedProps:e,...t})=>{var o;const n=null==(o=e.getList)?void 0:o.call(e);return n?r.createElement(rr,{...t,injectedProps:e,list:n}):null},rr=({node:e,editor:t,getPos:o,injectedProps:n,list:a})=>{const i=(0,r.useRef)(null),[d,u]=(0,r.useState)(or(e.attrs.placeholder.length)),[p,m]=(0,r.useState)(e.attrs.originalValue),g=e.attrs.char.startsWith(" "),[h,f]=(0,r.useState)(24),b=(0,r.useCallback)((e=>{setTimeout((()=>{null!==e&&f(e.offsetHeight)}))}),[]);(0,r.useEffect)((function(){setTimeout((()=>{var e;null==(e=i.current)||e.focus(),t.commands.setMeta(A.IWd,!1)}))}),[]);const _=(0,r.useCallback)((e=>{var n,r;const a=o();a&&t.chain().focus().deleteRange({from:a,to:a+1}).insertContentAt(a,null!=(n=null==e?void 0:e.valueToInsertInstead)?n:`${p}`).focus(null!=(r=null==e?void 0:e.pos)?r:a).run()}),[t,o,p]),v=(0,r.useCallback)((n=>{var r,a;"Backspace"!==n.key||p?"ArrowRight"===n.key&&n.target.selectionStart===p.length?(n.preventDefault(),n.stopPropagation(),_({pos:o()+(null!=(r=n.target.selectionStart)?r:0)})):"ArrowLeft"===n.key&&0===n.target.selectionStart?(n.preventDefault(),n.stopPropagation(),_({pos:o()})):"Escape"===n.key?(n.preventDefault(),n.stopPropagation(),_({pos:o()+(null!=(a=n.target.selectionStart)?a:0)})):"z"!==n.key||!n.metaKey||void 0!==p&&p!==e.attrs.originalValue||(n.preventDefault(),n.stopPropagation(),t.chain().focus().undo().run()):(n.preventDefault(),n.stopPropagation(),_({valueToInsertInstead:e.attrs.char,pos:o()+`${e.attrs.char}${p}`.length}))}),[t,o,_,e.attrs,p]),y=(0,r.useCallback)(((t,o)=>{var n;t&&(u(or(o?o.length:null==(n=e.attrs.placeholder)?void 0:n.length)),m(o))}),[e.attrs.placeholder]),x=(0,r.useCallback)(((e,t)=>{var o;const r=(0,B.D)({stringify:e=>e[n.searchField],limit:5})(e,t).map((e=>"note"!==e.type&&"task"!==e.type&&"day"!==e.type?e:{...e,groupBy:"cards"})),{inputValue:a}=t;return""!==a?[...r,{inputValue:a,[n.searchField]:a,cardUuid:null==(o=n.generateNewMentionId)?void 0:o.call(n),groupeBy:""}]:r}),[n]),E=(0,r.useCallback)(((e,r)=>{var a,i;const l=t.chain(),s=o();l.focus().deleteRange({from:s,to:s+1}),g&&l.insertContent(" "),r.cardUuid&&l.setMeta(A.kZT,"Create new note from bidirectional link"),l.focus(g?s+1:s).insertMention({id:r[n.fieldMentionId],cardUuid:null!=(a=r.cardUuid)?a:r[n.fieldMentionId],value:null!=(i=r.inputValue)?i:r.title,char:n.char}).run()}),[t,o,n.char,n.fieldMentionId,g]),C=(0,r.useCallback)((t=>{t.preventDefault(),t.stopPropagation();const n="[["!==e.attrs.char;_({valueToInsertInstead:`${n?e.attrs.char:""}${p}`,pos:o()+e.attrs.char.length+t.target.selectionStart})}),[o,_,e.attrs,p]),w=n.MentionItemListComponent;return r.createElement(I.T5,{style:{display:"inline-block",marginRight:"5px",maxWidth:"100%",width:d},ref:b,"data-value":p},r.createElement(R.Z,{onClickAway:C},r.createElement(l.Z,{id:"autocomplete_placeholder_mention",sx:er({isSpaceBefore:g,height:h}),fullWidth:!0,openOnFocus:!0,freeSolo:!0,onInputChange:y,inputValue:p,onKeyDown:v,clearIcon:r.createElement(r.Fragment,null),autoHighlight:!0,onChange:E,color:"action",groupBy:e=>e.groupBy,options:a,componentsProps:{paper:{sx:tr}},open:!0,noOptionsText:n.noOptionsText,filterOptions:x,renderOption:(e,t)=>{var o;return r.createElement(c.Z,{...e,component:"li",key:null!=(o=t[n.fieldMentionId])?o:t.cardUuid,variant:"menu"},w?r.createElement(w,{item:t}):r.createElement("p",null,t.title),r.createElement($.z9,{keys:"\u21b5",className:"list_enter"}))},getOptionLabel:e=>e.key||"",renderInput:t=>r.createElement(s.Z,{inputRef:i,...t,fullWidth:!0,autoFocus:!0,placeholder:e.attrs.placeholder,size:"small",InputProps:{...t.InputProps,startAdornment:r.createElement($.JO,{icon:$.PJ[n.icon],color:"text.primary"})}})})))},ar=new W.H$("ConvertLinkMenuPlugin"),ir=e=>e.setMeta(ar,{isOpen:!1}),lr=e=>e.setMeta(ar,{isOpen:!0}),sr=(0,a.ZP)(v.Z)((({height:e="400px"})=>({"&.MuiPopover-root":{height:`${e}px`}}))),cr=({items:e,anchorPosition:t,onClose:o})=>{const n=e.filter((e=>{var t;return!(null==(t=e.shouldBeHidden)?void 0:t.call(e))})),a=30*n.length+44;return r.createElement(sr,{id:"convert-link-menu",open:!!t,anchorReference:"anchorPosition",anchorPosition:{top:t.y,left:t.x},height:a},n.map((e=>r.createElement(y.Z,{key:e.text,onMouseDown:t=>e.onAction(t),onKeyDown:t=>{if("Enter"===t.key)return e.onAction(t);"ArrowUp"!==t.key&&"ArrowDown"!==t.key&&o()}},e.text))))},dr=(0,r.forwardRef)((({editor:e},t)=>{var o;const{state:a,view:i}=e,l=null==(o=(0,A.dck)(a,a.selection.$anchor.pos-1))?void 0:o.href,s=(({editor:e})=>(0,r.useMemo)((()=>[{text:"Dismiss",onAction:t=>{t.preventDefault(),t.stopPropagation(),e.commands.closeConvertLinkMenu()}},{text:"Clip content",shouldBeHidden:()=>{const t=e.state.selection.$anchor.pos-1,o=(0,A.dck)(e.state,t);return(null==o?void 0:o.href)&&(0,n.if)("youtube",o.href)},onAction:t=>{t.preventDefault(),t.stopPropagation();const o=e.state.selection.$anchor.pos-1,r=(0,A.dck)(e.state,o);(null==r?void 0:r.href)&&e.chain().closeConvertLinkMenu().focus(o).extendMarkRange(n.d9.LINK).deleteSelection().insertClip({href:r.href,content:"",contextUuid:""}).focus().run()}},{text:"Convert to YouTube preview",shouldBeHidden:()=>{const t=e.state.selection.$anchor.pos-1,o=(0,A.dck)(e.state,t);return!(null==o?void 0:o.href)||!(0,n.if)("youtube",o.href)},onAction:t=>{t.preventDefault(),t.stopPropagation();const o=e.state.selection.$anchor.pos-1,r=(0,A.dck)(e.state,o);(null==r?void 0:r.href)&&e.chain().closeConvertLinkMenu().focus(o).extendMarkRange(n.d9.LINK).deleteSelection().setIframe({src:(0,n.jN)(r.href)}).focus().run()}}].filter((e=>{var t;return!(null==(t=null==e?void 0:e.shouldBeHidden)?void 0:t.call(e))}))),[e]))({editor:e}),c=(0,r.useCallback)((()=>{e.commands.closeConvertLinkMenu()}),[e]),d=(0,r.useCallback)((()=>{const{ranges:e}=a.selection,{from:t,to:o}=(0,A.DMz)(e);return(0,N.pr)(i,t,o)}),[a,i]);return l?r.createElement("div",null,r.createElement(K.ZP,{trigger:"manual",placement:"right-start",showOnCreate:!0,interactive:!0,onClickOutside:c,getReferenceClientRect:d,appendTo:()=>document.getElementById(A.zhq)||document.body,content:r.createElement(cr,{items:s,onClose:c,anchorPosition:d()})})):r.createElement(r.Fragment,null)})),ur=e=>{const t=(()=>{let e;return{onStart:({editor:t,...o})=>{e=new no(dr,{editor:t,props:{editor:t,...o}})},onUpdate({editor:t,...o}){null==e||e.updateProps(o)},onExit(){const t=e;setTimeout((()=>{null==t||t.destroy()}),0),e=void 0}}})();return new W.Sy({key:ar,state:{init:()=>({isOpen:!1}),apply(e,t){const o=e.getMeta(ar);return null!=o?o:t}},view(){return{update:(o,n)=>{var r,a,i,l;const s=null==(r=this.key)?void 0:r.getState(n),c=null==(a=this.key)?void 0:a.getState(o.state),d=!(null==s?void 0:s.isOpen)&&(null==c?void 0:c.isOpen),u=(null==s?void 0:s.isOpen)&&!(null==c?void 0:c.isOpen);d&&(null==(i=null==t?void 0:t.onStart)||i.call(t,{editor:e})),u&&(null==(l=null==t?void 0:t.onExit)||l.call(t))}}}})},pr={openConvertLinkMenu:()=>({dispatch:e,tr:t})=>(null==e||e(lr(t)),!0),closeConvertLinkMenu:()=>({dispatch:e,tr:t})=>(null==e||e(ir(t)),!0)},mr=e=>e.setMeta($n,{isOpen:!1}),gr=(e,t={})=>e.setMeta($n,{isOpen:!0,...t}),hr=(e,t)=>{var o;const n=null==(o=$n.getState(e))?void 0:o.isOpen;return t.setMeta($n,{isOpen:!n})},fr=g.css`
  --padding-vertical-seshat-block: 3px;
  --padding-horizontal-seshat-block: 2px;
  caret-color: rgba(255, 255, 255, 0.9);

  /** Base style (padding etc.) */
  .${n.oS.BLOCK} {
    position: relative;

    &:not([type='blockquote']):not([type='highlight']):not([type='highlightNote']):not([type='clipContent']):not([type='clipContentTitle']):not([nodeviewtype='clipBook']):not([nodeviewtype='clipBookmark']):not([type='codeBlock']) {
      margin-top: 1px;
      margin-bottom: 1px;
      padding-top: 1px;
      padding-bottom: 1px;
    }

    .${n.oS.BLOCK_CONTENT}
      ~ .${n.oS.BLOCK}:not([type='blockquote']):not([type='highlight']):not([type='highlightNote']):not([type='clipContent']):not([type='codeBlock']):last-child {
      margin-bottom: 0;
    }

    .${n.oS.BLOCK_CONTENT}
      ~ .${n.oS.BLOCK}:not([type='blockquote']):not([type='highlight']):not([type='highlightNote']):not([type='clipContent']):not([type='codeBlock']) {
      margin-top: 2px;
    }

    .${n.oS.CONTENT}, .${n.oS.CONTENT_NODE_VIEW} {
      width: 100%;
      white-space: pre-wrap;
      word-break: break-word;
      font-size: 1em;
      line-height: 1.6em;
    }

    &[contenteditable='false'] {
      cursor: default;
    }
  }

  /** PARAGRAPH */
  .${n.oS.BLOCK}[type='paragraph'] {
    padding-top: 1px;
    padding-bottom: 1px;
  }
  /** HEADING */
  .${n.oS.BLOCK}[type^='heading'] > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK_CONTENT} > .${n.oS.CONTENT} {
    font-weight: 700;
    line-height: 1.3;
    color: inherit;
    fill: inherit;
  }
  .${n.oS.BLOCK}[type='heading1'] > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK_CONTENT} {
    margin-top: 2em;
    & .${n.oS.CONTENT} {
      font-size: 1.875em;
    }
  }
  .${n.oS.BLOCK}[type='heading2'] > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK_CONTENT} {
    margin-top: 1.4em;
    & .${n.oS.CONTENT} {
      font-size: 1.5em;
    }
  }
  .${n.oS.BLOCK}[type='heading3'] > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK_CONTENT} {
    margin-top: 1em;
    & .${n.oS.CONTENT} {
      font-size: 1.25em;
    }
  }
  .${n.oS.BLOCK}[type='heading4'] > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK_CONTENT} > .${n.oS.CONTENT} {
    font-size: 1em;
  }

  /**
     *  1.
     */
  .${n.oS.BLOCK} ~ .${n.oS.BLOCK} {
    &:not([type='numberedList']) {
      counter-reset: orderedListCount;
    }
  }

  .${n.oS.BLOCK}[type='numberedList'] {
    &:before {
      content: counter(orderedListCount) '.';
    }
    counter-increment: orderedListCount;
  }

  /**
     *  1. > a.
     */
  .${n.oS.BLOCK}[type='numberedList'] {
    .${n.oS.BLOCK} ~ .${n.oS.BLOCK} {
      &:not([type='numberedList']) {
        counter-reset: orderedListCount1;
      }
    }

    .${n.oS.BLOCK}[type='numberedList'] {
      &:nth-of-type(2) {
        counter-reset: orderedListCount1;
      }
      &:before {
        content: counter(orderedListCount1, lower-alpha) '.';
      }
      counter-increment: orderedListCount1;
    }
  }

  /**
     *  1. > a. > i
     */
  .${n.oS.BLOCK}[type='numberedList']
    .${n.oS.BLOCK}[type='numberedList'] {
    .${n.oS.BLOCK} ~ .${n.oS.BLOCK} {
      &:not([type='numberedList']) {
        counter-reset: orderedListCount2;
      }
    }

    .${n.oS.BLOCK}[type='numberedList'] {
      &:nth-of-type(2) {
        counter-reset: orderedListCount2;
      }
      &:before {
        content: counter(orderedListCount2, lower-roman) '.';
      }
      counter-increment: orderedListCount2;
    }
  }

  /**
     *  1. > a. > i. > 1.
     */
  .${n.oS.BLOCK}[type='numberedList']
    .${n.oS.BLOCK}[type='numberedList']
    .${n.oS.BLOCK}[type='numberedList'] {
    .${n.oS.BLOCK} ~ .${n.oS.BLOCK} {
      &:not([type='numberedList']) {
        counter-reset: orderedListCount3;
      }
    }

    .${n.oS.BLOCK}[type='numberedList'] {
      &:nth-of-type(2) {
        counter-reset: orderedListCount3;
      }
      &:before {
        content: counter(orderedListCount3) '.';
      }
      counter-increment: orderedListCount3;
    }
  }

  /**
     *  1. > a. > i. > 1. > a.
     */
  .${n.oS.BLOCK}[type='numberedList']
    .${n.oS.BLOCK}[type='numberedList']
    .${n.oS.BLOCK}[type='numberedList']
    .${n.oS.BLOCK}[type='numberedList'] {
    .${n.oS.BLOCK} ~ .${n.oS.BLOCK} {
      &:not([type='numberedList']) {
        counter-reset: orderedListCount4;
      }
    }

    .${n.oS.BLOCK}[type='numberedList'] {
      &:nth-of-type(2) {
        counter-reset: orderedListCount4;
      }
      &:before {
        content: counter(orderedListCount4, lower-alpha) '.';
      }
      counter-increment: orderedListCount4;
    }
  }

  /**
     *  1. > a. > i. > 1. > a. > i.
     */
  .${n.oS.BLOCK}[type='numberedList']
    .${n.oS.BLOCK}[type='numberedList']
    .${n.oS.BLOCK}[type='numberedList']
    .${n.oS.BLOCK}[type='numberedList']
    .${n.oS.BLOCK}[type='numberedList'] {
    .${n.oS.BLOCK} ~ .${n.oS.BLOCK} {
      &:not([type='numberedList']) {
        counter-reset: orderedListCount5;
      }
    }

    .${n.oS.BLOCK}[type='numberedList'] {
      &:nth-of-type(2) {
        counter-reset: orderedListCount5;
      }
      &:before {
        content: counter(orderedListCount5, lower-roman) '.';
      }
      counter-increment: orderedListCount5;
    }
  }

  /**
     *  1. > a. > i. > 1. > a. > i. > 1.
     */
  .${n.oS.BLOCK}[type='numberedList']
    .${n.oS.BLOCK}[type='numberedList']
    .${n.oS.BLOCK}[type='numberedList']
    .${n.oS.BLOCK}[type='numberedList']
    .${n.oS.BLOCK}[type='numberedList']
    .${n.oS.BLOCK}[type='numberedList'] {
    .${n.oS.BLOCK} ~ .${n.oS.BLOCK} {
      &:not([type='numberedList']) {
        counter-reset: orderedListCount6;
      }
    }

    .${n.oS.BLOCK}[type='numberedList'] {
      &:nth-of-type(2) {
        counter-reset: orderedListCount6;
      }
      &:before {
        content: counter(orderedListCount6) '.';
      }
      counter-increment: orderedListCount6;
    }
  }

  .${n.oS.BLOCK}[type='numberedList'],
    .${n.oS.BLOCK}[type='bulletedList'] {
    position: relative;
    padding-left: 20px;
  }
  .${n.oS.BLOCK}[type='numberedList']
    > .${n.oS.BLOCK_WRAPPER}
    > .${n.oS.BLOCK}, .${n.oS.BLOCK}[type='bulletedList']
    > .${n.oS.BLOCK_WRAPPER}
    > .${n.oS.BLOCK} {
    margin-left: 0;
  }
  .${n.oS.BLOCK}[type='numberedList']:before,
    .${n.oS.BLOCK}[type='bulletedList']:before {
    vertical-align: top;
    left: 0;
    position: absolute;
    font-size: 1em;
    line-height: 1.5em;
    font-family: -apple-system, system-ui, 'Segoe UI', Helvetica,
      'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }

  .${n.oS.BLOCK}[type='bulletedList']::before {
    content: '';
    height: 6px;
    display: block;
    padding: 0;
    width: 6px;
    background: currentColor;
    border-radius: 100%;
    top: calc(1.5em / 2 + 3px);
    transform: translateY(-50%);
    left: 5px;
  }
  /** INDENT */
  .${n.oS.BLOCK}
    > .${n.oS.BLOCK_WRAPPER}
    > .${n.oS.BLOCK} {
    margin-left: 1.2em;
  }
  .${n.oS.BLOCK}[type="clipContent"]
    > .${n.oS.BLOCK_WRAPPER}
    > .${n.oS.BLOCK} {
    margin-left: 0;
  }
  .${n.oS.BLOCK}[type="highlightNote"]
    > .${n.oS.BLOCK_WRAPPER}
    > .${n.oS.BLOCK} {
    margin-left: 1.5em;
  }

  .${n.oS.BLOCK} > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK}[type="seshatCardContent"] > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK} {
    margin-left: 4em;
    &:last-child {
      margin-bottom: 18px;
    }
  }

  .ProseMirror > .${n.oS.BLOCK}[type='${n.P7.CARD_CONTENT}'] > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK} {
    margin-left: 0;
  }

  /** ALIGNMENT */
  .${n.oS.BLOCK} {
    &[textalign='left'] {
      text-align: left;
    }

    &[textalign='right'] {
      text-align: right;
    }

    &[textalign='center'] {
      text-align: center;
    }

    &[textalign='justify'] {
      text-align: justify;
    }
  }

  /** CODE BLOCK */
  .${n.oS.BLOCK}[type=${n.P7.CODE}] {
    margin: 10px 0px;
    padding: 1em;
    color: #353535;
    background: #1a1b1f;
    border-radius: 2px;
    text-align: left;
    direction: ltr;
    tab-size: 4;
    white-space: pre-wrap;
    font-style: normal;
    min-width: 200px;
    .${n.oS.CONTENT} {
      font-family: Menlo, -apple-system;
      font-size: 13px;
      color: white;
    }
  }

  /** CLIPS **/
  .${n.oS.BLOCK}[type='${n.P7.CLIP_CONTENT}'], .${n.QK.CLIP_BOOK}, .${n.QK.CLIP_BOOKMARK} {
    background: linear-gradient(#1f2024, #1f2024) padding-box,
      linear-gradient(
          90deg,
          rgba(217, 217, 217, 0) 0%,
          rgba(217, 217, 217, 36%) 50%,
          rgba(217, 217, 217, 0) 100%
        )
        border-box;
    border: 1px solid transparent;
    filter: drop-shadow(0px 1px 2px rgba(4, 4, 7, 0.25));
    border-radius: 4px;
    padding: 16px 60px 16px 60px;
    box-shadow: 0px 1px 2px rgb(4 4 7 / 25%);
    margin-bottom: 10px;
    overflow: hidden;
    transition: max-height 1s;
    margin-top: 10px;
    margin-bottom: 10px;

    &:hover {
      background: linear-gradient(#1f2024, #1f2024) padding-box,
        linear-gradient(
            90deg,
            rgba(217, 217, 217, 0) 0%,
            rgba(217, 217, 217, 100%) 50%,
            rgba(217, 217, 217, 0) 100%
          )
          border-box;
    }

    &[contenteditable='false']:not([video]) {
      caret-color: transparent;
      cursor: pointer;
      &.selected {
        background: rgba(114, 114, 115, 0.6);
        box-shadow: 0px 0px 3px #ffffff;
        animation: none !important;
      }

      & > .${n.oS.BLOCK_WRAPPER} {
        max-height: 293px;
        overflow: hidden;
      }

      & > .${n.oS.BLOCK_WRAPPER} {
        &:after {
          width: 100%;
          height: 100%;
          transition: max-height 1s;
          position: fixed;
          left: 0;
          top: 20px;
          content: '';
          background: linear-gradient(to top, #1f2024, #ffffff00 60%);
          color: #000;
          border-radius: 4px;
          transition: background 0.3s, max-height 0.3s;
        }
      }
    }

    & > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK} {
      &:first-of-type .${n.oS.BLOCK_CONTENT} {
        margin-top: 0;
      }
    }
  }

  .${n.QK.CLIP_BOOK}, .${n.QK.CLIP_BOOKMARK} {
    padding: 10px 26px 10px 26px; // Reset indented style for book clips
  }

  .${n.oS.BLOCK}.${n.oS.SELECTED_BLOCK}[type='clipContent'],
  .${n.oS.BLOCK}.${n.oS.SELECTED_BLOCK} .${n.QK.CLIP_BOOK},
  .${n.oS.BLOCK}.${n.oS.SELECTED_BLOCK} .${n.QK.CLIP_BOOKMARK} {
    border: 1px solid rgba(255, 255, 255, 0.48);
  }

  #${n.YB} .${n.oS.BLOCK}[type='${n.P7.CLIP_CONTENT_TITLE}'] .${n.oS.CONTENT} {
    font-family: inherit;
    font-weight: 700;
    line-height: 1.3;
    font-size: 1em;
    margin-top: 4px;
    margin-bottom: 8px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 30px);
  }

  .${n.oS.BLOCK}[type='${n.P7.CLIP_CONTENT}']:not([contenteditable='false']) .${n.oS.BLOCK}[type='${n.P7.CLIP_CONTENT_TITLE}'] .${n.oS.CONTENT} {
    font-family: inherit;
    font-weight: 700;
    line-height: 1.3;
    font-size: 1.25em;
    margin-top: 0px;
    margin-bottom: 8px;
    text-align: left;
    max-width: calc(100% - 30px);
  }

  #${n.YB} .${n.oS.BLOCK}[type='${n.P7.CLIP_CONTENT_TITLE}'] .${n.oS.CONTENT} .clipContentTitle_author,
  .${n.oS.BLOCK}[type='${n.P7.CLIP_CONTENT}']:not([contenteditable='false']) .${n.oS.BLOCK}[type='${n.P7.CLIP_CONTENT_TITLE}'] .clipContentTitle_author {
    display: none;
  }

  .ProseMirror:not(#${n.YB}) .${n.oS.BLOCK}[type='${n.P7.CLIP_CONTENT}'][contenteditable='false']:not([video]):not([twitter]) {
    min-height: 280px;
    position: relative;
    > .${n.oS.BLOCK_WRAPPER} {
      position: absolute;
      top: 0;
      left: 0;
      padding: 32px 60px 16px 60px;
    }
    .${n.oS.BLOCK}[type="clipContentTitle"]:first-of-type {
      margin-top: 30px !important;
      margin-bottom: 20px;
    }
  }

  .${n.oS.BLOCK}[type='${n.P7.CLIP_CONTENT}'][contenteditable='false']:not([video]) .${n.oS.BLOCK}[type='${n.P7.CLIP_CONTENT_TITLE}'] .${n.oS.CONTENT} {
    font-family: GT Super Text;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 40px;
  }

  /** BLOCKQUOTE **/
  .${n.oS.BLOCK}[type='${n.P7.BLOCKQUOTE}'] {
    margin: 0 auto;
    > .${n.oS.BLOCK_WRAPPER}:not(:empty) {
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left: 0.65rem;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(
          179.99deg,
          #c4c4c4 0%,
          rgba(196, 196, 196, 0) 115.46%
        );
        border-radius: 5rem;
      }

      > .${n.oS.BLOCK} {
        margin-left: 0;
        &:first-of-type {
          margin-top: 10px;
        }

        &:last-child {
          margin-bottom: 5px;
        }
      }
    }
  }
  /** TOGGLE BLOCKS */
  .${n.oS.BLOCK}[type='${n.P7.TOGGLE_LIST}'], .${n.oS.BLOCK}[type='${n.P7.HIGHLIGHTS}'] {
    &:not(.${n.oS.BLOCK}[type='${n.P7.HIGHLIGHTS}']) {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;

      > :first-of-type {
        margin-right: 10px;
        margin-top: 5px;
      }
    }
    > .${n.oS.BLOCK_WRAPPER} {
      flex: 1;

      > .${n.oS.BLOCK} {
        padding-left: 0;
        margin-left: 0;
      }
    }
    &[collapsed='true'] {
      > .${n.oS.BLOCK_WRAPPER} {
        > .${n.oS.BLOCK} {
          display: none;
        }
      }
    }

    .${n.oS.BLOCK}[type^='heading'] > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK_CONTENT} {
      margin-top: 0;
    }
  }

  /** Special rule for launcher where the highlights block decoration should be hidden */
  #${n.YB} .${n.oS.BLOCK}[type='${n.P7.HIGHLIGHTS}'] div[data-highlights-decoration] {
    display: none;
  }

  .${n.oS.CONTENT} > code {
    border-radius: 2px;
    padding: 0.15em;
    font-family: Menlo;
    font-size: 14px;
    color: rgb(253, 220, 152);
    background: rgb(72, 69, 78);
  }

  /** SESHAT_HIGHLIGHT */
  .${n.oS.BLOCK}[type='${n.P7.HIGHLIGHT}'] {
    margin-bottom: 0.4em;
    > button[data-add-highlight-note] {
      opacity: 0;
      visibility: hidden;
      transition: opacity 175ms ease-out;

      &:hover {
        background-color: rgba(184, 184, 184, 0.1);
      }
    }

    &:hover > button[data-add-highlight-note] {
      opacity: 1;
      visibility: visible;
    }

    > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK}[type='${n.P7.BLOCKQUOTE}'] {
      padding-left: 0;
      margin-left: 0;
      padding-right: 1.5rem;
    }

    /** For timestamp highlights, the blockquote wrapper is empty. To be able to have a visual block selection nonetheless, we
      * add a fixed height for empty blockquotes and move the timestamp into this height (not ideal, but works). */

    > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK}[type='${n.P7.BLOCKQUOTE}'] > .${n.oS.BLOCK_WRAPPER}:empty {
      height: 26px;
    }

    > .highlight_timestamp {
      margin-bottom: -23px;
      & ~ .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK}[type='${n.P7.BLOCKQUOTE}'] > .${n.oS.BLOCK_WRAPPER} {
        &:not(:empty) {
          margin-top: 30px;
        }
      }
    }

    > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK}[type='${n.P7.BLOCKQUOTE}'] > .block_placeholder {
      display: none;
    }

    > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK}[type='${n.P7.HIGHLIGHT_NOTE}'] {
      padding-left: 0;
      margin-left: 0;
    }
  }

  /** SESHAT_HIGHLIGHT_NOTE */
  .${n.oS.BLOCK}[type='${n.P7.HIGHLIGHT_NOTE}'] {
    &::before {
      content: '';
      position: absolute;
      top: 8px;
      left: 0;
      width: 14px;
      height: 12px;
      background-image: url("data:image/svg+xml, %3Csvg width='14' height='12' viewBox='0 0 14 12' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M7.91499 4.18516L8.85577 3.24032L13.1075 7.47381L8.87406 11.7256L7.92922 10.7848L10.4469 8.25625L3.57648 8.27106C2.10373 8.27424 0.907249 7.08291 0.904072 5.61015L0.892573 0.276832L2.2259 0.273957L2.2374 5.60728C2.23899 6.34366 2.83723 6.93932 3.57361 6.93773L10.6641 6.92245L7.91499 4.18516Z' fill='%23727273' /%3E%3C/svg%3E");
    }
    & > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK}[type='${n.P7.BLOCKQUOTE}'] {
      margin-left: 1.5em;
    }
  }

  /** SESHAT_CAPTURE */
  [type='${n.P7.CAPTURE}'] {
    > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK} {
      margin-left: 0;
    }
  }

  /** SESHAT_CARD_CONTENT */
  [type='${n.P7.CARD_CONTENT}'] {
    &:first-of-type:not([cardtype='task']) {
      > .${n.oS.BLOCK_WRAPPER} {
        > .${n.oS.BLOCK_CONTENT} > * {
        }
      }
    }

    > :first-of-type {
      float: left;
    }

    &[collapsed='true'] {
      > .${n.oS.BLOCK_WRAPPER} {
        > .${n.oS.BLOCK} {
          display: none;
        }
      }
    }

    > .${n.oS.BLOCK_WRAPPER} {
      > .${n.oS.BLOCK} {
        clear: both;
      }
    }
  }

  /** SESHAT_FILE */
  .${n.oS.CONTENT_NODE_VIEW}
    > .node-${n.QK.FILE}
    .${A.G5o.IMAGE} {
    width: fit-content;
  }

  /** SESHAT BLOCK LINE */
  .${n.oS.BLOCK}[type='${n.P7.BLOCK_LINE}'] {
    > .${n.oS.BLOCK_WRAPPER} {
      display: flex;
      justify-content: space-between;
    }
    > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK} {
      margin-left: 0;
    }
  }

  /** SESHAT HORIZONTAL RULE */
  .horizontal_rule {
    height: 12px;
    display: flex;
    align-items: center;
    & > div {
      width: 100%;
      height: 1px;
      visibility: visible;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: rgba(255, 255, 255, 0.07);
    }
  }

  /** SELECTED SESHAT BLOCKS */
  .${n.oS.BLOCK}.${n.oS.SELECTED_BLOCK}:not([nodeviewtype='clipBookmark']):not([nodeviewtype='clipBook']):not([type='clipContent']):not([type='seshatNodeViewContent']),
    .${n.oS.BLOCK}[type='${n.P7.BLOCK_COLUMN}'].${n.oS.SELECTED_BLOCK}, .${n.oS.SELECTED_BLOCK} .${n.oS.CONTENT_NODE_VIEW} > .horizontal_rule {
    background-color: rgba(0, 0, 0, 1);
    animation: selectionfadein 150ms ease-in;
  }

  .${n.oS.SELECTED_BLOCK}
    .${n.oS.CONTENT_NODE_VIEW}
    > .node-${n.QK.FILE} {
    * .image-wrapper {
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.48);

      img {
        border-radius: 4px;
      }
    }
  }

  @keyframes selectionfadein {
    from {
      background-color: transparent;
    }
    to {
      background-color: rgba(0, 0, 0, 1);
    }
  }

  /** Task Editable **/
  .${n.oS.BLOCK}[type='${n.P7.TASK_EDITABLE}'] {
    display: flex;
    align-items: center;

    .${n.oS.CONTENT} {
      min-width: 1px;
    }
  }
`,br=e=>r.createElement(c.Z,{sx:{fontSize:"12px",lineHeight:"18px",color:"grey.200",px:.5,py:0,minHeight:28,borderRadius:2,border:"1px solid transparent","&:hover":{color:"white",border:({palette:e})=>`1px solid ${e.grey[200]}`,bgcolor:({palette:e})=>(0,m.Fq)(e.background.default,.7)},"&.Mui-focusVisible":{color:"white",border:({palette:e})=>`1px solid ${e.grey[200]}`,bgcolor:({palette:e})=>(0,m.Fq)(e.background.default,.7)}},...e},e.children),_r=({editor:e,autoFocus:t,url:o,setUrl:a})=>{const i=(({editor:e,onRemove:t,onUpdate:o,onCopy:a})=>{const i=e=>(0,r.useCallback)((t=>{t.stopPropagation(),t.preventDefault(),e()}),[e]),l=t=>(0,r.useCallback)((o=>{const r=(0,n.Yh)(o).toLocaleLowerCase();"escape"===r&&e.chain().closeEditLinkMenu().focus().run(),"enter"===r&&t()}),[t]);return{onMouseRemove:i(t),onKeyRemove:l(t),onMouseUpdate:i(o),onKeyUpdate:l(o),onMouseCopy:i(a),onKeyCopy:l(a)}})({editor:e,onRemove:()=>{e.chain().unsetLink().closeEditLinkMenu().focus().run()},onUpdate:()=>{o?e.chain().updateLink(o).closeEditLinkMenu().focus().run():e.chain().unsetLink().closeEditLinkMenu().focus().run()},onCopy:()=>{o&&Le({content:o}).finally((()=>{e.chain().closeEditLinkMenu().focus().run()}))}});return r.createElement(d.Z,{id:"editLinkMenu",sx:{position:"relative",p:"4px",borderRadius:"8px",backdropFilter:"blur(10px)",background:({palette:e})=>(0,m.Fq)(e.background.default,.7)}},r.createElement(s.Z,{type:"url",autoFocus:null==t||t,value:o,onChange:({target:e})=>a(e.value),onKeyDown:i.onKeyUpdate,placeholder:"Link",sx:{".MuiOutlinedInput-root":{".MuiOutlinedInput-input":{color:"text.primary",height:"28px",border:({palette:e})=>`0.5px solid ${e.grey[300]}`,borderRadius:"4px",px:"5px",py:"2px"},"&.Mui-focusVisible, &.Mui-focused fieldset, &:hover fieldset, & fieldset":{outline:"none",border:({palette:e})=>`0.5px solid ${e.grey[300]}`}}}}),r.createElement(S.Z,{sx:{pb:0,pt:"2px",fontSize:"14px"}},o?r.createElement(r.Fragment,null,r.createElement(br,{onMouseDown:i.onMouseRemove,onKeyDown:i.onKeyRemove},r.createElement(p.Z,null,"Remove link")),r.createElement(br,{onMouseUp:i.onMouseCopy,onKeyDown:i.onKeyCopy},r.createElement(p.Z,null,"Copy link"))):void 0))},vr=({editor:e,autoFocus:t})=>{var o;const n=null==(o=(0,A.dck)(e.state))?void 0:o.href,[a,i]=(0,r.useState)(null!=n?n:"");(0,r.useEffect)((()=>{i(null!=n?n:"")}),[n]);const l=(0,r.useCallback)(((t,o)=>{const n=a?e.chain().updateLink(a):e.chain().unsetLink(),r=Po.find((e=>"Link"===e.label)),i=`[value="${null==r?void 0:r.value}"]`;!!o.target.closest(i)?n.run():n.closeEditLinkMenu().run()}),[e,a]),s=(0,r.useCallback)((()=>{const{ranges:t}=e.state.selection,{from:o,to:n}=(0,A.DMz)(t);return(0,N.pr)(e.view,o,n)}),[e]);return r.createElement("div",null,r.createElement(K.ZP,{interactive:!0,showOnCreate:!0,trigger:"manual",placement:"bottom",getReferenceClientRect:s,onClickOutside:l,appendTo:document.body,content:r.createElement(_r,{editor:e,autoFocus:t,url:a,setUrl:i})}))},yr=e=>{const t=(()=>{let e;return{onStart:({editor:t,...o})=>{e=new no(vr,{editor:t,props:{editor:t,...o}})},onUpdate({editor:t,...o}){null==e||e.updateProps({editor:t,...o})},onExit(){const t=e;setTimeout((()=>{null==t||t.destroy()}),0),e=void 0}}})();return new W.Sy({key:$n,state:{init:()=>({isOpen:!1,autoFocus:void 0}),apply(e,t){var o;const n=e.getMeta($n);return n?{isOpen:n.isOpen,autoFocus:null!=(o=n.autoFocus)?o:void 0}:t}},props:{handleDOMEvents:{keydown({state:e,dispatch:t},o){if(!(o instanceof KeyboardEvent))return!1;if(((e,t)=>{var o;if((0,A.Q2o)(e))return!1;const r=(0,n.Yh)(t);if("ArrowLeft"!==r&&"ArrowRight"!==r)return!1;const{selection:a,doc:i}=e;let l=a.$from.pos;l>0&&"ArrowLeft"===r&&l--,l<i.nodeSize&&"ArrowRight"===r&&l++;const s=(0,A.dck)(e,l);return!(null==(o=$n.getState(e))?void 0:o.isOpen)&&(null==s?void 0:s.href)})(e,o)){const o={autoFocus:!1};null==t||t(gr(e.tr,o))}((e,t)=>{var o;if((0,A.Q2o)(e))return!1;const r=(0,n.Yh)(t);if("ArrowLeft"!==r&&"ArrowRight"!==r)return!0;const{selection:a,doc:i}=e;let l=a.$from.pos;l>0&&"ArrowLeft"===r&&l--,l<i.nodeSize&&"ArrowRight"===r&&l++;const s=(0,A.dck)(e,l);return(null==(o=$n.getState(e))?void 0:o.isOpen)&&!(null==s?void 0:s.href)})(e,o)&&(null==t||t(mr(e.tr)));const r=(0,A.Q2o)(e),a=(0,n.Yh)(o).toLocaleLowerCase(),i=A.NTF.link.toLocaleLowerCase();return!(!r||i!==a)&&(o.stopPropagation(),o.preventDefault(),null==t||t(gr(e.tr)),!0)}},decorations(e){if($n.getState(e).isOpen)return(e=>{const{$from:t,$to:o}=e.selection;return Y.EH.create(e.doc,[Y.p.inline(t.pos,o.pos,{style:"background-color: rgba(0, 0, 0, 0.6); padding: 3px 0"})])})(e)}},view(){return{update:({state:o},n)=>{var r,a,i,l,s;const c=null==(r=this.key)?void 0:r.getState(n),d=null==(a=this.key)?void 0:a.getState(o),u=!(null==c?void 0:c.isOpen)&&(null==d?void 0:d.isOpen),p=(null==c?void 0:c.isOpen)&&(null==d?void 0:d.isOpen),m=(null==c?void 0:c.isOpen)&&!(null==d?void 0:d.isOpen),g=null==d?void 0:d.autoFocus;u&&(null==(i=null==t?void 0:t.onStart)||i.call(t,{editor:e,autoFocus:g})),p&&(null==(l=null==t?void 0:t.onUpdate)||l.call(t,{editor:e,autoFocus:g})),m&&(null==(s=null==t?void 0:t.onExit)||s.call(t))}}}})},xr={closeEditLinkMenu:()=>({dispatch:e,tr:t})=>(null==e||e(mr(t)),!0),openEditLinkMenu:()=>({dispatch:e,tr:t})=>(null==e||e(gr(t)),!0),toggleEditLinkMenu:()=>({dispatch:e,tr:t,state:o})=>(null==e||e(hr(o,t)),!0)},Er=e=>{let t="";return e.content.forEach((e=>{t+=e.textContent})),t},Cr=e=>(0,Q.sE)(e).find((t=>t.isLink&&t.value===e)),wr=e=>{setTimeout((()=>{e.commands.openConvertLinkMenu()}),0)},kr=new W.H$("HoverLinkMenuPlugin"),Or=e=>e.setMeta(kr,{isOpen:!1,pos:void 0}),Lr=(e,{pos:t})=>e.setMeta(kr,{isOpen:!0,pos:t}),Sr=({editor:e,href:t,pos:o})=>{const a=(0,r.useCallback)((()=>{e.chain().closeHoverLinkMenu().focus(o).extendMarkRange(n.d9.LINK).openEditLinkMenu().run()}),[e,o]),i=(0,r.useMemo)((()=>t.length>20?t.substring(0,20)+"...":t),[t]);return r.createElement(se,{height:24,sx:{width:"182px !important",borderRadius:"4px",".popover-container":{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"1px 4px"}}},r.createElement(p.Z,{sx:{fontSize:"12px",lineHeight:"14px"}},i),r.createElement(d.Z,{component:"button",onClick:a,sx:{fontSize:"12px",lineHeight:"14px",color:"grey.200",px:"6px",py:"2px",borderRadius:"4px",border:"1px solid transparent",cursor:"pointer",bgcolor:({palette:e})=>(0,m.Fq)(e.background.default,.9),"&:hover":{color:"white",border:({palette:e})=>`1px solid ${e.grey[200]}`,bgcolor:({palette:e})=>(0,m.Fq)(e.background.default,.7)},"&.Mui-focusVisible":{color:"white",border:({palette:e})=>`1px solid ${e.grey[200]}`,bgcolor:({palette:e})=>(0,m.Fq)(e.background.default,.7)}}},"Edit"))},Tr=({editor:e})=>{const{state:t,view:o}=e,{pos:n}=(0,A.SiG)(t,kr),a=(0,A.dck)(t,n);return a&&n?r.createElement("div",null,r.createElement(K.ZP,{trigger:"manual",placement:"bottom",showOnCreate:!0,interactive:!0,delay:1e3,getReferenceClientRect:()=>(0,N.pr)(o,n,n),offset:[0,5],appendTo:document.body,content:r.createElement(Sr,{editor:e,pos:n,href:a.href})})):r.createElement(r.Fragment,null)},Pr=e=>{const t=(()=>{let e;return{onStart:({editor:t,...o})=>{e=new no(Tr,{editor:t,props:{editor:t,...o}})},onUpdate({editor:t,...o}){null==e||e.updateProps(o)},onExit(){const t=e;setTimeout((()=>{null==t||t.destroy()}),0),e=void 0}}})();return new W.Sy({key:kr,state:{init:()=>({isOpen:!1,pos:void 0}),apply(e,t){const o=e.getMeta(kr);return null!=o?o:t}},props:{handleDOMEvents:{mouseover(e,t){if(!(t instanceof MouseEvent))return!1;const{clientX:o,clientY:n}=t,r=e.posAtCoords({left:o,top:n});if(!r)return!1;const{pos:a}=r,{state:i,dispatch:l}=e,s=e.state.doc.nodeAt(a),c=kr.getState(i);return!Rr(s)&&c.isOpen&&(null==l||l(Or(i.tr))),!!Rr(s)&&(null==l||l(Lr(i.tr,{pos:a})),!0)}}},view(){return{update:(o,n)=>{var r,a,i,l;const s=null==(r=this.key)?void 0:r.getState(n),c=null==(a=this.key)?void 0:a.getState(o.state),d=!(null==s?void 0:s.isOpen)&&(null==c?void 0:c.isOpen),u=(null==s?void 0:s.isOpen)&&!(null==c?void 0:c.isOpen);d&&(null==(i=null==t?void 0:t.onStart)||i.call(t,{editor:e})),u&&(null==(l=null==t?void 0:t.onExit)||l.call(t))}}}})},Br={openHoverLinkMenu:({pos:e})=>({dispatch:t,tr:o})=>(null==t||t(Lr(o,{pos:e})),!0),closeHoverLinkMenu:()=>({dispatch:e,tr:t})=>(null==e||e(Or(t)),!0)},Rr=e=>!!e&&e.marks.some((e=>"link"===e.type.name)),Mr=A.IMN.extend({addCommands(){var e;return{...null==(e=this.parent)?void 0:e.call(this),...pr,...xr,...Br}},addProseMirrorPlugins(){return[yr(this.editor),ur(this.editor),Pr(this.editor),(e=this.editor,new W.Sy({key:new W.H$("handlePastedLinkPlugin"),props:{handlePaste:(t,o,n)=>{var r;const{state:a}=t,{selection:i}=a,l=Er(n);if(!l)return!1;const s=null==(r=Cr(l))?void 0:r.href;return!!s&&(i.empty&&i.from===i.to?(e.chain().insertContent(l,{updateSelection:!0}).setTextSelection({from:i.from,to:i.from+l.length}).setLink({href:s}).focus(i.from+l.length).run(),wr(e),!0):e.chain().setLink({href:s}).focus(i.to).run())}}})),new W.Sy({key:new W.H$("handleClickedLinkPlugin"),props:{handleClickOn(e,t){const o=(0,A.dck)(e.state,t);return!!o&&(window.open(o.href,o.target),!0)}}})];var e}}),$r=new W.H$("SelectHighlightPlugin"),Ar=new W.Sy({key:$r,props:{handleClickOn(e,t){if(!e.state.selection.empty)return!1;const o=Ir({doc:e.state.doc,pos:t});if(!o||"inherit"===o.mark.attrs.color)return!1;const n=e.state.tr,r=o.start===o.end?W.qv.create(n.doc,o.start):W.Bs.create(n.doc,o.start,o.end);return n.setSelection(r),e.dispatch(Xo(n)),!0}}}),Ir=({doc:e,pos:t})=>{const o=e.resolve(t).marks().find(A.yUR);if(!o)return;const r=o.attrs[n.hw.HIGHLIGHT_UUID],a=(0,N.N2)(e,(e=>Nr(e.marks,r)));if(!a.length)return;const i=null==a?void 0:a[0].pos,l=null==a?void 0:a[a.length-1];return{mark:o,start:i,end:l.pos+l.node.nodeSize}},Nr=(e,t)=>{var o,r;return e&&(null==(r=null==(o=e.filter(A.yUR))?void 0:o[0])?void 0:r.attrs[n.hw.HIGHLIGHT_UUID])===t},Kr={...{...A.sc2,[A.UHr.name]:{...A.sc2[A.UHr.name],extension:e=>(0,A.UHr)(e).extend({addNodeView:()=>(0,I.fW)((e=>t=>r.createElement(I.T5,null,r.createElement(Ht,{options:e,...t})))(null==e?void 0:e.clip))})},[A.zQ4.name]:{...A.sc2[A.zQ4.name],extension:e=>A.zQ4.extend({addNodeView:()=>(0,I.fW)((({apiUrl:e})=>t=>r.createElement(I.T5,null,r.createElement(Ft,{...t,apiUrl:e})))({apiUrl:null==e?void 0:e.apiUrl}))})},[A.DVG.name]:{...A.sc2[A.DVG.name],extension:e=>(0,A.DVG)(e).extend({addNodeView:()=>(0,I.fW)(_e)})},[A.W_Y.name]:{...A.sc2[A.W_Y.name],extension:e=>A.W_Y.extend({addOptions(){var t;return null!=(t=null==e?void 0:e.iFrame)?t:{}},addNodeView:()=>(0,I.fW)((e=>t=>r.createElement(I.T5,{contentEditable:!1},r.createElement(we,{...t,...e})))(e))})},[A.bE0.name]:{...A.sc2[A.bE0.name],extension:e=>A.bE0.extend({addNodeView(){return(0,I.fW)((t=null==e?void 0:e.card,e=>r.createElement(I.T5,null,r.createElement(qt,{injectedProps:t,...e}))));var t}})},[A.AV$.name]:{...A.sc2[A.AV$.name],extension:e=>(0,A.AV$)(e).extend({addNodeView(){var t;return(0,I.fW)(null==(t=null==e?void 0:e.mentions)?void 0:t.MentionView)}})},[A.YYF.name]:{...A.sc2[A.YYF.name],extension:e=>(0,A.YYF)(e).map((e=>e.extend({addNodeView(){return(0,I.fW)((t=e.options,e=>r.createElement(nr,{injectedProps:t,...e})));var t}})))},[A.$3k.name]:{...A.sc2[A.$3k.name],extension:Wt},[A.Stk.name]:{...A.sc2[A.Stk.name],extension:e=>oo(e).extend(A.cY2)},[A.Rtl.name]:{...A.sc2[A.Rtl.name],extension:e=>oo(e).extend(A.qOA)}},...{...A.iZv,[A.Dzg.name]:{...A.iZv[A.Dzg.name],extension:e=>A.Dzg.extend({addProseMirrorPlugins:()=>"read_later_view"===(null==e?void 0:e.extensionVersion)?[Ar]:[],addKeyboardShortcuts:()=>({[A.NTF.toggleHighlight]:({editor:e})=>{var t,o,n;const r=oe.get("lastUsedBackgroundColor"),a="inherit"===(null==r?void 0:r.color)?void 0:r,i=null!=(n=null!=(o=null==a?void 0:a.color)?o:null==(t=A.wWj.find((e=>"Yellow"===e.title)))?void 0:t.color)?n:A.$RJ;return e.chain().focus().setHighlight({color:i}).focus(e.state.selection.to).run()}})})},[A.IMN.name]:{...A.iZv[A.IMN.name],extension:Mr}},...{...A.oat,[an.name]:{extension:an,targetedEditorVersions:["all_editors"]},[yn.name]:{extension:yn,targetedEditorVersions:["main"]},[Xn.name]:{extension:Xn,targetedEditorVersions:["all_editors"]},[Dn.name]:{extension:Dn,targetedEditorVersions:["main"]},[A.rqI.name]:{...A.oat[A.rqI.name],extension:Fn}}},Dr=e=>r.useMemo((()=>(0,A.ErN)({extensionConfigs:Kr,extensionOptions:{...e,wrapperComponentOverrides:Qt(e)}})),[e]),Hr={launcher:e=>({[`&#${A.zhq} .${n.oS.BLOCK}[type="${n.P7.CLIP_CONTENT}"]`]:{maxHeight:99,"&:last-of-type":{marginBottom:0},"&[video]":{"div:hover .thumbnail":{display:"inherit"}},'&[href*="https://twitter.com"]':{paddingTop:"8px!important",paddingBottom:"18px!important",background:"linear-gradient(#18181B, #18181B) padding-box,  linear-gradient(90deg, rgba(217, 217, 217, 0) 0%, rgba(217, 217, 217, 36%) 50%,rgba(217, 217, 217, 0) 100%) border-box",maxHeight:166,[`& > .${n.oS.BLOCK_WRAPPER}:before`]:{content:"' '",width:"474px",boxShadow:"0px 2px 4px rgb(4 4 7 / 25%), 0px 8px 24px rgb(4 4 7 / 40%)",position:"absolute",zIndex:"2",bottom:"19px",top:"7px",borderRadius:"8px"},"& div.twitterClipButton.no_seshat_propagation":{right:"10px"},[`& .${n.oS.BLOCK_WRAPPER}:after`]:{display:"none"},[`.${n.oS.BLOCK}[type="${n.P7.TWEET}"]`]:{borderRadius:"8px",background:`linear-gradient(${e.palette.grey[500]}, ${e.palette.grey[500]}) padding-box, linear-gradient(180deg, #B8B8B8 -76.62%, #111213 131.05%) border-box`,border:"0.5px solid transparent",maxHeight:"115px",width:"474.5px",margin:"auto",display:"none",overflow:"hidden",fontSize:"14px",color:"text.primary",padding:"6px 13px!important",boxSizing:"border-box","&:nth-of-type(2), &:nth-of-type(3)":{position:"absolute!important",height:"30px","& > div":{opacity:0}},"&:first-of-type, &:nth-of-type(2), &:nth-of-type(3)":{display:"block"},"&:first-of-type":{zIndex:3,paddingTop:"31px!important",position:"relative","&:after":{content:"' '",position:"absolute",bottom:"0",height:"30%",width:"100%",left:"0",background:"linear-gradient(0deg, "+e.palette.grey[500]+", transparent)"}},"&:nth-of-type(2)":{bottom:"12px",marginTop:"10px!important",marginLeft:"10px!important",boxShadow:"0px 2px 4px rgba(4, 4, 7, 0.25), 0px 8px 24px rgba(4, 4, 7, 0.4)",width:"455px",zIndex:1,opacity:.9},"&:nth-of-type(3)":{bottom:"7px",marginTop:"20px!important",marginLeft:"20px!important",width:"435px",opacity:.5},[`& > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK}`]:{marginLeft:0},[`& > .${n.oS.BLOCK_WRAPPER} .${n.oS.BLOCK}`]:{fontSize:"1em"}}}}}),main:()=>({[`& .${n.oS.BLOCK}[type="${n.P7.CLIP_CONTENT}"][href*="https://twitter.com"]`]:{background:"red","& .clipContent_twitterUsername, & .clipContent_buttonTwitter":{display:"none"},[`& .${n.oS.BLOCK}[type="${n.P7.TWEET}"]`]:{mb:"16px!important",[`& > .${n.oS.BLOCK_WRAPPER} > .${n.oS.BLOCK}`]:{marginLeft:"0!important"}}},[`&#seshat_container .${n.oS.BLOCK}[type="${n.P7.CLIP_CONTENT}"][contenteditable='false']`]:{fontSize:"14px","&:not([video])":{padding:"16px 100px",maxHeight:230},"&[twitter]":{minHeight:80,paddingTop:"60px"},"&[video]":{maxHeight:"inherit",[`&>.${n.oS.BLOCK_WRAPPER}`]:{maxHeight:"inherit",[`&>div.${n.oS.BLOCK}[type="${n.P7.CLIP_CONTENT_TITLE}"]:first-of-type`]:{"& .clipContentTitle_author":{display:"none"},[`& .${n.oS.CONTENT}`]:{fontWeight:"700",fontSize:"1.25em",lineHeight:"1.75em"}}},'&[status="later"]':{paddingTop:"50px","iframe, .youtube_player":{display:"none"},"div:hover .thumbnail":{display:"inherit"},[`& .${n.oS.BLOCK}[type="${n.P7.CLIP_CONTENT_TITLE}"]:first-of-type`]:{marginTop:"10px"}}}}}),read_later_view:()=>({}),inline_editor:()=>({})},zr=e=>({[`.${n.oS.CONTENT} a`]:{color:"text.secondary",borderBottom:"1px solid",borderColor:"text.secondary",textDecoration:"none",position:"relative",cursor:"pointer","&:hover":{color:"common.white",borderColor:"common.white"}},[`.${n.oS.CONTENT} img[src*="https://a.slack-edge.com/production-standard-emoji-assets"], .${n.oS.CONTENT} img[src*="twimg.com/emoji"]`]:{maxHeight:"1rem"},[`&#seshat_container .${n.oS.BLOCK}[type='${n.P7.BLOCKQUOTE}'] >.${n.oS.BLOCK_WRAPPER} >.${n.oS.BLOCK}:first-of-type>.${n.oS.BLOCK_WRAPPER}  > .${n.oS.BLOCK_CONTENT}`]:{marginTop:0},"& * ::selection":{backgroundColor:(0,H.Fq)(e.palette.grey[900],.6)},...ne}),Zr=g.css`
  .${n.oS.DROPCURSOR} {
    position: absolute;
    z-index: 50;
    pointer-events: none;
    background: #b5b6ba;
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.16),
      0px 0px 4px rgba(255, 255, 255, 0.48),
      inset 0px 0px 8px rgba(255, 255, 255, 0.16),
      inset 0px 0px 4px rgba(255, 255, 255, 0.48);
    border-radius: 100px;
  }
  .ProseMirror-gapcursor {
    display: none;
    pointer-events: none;
    position: absolute;
  }
  .ProseMirror-gapcursor:after {
    content: '';
    display: block;
    position: absolute;
    top: -2px;
    width: 20px;
    border-top: 1px solid black;
    animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
  }
  @keyframes ProseMirror-cursor-blink {
    to {
      visibility: hidden;
    }
  }
  .ProseMirror-hideselection {
    user-select: none !important;
  }
  .ProseMirror-hideselection:not(.ProseMirror) *::selection {
    background: transparent !important;
  }
  .ProseMirror-hideselection:not(.ProseMirror) *::-moz-selection {
    background: transparent !important;
  }
  .ProseMirror-hideselection:not(.ProseMirror) * {
    caret-color: transparent !important;
  }
  .ProseMirror-focused .ProseMirror-gapcursor {
    display: block;
  }
`,jr=g.css`
  .items,
  .mention_popover {
    position: relative;
    border-radius: 0.25rem;
    background: var(--elements-borders);
    color: var(--content-light);
    overflow: hidden;
    font-size: 0.9rem;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  .item {
    display: block;
    width: 100%;
    text-align: left;
    background: transparent;
    border: none;
    padding: 0.2rem 0.5rem;
    &.is-selected,
    &:hover {
      color: var(--content-light);
      background: var(--background-secondary-hover);
    }
  }
`,Fr=g.css`
  #seshat_container {
    ${fr};
    ${Oe}
  }
`,Ur=g.css`
  ${Zr};
  ${jr};
`,Jr=g.css`
  .ProseMirror {
    outline: none;
    color: white;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    white-space: pre-wrap;
  }
  .ProseMirror-selectednode .${n.oS.BLOCK_CONTENT} {
    background: #6868689f;
    border-radius: 0.25rem;
  }
`,Wr=()=>(0,M.Z)({styles:g.css`
      // Main Editor style
      ${Jr}
      // Extensions
    ${Fr}
    ${Ur};
    `}),qr=({extensionVersion:e,children:t,editorRef:o,...n})=>{const a=(0,r.useMemo)((()=>{return t=e,e=>t&&Hr[t]?{...zr(e),...Hr[t](e)}:zr(e);var t}),[e]);return r.createElement(d.Z,{id:A.zhq,...n,sx:a,ref:o},t)},Gr=(0,r.forwardRef)((({content:e,editorId:t,options:o},a)=>{var i;const l=(({editorId:e,content:t,options:o})=>{var a,i,l,s,c,d;const u=Dr(null==o?void 0:o.extensionConfiguration),p=(0,n.Ds)(null==(i=null==(a=null==o?void 0:o.editorConfiguration)?void 0:a.onUpdate)?void 0:i.fn,null==(s=null==(l=null==o?void 0:o.editorConfiguration)?void 0:l.onUpdate)?void 0:s.debounceTimeOut),m=null==(d=null==(c=null==o?void 0:o.editorConfiguration)?void 0:c.onUpdate)?void 0:d.updateNodeFn,g=r.useMemo((()=>"string"===typeof t?t:{type:"doc",content:(0,A.IJ$)(t)}),[t]);return r.useMemo((()=>{var t,n;return{extensions:u,autofocus:null==(t=null==o?void 0:o.editorConfiguration)?void 0:t.autofocus,useFlushSync:null==(n=null==o?void 0:o.editorConfiguration)?void 0:n.useFlushSync,editorProps:{attributes:{id:e}},onUpdate({editor:e,transaction:t}){if(p(e),!m)return;const o=t.docs.shift();if(!o)return;const n=null==o?void 0:o.toJSON(),r=e.state.doc.toJSON(),a=F().differenceWith(r.content[0].content,null==n?void 0:n.content[0].content,F().isEqual);m(a)},onBlur:({editor:e,event:t})=>{var n,r;null==(r=null==(n=null==o?void 0:o.editorConfiguration)?void 0:n.onBlur)||r.call(n,{editor:e,event:t})},onFocus:({editor:e,event:t})=>{var n,r;null==(r=null==(n=null==o?void 0:o.editorConfiguration)?void 0:n.onFocus)||r.call(n,{editor:e,event:t})},injectCSS:!1,onCreate(){},content:g}}),[u,null==o?void 0:o.editorConfiguration,e,g,p,m])})({content:e,editorId:t,options:o}),s=(0,I.jE)(l,[t]);(({editorId:e,options:t})=>{const o=null==t?void 0:t.extensionConfiguration.EditorEventBus,a=(0,r.useCallback)((({editor:e,content:t})=>{try{(0,n.fF)("seshat:seshatEditor")({type:"update content",content:t}),e.commands.replaceContent({emitUpdate:!0,content:Array.isArray(t)?(0,A.IJ$)(t):t})}catch(o){(0,n.fF)("seshat:seshatEditor")(o)}}),[]),i=(0,r.useCallback)((({editor:e,attrs:t})=>{try{(0,n.fF)("seshat:seshatEditor")({type:"update attrs",attrs:t}),e.commands.updateBlockAttributesAt({pos:0,attrs:t})}catch(o){(0,n.fF)("seshat:seshatEditor")(o)}}),[]);(0,r.useEffect)((function(){if(!o)return;const t=o.updateContent.on(e,(({content:t})=>{const o=(0,A.OJB)(e);o&&a({editor:o,content:t})})),n=o.updateAttrs.on(e,(({attrs:t})=>{const o=(0,A.OJB)(e);o&&i({editor:o,attrs:t})}));return()=>{t(),n()}}),[e])})({editorId:t,options:o}),r.useImperativeHandle(a,(()=>({extensionVersion:null==o?void 0:o.extensionConfiguration.extensionVersion,refreshEditor:o=>{if(!s)return;(0,n.fF)("seshat:seshatEditor")({type:"force refresh",props:o,content:e,editorId:t});const{content:r,editorId:a}=null!=o?o:{};try{s.commands.replaceContent((({content:e,editorId:t,editorIdFromRefresh:o,contentFromRefresh:n})=>n&&o&&o===t?{content:n,emitUpdate:!1}:{emitUpdate:!0,content:Array.isArray(e)?(0,A.IJ$)(e):e})({contentFromRefresh:r,editorIdFromRefresh:a,content:e,editorId:t}))}catch(i){(0,n.fF)("seshat:seshatEditor")(i)}}})));const c=(0,r.useRef)(null),d=(0,r.useCallback)((()=>{var e,t;return null==(t=null==(e=c.current)?void 0:e.querySelector(".ProseMirror"))?void 0:t.classList.add("mousetrap")}),[c]);return r.createElement(qr,{editorRef:c,onFocus:d,extensionVersion:null==(i=null==o?void 0:o.extensionConfiguration)?void 0:i.extensionVersion},r.createElement("div",{id:"placeholder_container",style:{pointerEvents:"none"}}),r.createElement(I.kg,{editor:s}))})),Vr=e=>{const[t,o]=r.useState(void 0);return r.useEffect((()=>{const t=(0,A.OJB)(e);t?o(t):Yr({editorNodeID:e,setEditorApi:o,nodeToObserve:document.body})}),[e]),t},Yr=({nodeToObserve:e,editorNodeID:t,setEditorApi:o})=>{let n=new MutationObserver((e=>{e.forEach((e=>{if(!e.addedNodes)return;const r=Array.from(e.addedNodes).find((e=>(null==e?void 0:e.id)===t));r&&(o(r.editor),n.disconnect())}))}));n.observe(e,{childList:!0,subtree:!0,attributes:!1,characterData:!1}),setTimeout((()=>{n.disconnect()}),2e4)}}}]);
//# sourceMappingURL=c8ffa1b8-0620303a51a8cb36.js.map