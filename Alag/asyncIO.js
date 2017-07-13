var fs = require ('fs');

file = fs.readFile(process.argv[2], function (err, stream){
	console.log(stream.toString().split('\n').length - 1);
	});