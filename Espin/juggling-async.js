var http = require('http');
var urls = [process.argv[2],process.argv[3],process.argv[4]];
var streamData = new Array(3);

for (var index=0; index < urls.length; index++) {
	http.get(urls[index], function (response) {
    response.setEncoding('utf8');
	
	 response.on('error', function (err) {
        throw error;
    });
	
	 response.on('data', function (data) {
        streamData[index] = data;
    });
    
	}).on('end', function (end){
		print();
	})
}

function print() {
	for (var count = 0; count < 3; count++){
	console.log(streamData[count]);
}
}
