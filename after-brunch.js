const fs = require('fs');
const fileName = './public/index.html';

function updateIndexHtml() {
  let data = fs.readFileSync(fileName, 'utf-8');

  let updatedFile = data.replace(/css/, 'css.gz');
  updatedFile = updatedFile.replace(/css"/, 'css.gz"');
  updatedFile = updatedFile.replace(/js/, 'js.gz');

  fs.writeFileSync(fileName, updatedFile, 'utf-8');
}

updateIndexHtml();
