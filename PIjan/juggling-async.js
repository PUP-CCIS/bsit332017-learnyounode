var http = require('http');
var streamData = "";


for (var index = 2; index < 5; index++)
http.get(process.argv[index], function (response) {
    response.setEncoding('utf8');

    response.on('error', function (err) {
        throw error;
    });

    response.on('data', function (data) {
        streamData += data;
    });
	
	response.on('end', function (){
		console.log(streamData);
	});
})
