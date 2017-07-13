var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    fileName = process.argv[3],
    server;

server = http.createServer(function (request, response) {
    fs.createReadStream(fileName).pipe(response);
});
server.listen(4000);

server.listen(port);