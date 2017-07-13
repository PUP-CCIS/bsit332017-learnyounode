var net = require('net');
d = new Date();

 var server = net.createServer(function (socket) {
     result = d.getFullYear() + '-' +
			form(d.getMonth() + 1) + '-' +
			form(d.getDate()) + ' ' +
			form(d.getHours()) + ':' +
			form(d.getMinutes()) + '\n';
		socket.end(result);
     })
     server.listen(process.argv[2]);
	 
function form(i){
	if (i < 10)
		return '0' + i;
	else{
		return i;
	}
}

//console.log(d.getMonth());