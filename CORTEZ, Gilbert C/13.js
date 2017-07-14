var http=require('http');
var url=require('url');
var server=http.createServer(function(req,res){
	if(req.method=='GET'){
		var parsedUrl=url.parse(req.url,true);
		var path=parsedUrl.path;
		var d=new Date(parsedUrl.query.iso)
		
		if(path.indexOf("parsetime")>=0){
			var result={
				hour: d.getHours(),
				minute: d.getMinutes(),
			second: d.getSeconds() }
		res.end(JSON.stringify(result))}
		if(path.indexOf("unixtime")>=0){
			var result={"unixtime":d.getTime()}
		res.end(JSON.stringify(result))}
			}
		})
	server.listen(process.argv[2]);