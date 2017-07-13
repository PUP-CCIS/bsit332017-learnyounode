var fs = require('fs');

fs.readdir(process.argv[2], function callback(err, list) {
	if (err) console.log(err);
	
	var pangFilter = process.argv[3];
	var filteredFiles=[];
	
	//console.log(list);
	//console.log(pangFilter);
	
	list.forEach(function (file){
		var dissectedFile = file.split('.');
		//console.log(dissectedFile);
		
		if (dissectedFile[1] === pangFilter) filteredFiles.push(file);
	});
	filteredFiles.forEach(function(file){
		console.log(file);
		//console.log('\n');
	});
});