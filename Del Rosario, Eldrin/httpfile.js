var http = require('http');
var fs = require("fs");
var files = process.argv[3];
var portNumber = process.argv[2];

var server = http.createServer( function callback(req, res) {
	var stream = fs.createReadStream(files);
	stream.pipe(res);
});
server.listen(portNumber);





