from pathlib import Path

INDEX_PATH = Path(r'E:/小智/lazy_so_clone/index.html')

if not INDEX_PATH.exists():
    print("Error: index.html not found")
    exit(1)

content = INDEX_PATH.read_text(encoding='utf-8')

# 1. Remove .Capture_section__jYspM from the list of hidden classes
hidden_list_old = '.Articles_section__Jzj1q,.Join_section__4t7e7,.Capture_section__jYspM,.WebClipper_section__KV67H,.Connections_section__oBMnU,.Bidirectionnal_section__owiyJ,.Members_section__k1gyO,.JoinFooter_section__3g2Ku,.Footer_footer__Q5T55,.ModalFull_container__QM9L_{display:none!important;visibility:hidden!important;height:0!important;overflow:hidden!important;position:absolute!important;pointer-events:none!important}'
hidden_list_new = '.Articles_section__Jzj1q,.Join_section__4t7e7,.WebClipper_section__KV67H,.Connections_section__oBMnU,.Bidirectionnal_section__owiyJ,.Members_section__k1gyO,.JoinFooter_section__3g2Ku,.Footer_footer__Q5T55,.ModalFull_container__QM9L_{display:none!important;visibility:hidden!important;height:0!important;overflow:hidden!important;position:absolute!important;pointer-events:none!important}'

if hidden_list_old in content:
    content = content.replace(hidden_list_old, hidden_list_new)
    print("Successfully unhidden .Capture_section__jYspM in stylesheet.")
else:
    # Try a relaxed search
    pat = '.Capture_section__jYspM,'
    if pat in content:
        content = content.replace(pat, '')
        print("Relaxed unhide successful.")
    else:
        print("Warning: Could not find hidden stylesheet class line to replace.")

# 2. Inject body fading style right before </head>
extra_style = """
<style id="xchat-extra-style">
body.xchat-fading { opacity: 0 !important; transition: opacity 0.5s ease !important; }
</style>
"""
content = content.replace('</head>', extra_style + '</head>', 1)

# 3. Inject original elements event hooks script right before </body>
extra_script = """
<script id="xchat-extra-script">
(function() {
  "use strict";

  function initLauncherHooks() {
    var checkInterval = setInterval(function() {
      var captureSec = document.querySelector('[class*="Capture_section"]');
      if (!captureSec) return;

      var input = captureSec.querySelector('textarea') || 
                  captureSec.querySelector('[contenteditable]') ||
                  captureSec.querySelector('input');
      
      var submitBtn = captureSec.querySelector('[class*="Button_button"]') || 
                      captureSec.querySelector('[role="button"]') || 
                      captureSec.querySelector('button');

      if (input && submitBtn) {
        clearInterval(checkInterval);
        console.log("Original launcher elements found! Hooking submit event...");

        submitBtn.addEventListener('click', function(e) {
          var val = getInputValue(input);
          if (val.trim()) {
            e.preventDefault();
            e.stopPropagation();
            goToChat(val);
          }
        }, true);

        input.addEventListener('keydown', function(e) {
          if (e.key === 'Enter' && !e.shiftKey) {
            var val = getInputValue(input);
            if (val.trim()) {
              e.preventDefault();
              e.stopPropagation();
              goToChat(val);
            }
          }
        }, true);
      }
    }, 100);

    setTimeout(function() {
      clearInterval(checkInterval);
    }, 12000);
  }

  function getInputValue(el) {
    if (!el) return '';
    return el.value !== undefined ? el.value : (el.innerText || el.textContent || '');
  }

  function goToChat(question) {
    var q = question.trim();
    if (!q) return;
    var url = "chat.html?q=" + encodeURIComponent(q);
    document.body.classList.add("xchat-fading");
    setTimeout(function() {
      window.location.href = url;
    }, 480);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLauncherHooks);
  } else {
    initLauncherHooks();
  }
})();
</script>
"""

content = content.replace('</body>', extra_script + '</body>', 1)

INDEX_PATH.write_text(content, encoding='utf-8')
print("Successfully applied clean event hooks to original index.html components.")
