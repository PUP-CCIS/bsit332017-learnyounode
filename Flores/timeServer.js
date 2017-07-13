var net = require ('net')
var port = process.argv[2]
function makeZero(i)
	{
		if (i<10)
			return '0'+i
		else 
			return ""+i
	}




function getFormattedDate(){
	var today = new Date()
	return today.getFullYear() + '-' +
    makeZero(today.getMonth()+1 ) + '-' + 
	makeZero(today.getDate()) + ' ' +
	makeZero(today.getHours())+ ':' +
	makeZero(today.getMinutes())
	
}
	
	var server = net.createServer(function(socket){
	
	socket.end(getFormattedDate() + '\n')
	
})

server.listen(Number(process.argv[2]))