var myModule = require('./mymodule.js')

var ext = process.argv[3]
var dir = process.argv[2]

var cb = function(err,data){
    if(err) return err;

    for (var e = 0; e < data.length; e++){
      console.log(data[e]);    
}
}

myModule(dir,ext,cb)