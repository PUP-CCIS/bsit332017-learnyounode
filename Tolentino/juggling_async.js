var http = require('http');
var bl = require('bl');
var async = require('async');

var urls = process.argv.slice(2);

async.eachSeries(urls, (url,callback) => {
	http.get(url, response => {
		response.pipe(bl((err,data) => {
			if(err) return callback(err);
			data = data.toString();
			console.log(data);
			callback();
		}));
	});
});