var http = require('http');
var fs = require('fs');

//console.log(process.argv[3].toString);

var server = http.createServer( function (req, res){
	fs.createReadStream(process.argv[3]).pipe(res)
	});
	
server.listen(process.argv[2]);