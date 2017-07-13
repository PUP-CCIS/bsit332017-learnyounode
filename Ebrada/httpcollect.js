
/*var http = require('http');
var concatStream = require('concat-stream');

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');

    response.on('error', function (err) {
        throw error;
    });

    response.pipe(concatStream(function (data) {
        console.log(data.length);
        console.log(data);
    }));
}).on('error', function (err) {
    throw err;
});
*/

var http = require('http');
var concatStream = require('concat-stream');
var url = process.argv[2]
var allData="";
http.get(url, function callback (response){

response.setEncoding('utf8');
response.on('data', function (data) {
allData = allData+data;
})

response.on('end', function(){
console.log(allData.length)
console.log(allData)
})
})