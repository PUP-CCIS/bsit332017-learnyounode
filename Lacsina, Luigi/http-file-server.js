var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    var stream = fs.createReadStream(process.argv[3])
    //console.log(stream);

    stream.pipe(res);
    
});
server.listen(Number(process.argv[2]));