var fs = require('fs')

var file = fs.readFile(process.argv[2](function callback(err,data)){
    throw err;

}).toString().split('\n').length

console.log(file-1)