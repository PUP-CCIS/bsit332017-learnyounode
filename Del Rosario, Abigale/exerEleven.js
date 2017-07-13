var http = require('http');
var fs = require('fs');

var httpModule = http.createServer(function(request, response){
	var readStream = fs.createReadStream(process.argv[2]);
	readStream.pipe(response);
	httpModule.listen(8000);
	
});

