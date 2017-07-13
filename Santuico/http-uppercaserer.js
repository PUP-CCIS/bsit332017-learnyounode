var http = require('http'),
    map = require('through2-map'),
    port = process.argv[2],
    server;

server = http.createServer(function (request, response) {
    if (request.method == 'POST') {
        request.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(response);
    }
});

server.listen(port);