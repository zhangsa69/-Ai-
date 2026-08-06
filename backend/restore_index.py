import re
from pathlib import Path

INDEX_PATH = Path(r'E:/小智/lazy_so_clone/index.html')

if not INDEX_PATH.exists():
    print("Error: index.html not found")
    exit(1)

content = INDEX_PATH.read_text(encoding='utf-8')

# Remove extra styles
content = re.sub(r'<style id="xchat-extra-style">[\s\S]*?</style>', '', content)

# Remove extra scripts
content = re.sub(r'<script id="xchat-extra-script">[\s\S]*?</script>', '', content)

# Restore Intro_section to empty
# Matches the custom section layout
custom_section_pat = r'<section class="Intro_section__VP3pc">[\s\S]*?</section>'
content = re.sub(custom_section_pat, '<section class="Intro_section__VP3pc"></section>', content)

INDEX_PATH.write_text(content, encoding='utf-8')
print("Successfully restored index.html to clean template state.")
