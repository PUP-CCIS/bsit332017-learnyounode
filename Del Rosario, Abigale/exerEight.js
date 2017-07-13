var http = require('http');
var concat = require('concat-stream');

http.get(process.argv[2], function (request){
	request.setEncoding('utf8');
	
	request.on('error',function(err){
		console.log('may error pa');
	});
	
	var ayanNa = concat(function(data){
	console.log(data.split('').length);
    console.log(data);
	});
	request.pipe(ayanNa);
});