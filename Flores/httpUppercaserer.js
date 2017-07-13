var http = require('http')
var throughMap = require('through2-map')
var server = http.createServer(function(req, res){
if (req.method!=='POST'){
	return res.end ('POST only')
}
req.pipe(throughMap(function(chunk){
	return chunk.toString().toUpperCase()
	
})).pipe(res)
})

server.listen(Number(process.argv[2]))