var net = require('net');
var moment = require('moment');

var port = process.argv[2];

var server = net.createServer(socket=>{
	var time = moment().format('YYYY-MM-DD HH:mm');
	socket.write(time);
	socket.end('\n');
});

server.listen(port);