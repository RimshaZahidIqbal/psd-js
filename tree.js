const { start } = require('repl');
var util = require('util');

var psd = PSD.fromFile(file);
psd.parse();

console.log(util.inspect(psd.tree().export(), { depth: null }));