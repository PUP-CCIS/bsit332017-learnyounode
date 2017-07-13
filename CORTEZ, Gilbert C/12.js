var http=require('http');
var map = require('through2-map');

var server=http.createServer(function callback(req,res){
if(req.method=='POST'){
req.pipe(map(function(chunk){
return chunk.toString().toUpperCase()
})).pipe(res);
}
})
server.listen(process.argv[2]);