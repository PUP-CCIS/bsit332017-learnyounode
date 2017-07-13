
var http = require('http');

var url = process.argv.slice(2);

//console.log(url);

var strings = [];

for (i = 0; i<url.length; i++){
	strings[i] = null; 			//lagyan ng laman
}

for (i = 0; i < url.length; i++){
	
	http.get(url[i], function(request){
		var collect = "";
		var count = 0;
		
		request.setEncoding("utf8");
		request.on('data', function(data){
			collect += data;
		});
		request.on('end', function(){
			strings[i] = collect;
			console.log(strings[i]);
		});
	});
}


