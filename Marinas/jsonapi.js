var http = require('http')
var url = require('url')

var server = http.createServer(function(req, res){
    if(req.method == "GET" ){
        var pdurl = url.parse(req.url, true);
        var date = new Date(pdurl.query.iso)
        //console.log(pdurl.path)
         var path = pdurl.path;
         if(path.indexOf("parsetime") >= 0){
              var result = {
                  hour: date.getHours(),
                  minute: date.getMinutes(),
                  second: date.getSeconds()
              }                
         }    
         else if(path.indexOf("unixtime") >= 0){
             var result = {"unixtime" : date.getTime()}
             

         }
         res.end(JSON.stringify(result))

}
})

server.listen(process.argv[2]);