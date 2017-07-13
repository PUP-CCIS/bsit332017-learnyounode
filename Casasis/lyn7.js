var http = require('http')
var url = process.argv[2]

http.get(url, function (response) {
	response.setEncoding('utf8').on('data', console.log).on('error',
		console.error)
}).on('error', console.error)
