var http = require('http');
var concat = require ('concat-stream');
var urls = [];
var urls2 = [];

process.argv.slice(2).forEach(function(urlss){
	urls.push(urlss);
	
});

urls.forEach(function(urlss, number){
	http.get(urlss,function(request){
		request.setEncoding('utf8');
		request.pipe(concat(function(respond){
		respond = urls2[number];
		
		var resNumber = 0;
		resNumber++;
			if(resNumber === urls.length){
				console.log(urls2.join('\n'));
			}
		
		
		}))
	})
})


