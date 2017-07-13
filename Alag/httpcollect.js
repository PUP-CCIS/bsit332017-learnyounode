var http = require('http');

http.get(process.argv[2], function(request) {
	var strresult = "";
	request.setEncoding("utf8");
	request.on('data', function(data){
		strresult += data;
	});
	request.on('end', function(){
		console.log(strresult.length);
		console.log(strresult);
	});
});