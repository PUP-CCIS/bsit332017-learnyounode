var fs=require('fs');
var content=fs.readFileSync(process.argv[2]);
var Array=content.toString().split('\n');
console.log(Array.length-1);