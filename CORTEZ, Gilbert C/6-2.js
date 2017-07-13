

var fs=require('fs');
var Array=[];
module.exports=function(directory,extension,callback){


	fs.readdir(directory,function(err, list){
	
	for(var i=0;i<list.length;i++){
		
		if(list[i].split('.')[1]==extension){
			Array+=list[i]
		}
	}
});
callback(null,Array);
}
