var PSD = require('psd');

var file = 'examples/PSd.psd';
var start = new Date();

PSD.open(file).then(function (psd) {
    psd.tree().descendants().forEach(function (node) {
        if (node.isGroup()) return true;
        node.saveAsPng("./Output/layers/" + node.name + ".png").catch(function (err) {
            console.log(err.stack);
        });
    });
}).then(function () {
    console.log("Finished in " + ((new Date()) - start) + "ms");
}).catch(function (err) {
    console.log(err.stack);
});