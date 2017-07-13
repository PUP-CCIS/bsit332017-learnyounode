var http = require('http');

http.get(process.argv[2], function (response){
	response.setEncoding('utf8');
	
	response.on('error', function (err) {
		throw error;
	});
	
	var dataString = '';
	
	response.on('data', function (data) {
		dataString+= data;
	});
	
	response.on('end', function () {
		console.log(dataString.length);
		console.log(dataString);
	});
	
});.on('error', function (err) {
	throw error;
});