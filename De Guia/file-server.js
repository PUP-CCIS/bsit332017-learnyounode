var fs = require('fs'),
    http = require('http');

var port = process.argv[2],
    resStream = fs.createReadStream(process.argv[3]);

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    resStream.pipe(res);
});

server.listen(port);