var through2map = require('through2-map');
var http = require('http');

var toUp = through2map(function(chunk){
	var toString = chunk.toString();
	var toUpper = toString.toUpperCase();
	return toUpper();
});

var newServer = http.createServer(function(request,response){
	if(request.method=='POST'){
		request.pipe(toUp).pipe(response);
	}
});
newServer.listen(Number(process.argv[2]));