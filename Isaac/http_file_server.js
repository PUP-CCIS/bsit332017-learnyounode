
var http =require('http');
	varfs=require('fs');
	
	var file =process.argv[3];
	var port =process.argv[2];
	
	var server =http.createServer(function (req, res) {
	
	varfsStream=fs.createReadStream(file,{encoding:'utf8' });
	fsStream.pipe(res);
	});
	
	server.listen(port);
