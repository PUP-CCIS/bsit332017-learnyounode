 var net = require('net') 

function zeroes(i) { 
if(i < 10) 
return '0'+ i 
else 
return ''+ i
} 

function now() { 
var d =new Date() 
return d.getFullYear()+'-' 
+ zeroes(d.getMonth() + 1) + '-' 
+ zeroes(d.getDate()) + ' ' 
+ zeroes(d.getHours()) + ':' 
+ zeroes(d.getMinutes()) 
} 

var server = net.createServer(function (socket) { 
socket.end(now() + '\n') 
}) 

server.listen(Number(process.argv[2])) 
