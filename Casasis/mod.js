module.exports = function (dir, ext, callback) {
	var fs = require('fs')

	fs.readdir(dir, function (err, files) {
		if(err) return callback(err)

		files = files.filter(function (cur) {
			if(cur.split('.')[1] === ext)
				return cur;
		})
		return callback(null, files)
	})

}
