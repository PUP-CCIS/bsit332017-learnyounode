var url = require('url');
var http = require('http');

var port = parseInt(process.argv[2]);

var server = http.createServer(function (req,res) {

var urlparam = url.parse(req.url, true);

if(req.url.match(/\/api\/unixtime/)){
    var datum = new Date(urlparam.query.iso);

    var objt = {
        unixtime: datum.getTime()
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(objt));
}else if(req.url.match(/\/api\/parsetime/)){
    var datum = new Date(urlparam.query.iso);

    var objt = {
        hour: datum.getHours(),
        minute: datum.getMinutes(),
        second: datum.getSeconds()
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(objt));
}else{
    res.writeHead(404);
    res.end();
}

});

server.listen(port);