var _ = require('lodash');
var PSD = require('psd');
const fs = require('fs');
var file =  './examples/file.psd';

PSD.open(file).then(function (psd) {
    var type, fonts = [];
    psd.tree().descendants().forEach(function (node) {
        type = node.get('typeTool');
        if (!type) return;
        fonts = fonts.concat(type.fonts());
    });

    console.log(_.uniq(fonts));
    fs.writeFileSync('./Output/fonts/output.txt', fonts);
});