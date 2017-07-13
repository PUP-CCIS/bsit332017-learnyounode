var net = require('net')
var port = process.argv[2]

var server = net.createServer(function (socket) {
	var date = new Date()

	function con (par) {
		return (par < 10 ? '0' : '') + par
	}

	var compdate = date.getFullYear() + '-' +
		con(date.getMonth() + 1) + '-' +
		con(date.getDate()) + ' ' +
		con(date.getHours()) + ':' +
		con(date.getMinutes())

	socket.end(compdate + '\n')
})

server.listen(port)
