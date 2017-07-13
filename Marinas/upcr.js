var http = require('http')
var map = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function callback(req, res){
    req.pipe(map(function(chunk){
        return chunk.toString().toUpperCase()
    })).pipe(res);
})
server.listen(port);