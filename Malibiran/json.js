var url = require('url')
var http = require('http')

function isoToHourMinSec(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  }
}

function isoToUnix(date) {
  return {
    unixtime: date.getTime()
  }
}

var routes = {
  '/api/parsetime': isoToHourMinSec,
  '/api/unixtime': isoToUnix,
}

var server = http.createServer(function(req, res) { 
  var urlObj = url.parse(req.url, true)
  var route = routes[urlObj.pathname]

  if(!route || !urlObj.query || !urlObj.query.iso){
    res.writeHead(404, {'Content-Type': 'application/json'})
    return res.end('{error:"no such route"}')
  }

  var date = new Date(urlObj.query.iso)
  var result = route(date)

  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify(result))
})

server.listen(Number(process.argv[2]));