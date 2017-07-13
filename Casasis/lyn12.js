var http = require('http')
var map = require('through2-map')
var port = process.argv[2]

var server = http.createServer(function (req, res) {
	if(req.method != 'POST')
		return res.end('Error : Not a POST request\n')

	req.pipe(map(function (data) {
		return data.toString().toUpperCase()
	})).pipe(res)
})

server.listen(port)
