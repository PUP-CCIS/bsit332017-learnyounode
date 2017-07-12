var fs = require('fs')
var dir = process.argv[2]

fs.readFile(dir, function (err, file) {
	if(err) return console.log(err)
	console.log(file.toString().split('\n').length - 1)
})
