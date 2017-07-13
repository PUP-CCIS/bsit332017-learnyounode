var map = require('through2-map');
var http = require('http');

var server = http.createServer( function(req, res) {
  if (req.method === 'POST') {
    var chunk = req.pipe( map( function (data) { // incoming post body
      return data.toString().toUpperCase(); //converted
    }));
	chunk.pipe(res);  // outcome
  }
});

server.listen(process.argv[2]);