var myFile=require('./6-2.js');
var directory=process.argv[2];
var extension=process.argv[3];
myFile(directory,extension, function(err,response){
	for(var i=0; i<response.length;i++){
		console.log(response[i]);
	}
});
	


