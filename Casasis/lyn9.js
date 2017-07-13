var bl = require('bl')
var http = require('http')
var url = [process.argv[2], process.argv[3], process.argv[4]]

for(x = 0; x < 3; x ++) {
	http.get(url[x], function (response) {
		response.pipe(bl(function (err, data) {
			if (err) return console.error

			data = data.toString()

			console.log(data)
		}))
	})
}
