var http = require('http');
var concatStream = require('concat-stream');
var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]
var data1="";
var data2="";
var data3="";
http.get(url1, function callback (response){

	response.setEncoding('utf8')
	response.on('data', function (data) {
		data1 = data1 + data;
	})

	response.on('end', function(){
		console.log(data1)

http.get(url2, function callback (response){

	response.setEncoding('utf8')
	response.on('data', function (data) {
		data2 = data2 + data;
			})

	response.on('end', function(){
		console.log(data2)

http.get(url3, function callback (response){

	response.setEncoding('utf8')
	response.on('data', function (data) {
		data3 = data3 + data;
			})

	response.on('end', function(){
		console.log(data3)

	})
});//url3 
})

});//url2

})
});//url1