"""Modify index.html - inject homepage launcher input box and add transition styles."""
import re

INDEX_PATH = r'e:/小智/lazy_so_clone/index.html'

with open(INDEX_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# ============================================================
# 1. Append a new <style> block right before </head> to override constraints
#    and add our own styles for the new input box + fade transition
# ============================================================
EXTRA_STYLE = '''
<style id="xchat-extra-style">
/* ===== 解除首页原有的 overflow:hidden 与全高限制，让页面自然显示 ===== */
html, body { overflow:auto !important; height:auto !important; max-height:none !important; position:static !important; }
#__next { overflow:visible !important; height:auto !important; max-height:none !important; }

/* ===== 让 Header 立即可见（避免初始 transform/opacity 为 0） ===== */
.Header_header__NLhag { transform:translateY(0) !important; opacity:1 !important; transition:none !important; }

/* ===== 调整 Intro_section 让其包裹新增的输入框（高度自适应） ===== */
.Intro_section__VP3pc { height:auto !important; min-height:calc(100vh - 80px) !important; background-color:#27282d !important; padding:6rem 0 4rem !important; display:flex !important; align-items:center !important; justify-content:center !important; }

/* ===== 主输入容器 ===== */
.xchat-launcher { position:relative; width:68rem; max-width:calc(100vw - 48px); margin:0 auto; padding:0 16px; box-shadow:0 -2px 6px hsla(0,0%,100%,.17),0 5px 18px rgba(0,0,0,.4),0 4px 40px 8px rgba(0,0,0,.4),0 1px 4px -1px rgba(0,0,0,.302),inset 0 0 0 .3px hsla(0,0%,100%,.3),0 0 0 .5px hsla(0,0%,100%,.4); background:linear-gradient(177.75deg,rgba(26,27,30,.9) 1.89%,rgba(12,13,17,.5) 98.11%); z-index:5001; display:flex; flex-direction:column; padding:0 16px; border-radius:8px; }
.xchat-launcher__inner { border-radius:4px; border:.5px solid transparent; background:linear-gradient(138.16deg,#313135 -14.83%,#1f2024 92.59%) padding-box,linear-gradient(94.85deg,#8c8c93 .63%,#3f3f43) border-box; padding:18px 20px; }
.xchat-launcher__editor { max-height:120px; min-height:60px; }
.xchat-launcher__textarea { width:100%; min-height:60px; max-height:120px; background:transparent; border:none; outline:none; resize:none; color:#fff; font-family:Inter, -apple-system, "Segoe UI", Arial, sans-serif; font-size:15px; line-height:1.6; padding:4px 0; }
.xchat-launcher__textarea::placeholder { color:#4e4f52; }
.xchat-launcher__placeholder-suggestion { display:inline-flex; align-items:center; gap:4px; margin-left:6px; padding:1px 6px; border:1px solid #4e4f52; border-radius:3px; color:#b4b4b4; font-size:13px; font-family:Inter, monospace; line-height:1; }
.xchat-launcher__link { background:rgba(33,34,38,.8); opacity:.85; border:.5px solid #4b4a51; border-radius:100px; display:inline-flex; align-items:center; gap:8px; padding:.4rem 1rem; color:#fff; width:fit-content; margin:.6rem 1.2rem 1rem 1.4rem; font-size:13px; text-decoration:none; cursor:default; }
.xchat-launcher__link:hover { opacity:1; }
.xchat-launcher__link svg { width:14px; height:14px; flex-shrink:0; }
.xchat-launcher__bottom { display:flex; align-items:center; justify-content:space-between; padding:0 .5rem .5rem .5rem; }
.xchat-launcher__inbox { display:flex; align-items:center; gap:8px; padding:8px 14px; border-radius:6px; background:transparent; color:#e4e4e6; font-size:14px; cursor:pointer; border:none; font-family:inherit; }
.xchat-launcher__inbox:hover { background:rgba(255,255,255,.04); }
.xchat-launcher__inbox svg { width:16px; height:16px; }

/* ===== 渐隐过渡动画（首页 -> 对话页） ===== */
body.xchat-fading { opacity:0 !important; transition:opacity .5s ease !important; }
</style>'''

# Insert EXTRA_STYLE right before </head>
content = content.replace('</head>', EXTRA_STYLE + '</head>', 1)


# ============================================================
# 2. Replace the empty Intro_section with a populated one containing the launcher
# ============================================================
OLD_INTRO = '<section class="Intro_section__VP3pc"></section>'
NEW_INTRO = '''<section class="Intro_section__VP3pc">
  <div class="xchat-launcher" id="xchat-launcher">
    <div class="xchat-launcher__inner">
      <div class="xchat-launcher__editor">
        <textarea id="xchat-input" class="xchat-launcher__textarea" placeholder="Jot something down or hit / for lazy commands" autocomplete="off" spellcheck="false"></textarea>
      </div>
    </div>
    <a class="xchat-launcher__link" href="javascript:void(0)" onclick="return false;">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#b4b4b4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#b4b4b4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>Lazy · A capture tool for knowledge</span>
    </a>
    <div class="xchat-launcher__bottom">
      <button type="button" class="xchat-launcher__inbox" id="xchat-inbox" aria-label="收件箱">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M3 13h2l2 7 2-7h2l2 7 2-7h2" stroke="#b4b4b4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="3" y="5" width="18" height="12" rx="2" stroke="#b4b4b4" stroke-width="1.5"/>
        </svg>
        <span>收件箱</span>
      </button>
      <div class="Button_button__PjVhE" id="xchat-submit" role="button" tabindex="0" style="cursor:pointer">
        <div class="Button_gradient__U7Tc7"></div>
        <div class="Button_content__XZA3a">
          <p class="Button_text__1tg8Q small">对话</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16" xml:space="preserve" class="Button_icon__DJGKY">
            <path d="M.4 2.2C0 3 0 4.2 0 6.4v3.2c0 2.2 0 3.4.4 4.2.4.8 1 1.4 1.7 1.7.9.5 2.1.5 4.3.5h3.2c2.2 0 3.4 0 4.2-.4.8-.4 1.4-1 1.7-1.7.5-.9.5-2.1.5-4.3V6.4c0-2.2 0-3.4-.4-4.2-.4-.8-1-1.4-1.7-1.7C13 0 11.8 0 9.6 0H6.4C4.2 0 3 0 2.2.4 1.4.8.8 1.4.4 2.2zm5.8 2v7.6h4.4v-1H7.3V4.2H6.2z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#e4e4e6"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>'''

if OLD_INTRO not in content:
    raise SystemExit('ERROR: Could not find the empty Intro_section to replace.')

content = content.replace(OLD_INTRO, NEW_INTRO, 1)


# ============================================================
# 3. Append the script block before </body> to handle submit + fade transition
# ============================================================
EXTRA_SCRIPT = '''
<script id="xchat-extra-script">
(function(){
  "use strict";

  function $(id){ return document.getElementById(id); }

  // ---- Focus styles: brighten border on focus ----
  var launcher = $("xchat-launcher");
  var inner = launcher && launcher.querySelector(".xchat-launcher__inner");
  var input = $("xchat-input");
  if (input && inner) {
    input.addEventListener("focus", function(){
      inner.style.boxShadow = "0 0 0 1.5px rgba(180,180,180,0.55)";
    });
    input.addEventListener("blur", function(){
      inner.style.boxShadow = "";
    });
  }

  // ---- Submit: opacity fade then redirect to chat.html ----
  function goToChat(question) {
    var q = (question || "").trim();
    if (!q) { if (input) input.focus(); return; }
    // URL-encode and preserve as query string
    var url = "chat.html?q=" + encodeURIComponent(q);
    document.body.classList.add("xchat-fading");
    setTimeout(function(){
      window.location.href = url;
    }, 480);
  }

  var submitBtn = $("xchat-submit");
  if (submitBtn) {
    submitBtn.addEventListener("click", function(e){
      e.preventDefault();
      goToChat(input && input.value);
    });
    submitBtn.addEventListener("keydown", function(e){
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        goToChat(input && input.value);
      }
    });
  }
  if (input) {
    input.addEventListener("keydown", function(e){
      // Plain Enter (without Shift) submits; Shift+Enter inserts newline
      if (e.key === "Enter" && !e.shiftKey && !e.isComposing) {
        e.preventDefault();
        goToChat(input.value);
      }
    });
  }

  // ---- Inbox button is a no-op placeholder (matches the original design) ----
  var inboxBtn = $("xchat-inbox");
  if (inboxBtn) {
    inboxBtn.addEventListener("click", function(e){ e.preventDefault(); });
  }
})();
</script>'''

# Insert right before </body>
if '</body>' in content:
    content = content.replace('</body>', EXTRA_SCRIPT + '</body>', 1)
else:
    # If no explicit body close, insert at end
    content = content + EXTRA_SCRIPT


with open(INDEX_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print('OK - index.html updated successfully')
print('File size:', len(content), 'bytes')
