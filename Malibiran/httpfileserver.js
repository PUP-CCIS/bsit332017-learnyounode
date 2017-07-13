var http = require ('http');
var fs = require ('fs');


var server = http.createServer(function (request, response) //They are nodestream
{
	
	var src = fs.createReadStream(process.argv[3]);
	src.pipe(response);
});
server.listen(Number(process.argv[2]));
