"""Find sections in index.html."""
import re

with open(r'e:/小智/lazy_so_clone/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

body_start = content.find('<body>')
print(f'Body starts at position: {body_start}')
# Find all section elements
for m in re.finditer(r'<section\s+class="[^"]*(?:Capture|Intro|Articles|Join|Connections|Members|Bidirectionnal|JoinFooter|WebClipper|ModalFull)[^"]*"', content[body_start:]):
    pos = body_start + m.start()
    # Find the closing tag
    end_pos = content.find('</section>', pos)
    if end_pos == -1:
        end_pos = pos + 200
    snippet = content[pos:min(end_pos+10, pos+300)]
    print(f'\nFound at position {pos}:')
    print(snippet[:300])
    print('---')
