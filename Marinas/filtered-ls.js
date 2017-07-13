var fs = require('fs')
var path = require('path')
var ext = process.argv[3]
var dir = process.argv[2]

fs.readdir(dir, function(err, data){
    if(err) return console.log(err);
    for (var a = 0; a < data.length; a++){
        var b = data[a]
        var c = path.extname(b)

        if( c == '.'+ext){
            console.log(b)
        }
    }

});