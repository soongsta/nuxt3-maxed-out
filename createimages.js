const fs = require('fs')

function createImage(newname) {
    fs.copyFileSync('test.jpg', newname);
}

for (let index = 0; index < 100000; index++) {
    createImage(`./public/images/test${index}.jpg`);
}
