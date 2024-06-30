const opentype = require('opentype.js');
const fs = require('fs');
const fontName = 'awesome';

opentype.load(`ttf/${fontName}.ttf`, function (err, font) {
    if (err) {
        console.log('Font could not be loaded: ' + err);
    } else {
        const fontJson = JSON.stringify(font, function (key, value) {
            if (key === 'font') return;
            return value;
        });
        fs.writeFileSync(`json/${fontName}.json`, fontJson);
    }
});
