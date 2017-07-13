var http = require('http')

var aData = "";

http.get(process.argv[2], function callback (response){
    response.setEncoding('utf8')
    response.on("data", function(data){
        aData = aData + data;
    })
    response.on("end",function(){
        console.log(aData.length);
        console.log(aData);
    })

});