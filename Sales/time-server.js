var net = require('net');

function zeroFilled(x) {
    return(x < 10 ? '0' : '') + x
}

function present() {
    var date = new Date()
    return date.getFullYear() + '-' +
    zeroFilled(date.getMonth() + 1) + '-' +
    zeroFilled(date.getDate()) + ' ' +
    zeroFilled(date.getHours()) + ':' + 
    zeroFilled(date.getMinutes())
}

var server = net.createServer(function (socket){
    socket.end(now() + '\n')
}) 
server.listen(Number(process.argv[2]))