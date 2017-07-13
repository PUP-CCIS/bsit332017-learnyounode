var fs = require('fs')
var dir = process.argv[2]
var ext = process.argv[3]

fs.readdir(dir, function (err, file) {
	file.forEach(function (cur) {
		if(cur.split('.')[1] === ext)
			console.log(cur);
	})
})
