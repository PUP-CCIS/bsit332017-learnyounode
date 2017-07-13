var mod = require('./mod.js')

var d = process.argv[2]
var e = process.argv[3]

mod(d, e, function(err, data) {
	if(err) return console.log(err)

	data.forEach(function (cur) {
		console.log(cur)
	})
})

