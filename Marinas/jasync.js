var http = require("http")
var u1=process.argv[2];
var u2=process.argv[3];
var u3=process.argv[4];

var d1 ="";
var d2 ="";
var d3 ="";



http.get(u1, function callback (response){
    response.setEncoding("utf8")
    response.on("data", function(data){
        d1 = d1 + data;
    })
    response.on("end",function(){
        console.log(d1.toString());
    })

});


http.get(u2, function callback (response){
    response.setEncoding("utf8")
    response.on("data", function(data){
        d2 = d2 + data;
    })
    response.on("end",function(){
        console.log(d2.toString());
    })

});


http.get(u3, function callback (response){
    response.setEncoding("utf8")
    response.on("data", function(data){
        d3 = d3 + data;
    })
    response.on("end",function(){
       
        console.log(d3.toString());
    })

});