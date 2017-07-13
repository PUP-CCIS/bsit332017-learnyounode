var http = require('http')
var url = require('url')
var port = process.argv[2]

function time(date) {
	return {
		hour : date.getHours(),
		minute : date.getMinutes(),
		second : date.getSeconds()
	}
}

function unix(date) {
	return {
		unixtime : date.getTime()
	}
}

var server = http.createServer(function (req, res) {
	var urlIn = url.parse(req.url, true)
	var date = new Date(urlIn.query.iso)
	var out

	if(urlIn.pathname === '/api/parsetime')
		data = time(date)
	else if(urlIn.pathname === '/api/unixtime')
		data = unix(date)

	if(data) {
		res.writeHead(200, { 'content-type' : 'application/json' })
		res.end(JSON.stringify(data));
	}

	else {
		res.writeHead(404)
		res.end()
	}
})

server.listen(port)
