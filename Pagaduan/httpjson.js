var http = require('http');
var url = require('url');

function compileTime(time){
    return{
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime (time){
      return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res){
    var content = url.parse(req.url, true);
    var time = new Date(content.query.iso);

        if(/^\/api\/parsetime/.test(req.url))
            var output = compileTime(time);
            else if(/^\/api\/unixtime/.test(req.url))
                output = unixtime(time);

        if(output){
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(output));
            }else {
                res.writeHead(404);
                res.end();
        }
});

server.listen(Number(process.argv[2]));