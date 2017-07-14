var http = require('http')
var fs = require('fs')

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function callback(req, res){
    var readfstream = fs.createReadStream(file);  
    readfstream.pipe(res);
})
server.listen(port);
