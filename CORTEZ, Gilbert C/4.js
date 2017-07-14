var fs=require('fs');
fs.readFile(process.argv[2],function(err, content){
if(err){
	return console.log(err);
}
var Array=content.toString().split('\n');
console.log(Array.length-1);
});