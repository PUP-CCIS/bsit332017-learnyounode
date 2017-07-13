var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer((req, res) => {
	var stream = fs.createReadStream(file,{encoding: 'utf8' });
	stream.pipe(res);
});

server.listen(port);