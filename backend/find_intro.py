"""Find Intro_section in index.html."""
import re

with open(r'e:/小智/lazy_so_clone/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

m = re.search(r'<section class="Intro_section__VP3pc"></section>', content)
if m:
    print(f'Found empty Intro_section at position {m.start()}, length {len(m.group(0))}')
    print(f'Context: ...{content[max(0,m.start()-50):m.end()+50]}...')
else:
    print('Not found')
