var http = require('http');
var bl = require('bl');
var content = [];
var count = 0;

function output(){
	for (var i = 0 ; i < 3 ; i++)
		console.log(content[i]);
}
function getContent(index){
	http.get(process.argv[2 + index], function(response){
		response.pipe(bl(function(err, data){
			if (err)
				throw err;

			content[index] = data.toString();
			count++;

			if (count == 3)
				output();
		}));
	});
}

for(i = 0; i < 3; i ++)
	getContent(i);