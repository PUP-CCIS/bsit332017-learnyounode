var net = require('net');

var methodModule = net.createServer(function listener (socket){
	socket.end(socket.format('YYYY-MM-DD HH:mm')+'\n');
	
});
methodModule.listen(8000);


