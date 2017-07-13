var http = require ("http");
var firstUrl = process.argv[2];
var secondtUrl = process.argv[3];
var thirdUrl = process.argv[4];

var fir = "";
var sec = "";
var thi = "";

http.get(firstUrl, function callback (response) {
	response.setEncoding("utf8");
	response.on("data", function(data){
	fir = fir + data;
	});
	response.on("end", function(){
		console.log(fir);

http.get(secondtUrl, function callback (response) {
	response.setEncoding("utf8");
	response.on("data", function(data){
	sec = sec + data;
	});
	response.on("end", function(){
		console.log(sec);

http.get(thirdUrl, function callback (response) {
	response.setEncoding("utf8");
	response.on("data", function(data){
	thi = thi + data;
	});
	response.on("end", function(){
		console.log(thi);
	});
});


	});
});

	});
});