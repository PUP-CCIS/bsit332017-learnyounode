var http = require('http');

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');

    response.on('error', function (err) {
        throw error;
    });

    response.on('data', function (data) {
        console.log(data);
    });
	
	/*response.on ('end', function (end)
	{
		console.log ('response ended');
	});*/
}).on('error', function (err) {
    throw err;
});