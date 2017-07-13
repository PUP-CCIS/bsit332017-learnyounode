var lslib = require('./6-2');

var dirname = process.argv[2];
var ext = process.argv[3];

lslib(dirname, ext, function(err, files) {
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});
/*var myFile=require('./6-2.js');
var directory=process.argv[2];
var extension=process.argv[3];
myFile(directory,extension, function(err,response){
	for(var i=0; i<response.length;i++){
		console.log(response[i]);
	}
});
	
*/

