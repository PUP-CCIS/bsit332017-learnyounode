var fs = require('fs');
var path = require('path');

module.exports = function(directory, ext, callback) {
  var extension = "." + ext;
  fs.readdir(directory, function(err, files) {
    if (err) {
      callback(err, null); //opt
    }
    else {
      result = [];
      files.forEach(function(data) { // array yung files 
        if (path.extname(data) == extension) {
          result.push(data);
        }
      });
      callback(null, result); // null error sa orig file
    }
  });
};
