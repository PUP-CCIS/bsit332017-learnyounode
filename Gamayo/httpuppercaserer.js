var http = require('http');
var port = process.argv[2];

var server = http.createServer(function(request, response) {
console.log(request);
var body = [];
var bodyString;

request.on('data', function(data) {
    body.push(data);
});

request.on('end', function(){
    bodyString = body.join("").toUpperCase();

    response.write(bodyString);
    response.end();
});
}); server.listen(Number(port));