var tcpPort = process.argv[2];
var net = require('net');
function data(){
    var date = new Date();
    var year = date.getFullYear() + '-';
    month = Number(date.getMonth());
    month +=1;
    var month = zero(month) + '-';
    var day = zero(date.getDate()) + ' ';
    var hour = zero(date.getHours()) +':';
    var minutes = zero(date.getMinutes());
    return year + month + day + hour + minutes;
}

function zero(stringToBeUsed){
    if(Number(stringToBeUsed)<10 ){
        stringToBeUsed = '0' + stringToBeUsed;
        return stringToBeUsed;
    }
    else
        return stringToBeUsed;
}
var server = net.createServer(function(socket){
    //console.log(socket);
    socket.end(data()+'\n');
});
server.listen(Number(tcpPort));