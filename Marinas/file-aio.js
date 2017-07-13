var fs = require('fs');
var filepath = process.argv[2];


fs.readFile(filepath,function callback( err , data){
    if(err){ 
        return err;
    }
     var rf= data.toString().split('\n').length
     console.log(rf-1)
});

