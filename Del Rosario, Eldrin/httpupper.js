var http = require("http");
var server = http.createServer(function callback (req, res) {
	if (req.method == 'POST'){
	req.pipe(map(function (chunk){
		return chunk.toString().toUpperCase()
	})).pipe(res);
	}
});
var map = require('through2-map');
server.listen(process.argv[2]);



