const path = require("node:path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "../..");
const backgroundPath = path.join(__dirname, "background.png");
const avatarPath = path.join(root, "public/images/avatar.jpeg");
const outputPath = path.join(root, "public/images/og-preview.png");

const width = 1200;
const height = 630;
const avatarSize = 236;

const typography = Buffer.from(`
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#000" flood-opacity="0.38"/>
      </filter>
    </defs>
    <g filter="url(#shadow)">
      <text x="392" y="203" fill="#f5f5f7" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700" letter-spacing="-1">ap.</text>
      <text x="392" y="294" fill="#f5f5f7" font-family="Arial, Helvetica, sans-serif" font-size="70" font-weight="700" letter-spacing="-2.8">Apurva Aggarwal</text>
      <text x="394" y="354" fill="#a1a1a6" font-family="Menlo, Monaco, monospace" font-size="21" font-weight="600" letter-spacing="3">CS + BUSINESS @ MSU</text>
      <text x="394" y="421" fill="#d2d2d7" font-family="Arial, Helvetica, sans-serif" font-size="27" font-weight="500">Data · Software · Operations</text>
      <text x="394" y="516" fill="#86868b" font-family="Menlo, Monaco, monospace" font-size="18" font-weight="500" letter-spacing="1.5">apaggarwal.com</text>
    </g>
  </svg>
`);

async function build() {
  const background = await sharp(backgroundPath)
    .resize(width, height, { fit: "cover", position: "centre" })
    .modulate({ brightness: 0.78, saturation: 0.82 })
    .png()
    .toBuffer();

  const avatar = await sharp(avatarPath)
    .resize(avatarSize, avatarSize, { fit: "cover", position: "centre" })
    .composite([
      {
        input: Buffer.from(`<svg width="${avatarSize}" height="${avatarSize}"><circle cx="${avatarSize / 2}" cy="${avatarSize / 2}" r="${avatarSize / 2 - 3}" fill="white"/></svg>`),
        blend: "dest-in"
      },
      {
        input: Buffer.from(`<svg width="${avatarSize}" height="${avatarSize}"><circle cx="${avatarSize / 2}" cy="${avatarSize / 2}" r="${avatarSize / 2 - 3}" fill="none" stroke="#4a4a4f" stroke-width="5"/></svg>`)
      }
    ])
    .png()
    .toBuffer();

  await sharp(background)
    .composite([
      { input: avatar, left: 94, top: 197 },
      { input: typography, left: 0, top: 0 }
    ])
    .png({ compressionLevel: 9 })
    .toFile(outputPath);
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
