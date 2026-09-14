const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('styles/style.css', 'utf8');
let js = fs.readFileSync('scripts/app.js', 'utf8');

const assetBase = 'https://cdn.jsdelivr.net/gh/Laxury-H/Wix-code@main/assets/';

html = html.split('assets/').join(assetBase);
html = html.replace('<link rel="stylesheet" href="styles/style.css">', '<style>\n' + css + '\n</style>');

js = js.split('assets/').join(assetBase);
html = html.replace('<script src="scripts/app.js"></script>', '<script>\n' + js + '\n</script>');

fs.writeFileSync('maven-wix-embed.html', html, 'utf8');
console.log('Successfully generated maven-wix-embed.html, size:', html.length, 'bytes');
