import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

// Use the actual portfolio portrait; no generated or retouched photography.
const portrait = (await readFile(new URL('../public/images/avatar.jpeg', import.meta.url))).toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630">
<defs>
  <radialGradient id="bg"><stop stop-color="#202124"/><stop offset="1" stop-color="#101112"/></radialGradient>
  <clipPath id="portrait"><circle cx="212" cy="315" r="115"/></clipPath>
  <radialGradient id="glow"><stop stop-color="#3978a3" stop-opacity=".14"/><stop offset="1" stop-color="#3978a3" stop-opacity="0"/></radialGradient>
</defs>
<rect width="1200" height="630" fill="url(#bg)"/>
<ellipse cx="1080" cy="200" rx="450" ry="500" fill="url(#glow)"/>
<g fill="none" stroke="#47799c" stroke-width=".7" opacity=".35">
<ellipse cx="1110" cy="320" rx="390" ry="240" transform="rotate(-35 1110 320)"/>
<ellipse cx="1070" cy="280" rx="280" ry="470" transform="rotate(22 1070 280)"/>
<ellipse cx="1020" cy="400" rx="390" ry="190" transform="rotate(50 1020 400)"/>
<ellipse cx="1130" cy="280" rx="510" ry="260" stroke-dasharray="3 6" transform="rotate(-60 1130 280)"/>
</g>
<g fill="#3783b8" opacity=".8"><circle cx="748" cy="118" r="2.5"/><circle cx="1140" cy="345" r="3.5"/><circle cx="815" cy="425" r="3"/><circle cx="711" cy="242" r="2.5"/></g>
<image x="97" y="200" width="230" height="230" preserveAspectRatio="xMidYMid slice" clip-path="url(#portrait)" xlink:href="data:image/jpeg;base64,${portrait}"/>
<circle cx="212" cy="315" r="115" fill="none" stroke="#545456" stroke-width="5"/>
<g font-family="Helvetica Neue, Helvetica, Arial, sans-serif">
<text x="393" y="202" font-size="30" font-weight="700" fill="#f5f5f7">ap.</text>
<text x="390" y="294" font-size="68" font-weight="700" letter-spacing="-2.5" fill="#f5f5f7">Apurva Aggarwal</text>
<text x="394" y="354" font-family="Menlo, monospace" font-size="21" font-weight="700" letter-spacing="3" fill="#a1a1a6">CS + BUSINESS @ MSU</text>
<text x="394" y="421" font-size="27" fill="#c7c7cc">Software, Data &amp; AI</text>
<text x="394" y="516" font-family="Menlo, monospace" font-size="18" letter-spacing="2" fill="#86868b">apaggarwal.com</text>
</g></svg>`;
await writeFile(new URL('../public/images/og-preview.svg', import.meta.url), svg);
await sharp(Buffer.from(svg)).png().toFile(new URL('../public/images/og-preview.png', import.meta.url).pathname);
console.log('Generated SVG source and 1200×630 PNG from the original portrait.');
