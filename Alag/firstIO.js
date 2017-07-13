var fs = require('fs');

var total = fs.readFileSync(process.argv[2]).toString();
var buf = total.split('\n').length;
//console.log(buf);
console.log(buf-1);