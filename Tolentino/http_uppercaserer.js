var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

var server = http.createServer((req,res) => {
	if (req.method !== 'POST') return res.end('this server only accepts POST');
	
	req.pipe(map(chunk => {
		return chunk.toString().toUpperCase();
	})).pipe(res);
});

server.listen(port);