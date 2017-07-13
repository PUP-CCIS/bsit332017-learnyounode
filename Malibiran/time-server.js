var net = require ('net');

function singleDigit(i)
	{
		if (i < 10)
		{
			return '0' + i;
		}
		else
			return i;
	}
	function rightnow()
	{
		var petsa = new Date();
		//console.log ('date', petsa.getDate())
		return petsa.getFullYear() + '-' + singleDigit(petsa.getMonth() + 1) + '-' + singleDigit(petsa.getDate()) + ' ' + singleDigit(petsa.getHours()) + ':' + singleDigit(petsa.getMinutes());
	}

var server = net.createServer(function (socket)
{
	socket.end(rightnow() + '\n');
});
server.listen(Number(process.argv[2]));


