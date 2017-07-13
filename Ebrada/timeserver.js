var net = require('net')
var port = process.argv[1]
var finaldate = "";

var date= new Date();
var year= date.getFullYear();
var month= zeroFill(date.getMonth());
var day = zeroFill(date.getDate());
var hour = date.getHours()
var min= date.getMinutes()
finaldate= year + "-" + month + "-" + day +" " + hour + ":" + min;

var server= net.createServer(function listener(socket){
socket.end(finaldate);
})
server.listen(port);