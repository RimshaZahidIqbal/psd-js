var PSD = require('psd');

var file = 'examples/PSd.psd';
var start = new Date();

PSD.open(file).then(function (psd) {
    return psd.image.saveAsPng('./Output/PSd-img1.png');
}).then(function () {
    console.log("Finished in " + ((new Date()) - start) + "ms");
});