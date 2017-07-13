var fs = require('fs');
var pat = require('path');

var ext = process.argv[3];

file = fs.readdir(process.argv[2], function(err, files) {
  for (i = 0; i < files.length; i++) {
	if (pat.extname(files[i]) === '.' + process.argv[3]){
	console.log(files[i]);
	}
  }
});