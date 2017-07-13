var http = require('http');
var through2map = require('through2-map');

var server = http.createServer(function(req , res){
    req.pipe(through2map(function (chunk){
        return chunk.toString().toUpperCase();
    })).pipe(res);
});
server.listen(Number(process.argv[2]));