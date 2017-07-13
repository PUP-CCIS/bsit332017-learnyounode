var bl = require('./bl/bl.js')
var http = require('http')
var url = process.argv[2]

http.get(url, function (response) {
	response.pipe(bl(function (err, data) {
		if(err) return console.log(err)

		data = data.toString()

		console.log(data.length)
		console.log(data)
	}))
}).on('error', console.error)
