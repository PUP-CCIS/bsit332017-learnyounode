var fs = require('fs')
var path = require('path')
var extN = process.argv[3]
var dirN = process.argv[2]

module.exports = function(dirN, extN, callback){
    var array = [];

fs.readdir(dirN, function(err, data){
    if(err) return callback(err);
    for (var a = 0; a < data.length; a++){
        var b = data[a]
        var c = path.extname(b)

        if( c == '.'+extN){
            array.push(b);
        }
    }
callback(null, array)
});
}
