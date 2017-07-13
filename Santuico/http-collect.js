var http = require('http');
var concatStream = require('concat-stream');

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');

    response.on('error', function (err) {
        throw error;
    });

    response.pipe(concatStream(function (data) {
        console.log(data.length);
        console.log(data);
    }));
}).on('error', function (err) {
    throw err;
});