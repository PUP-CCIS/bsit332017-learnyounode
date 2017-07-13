var fs = require('fs');

var str = fs.readFile(process.argv[2], 'utf8', function callback(err, data){
	if (err) console.log(err);
	
	var arr = []
	arr = data.split('\n');
	console.log(arr.length-1);
	});