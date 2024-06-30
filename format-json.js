const fontName = 'awesome';
const font = require(`./json/${fontName}.json`);
const fs = require('fs');

const fontJson = JSON.stringify(font, function (key, value) {
    if (Array.isArray(value?.glyphNames?.names)) {
        return value?.glyphNames?.names?.map((item) => {
            return fontName + '-' + item
        });
    }
    return value;
});

if (fontJson){
    fs.writeFileSync(`json/${fontName}-formatted.json`, fontJson);
}
