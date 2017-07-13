var http = require('http');
var concatStream = require ('concat-stream');

	var urls = []; //Nagiiba iba ang index order
	var print = [];
	var ctr=0;
	process.argv.slice(2).forEach(function (url)
	{
		urls.push(url);
	});

	urls.forEach (function (element, index)
	{
		
		http.get(element, function (response) {
			response.setEncoding('utf8');

			response.on('error', function (err) {
				throw error;
			});

			response.pipe(concatStream(function (data)
			{
				//console.log (data.length);
				print[index] = data;
				ctr++;
				if (ctr === urls.length)
				{
					for (var i = 0; i < urls.length; i++)
					{
						console.log(print[i]);
					}
				}
				
			}));
			
			
			
			
			
			
			
			
			
		}).on('error', function (err) {
			throw err;
			
			
		});
	
	});
	
	
	
	