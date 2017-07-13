var net = require("net");
var port = process.argv[2];
var date = new Date();

var yr = date.getFullYear();
var mth = date.getMonth() +1;

var server = net.createServer(function listener(socket){
	socket.end(date2)
});

server.listen(port);

if (mth < 10) {
	mth = "0" + mth
};
var dy = date.getDate();
if (dy < 10 ) {
	day = "0" + dy
};
var hr = date.getHours();
if (hr < 10 ) {
	hour = "0" + hour
};
var min = date.getMinutes();
if (min < 10 ) {
	min = "0" + min
};

var date2 = yr + "-" 
+ mth + "-" + dy + " " 
+ hr + ":" + min + "\n";
