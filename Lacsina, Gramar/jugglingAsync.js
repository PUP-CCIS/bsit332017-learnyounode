var http = require('http');
var bl = require('bl');
var content = [];
var count = 0;

function print(){
	for (var i = 0 ; i<3 ; i++)
		console.log(content[i]);
}

function getContent(index){
	http.get(process.argv[2 + index], function(response){
		response.pipe(bl(function(err, data){
			if (err)
				console.log(err);

			content[index] = data.toString();
			count++;

			if (count ==3)
				print();
		}));
	});
}

for(var i = 0; i<3; i++)
	getContent(i);