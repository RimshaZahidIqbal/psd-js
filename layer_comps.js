var PSD = require('psd');

PSD.open('./examples/PSd.psd').then(function (psd) {
    console.log(psd.resources.resource('layerComps').export());
});