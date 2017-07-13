var http = require('http');
var bl = require('bl');
var counter = 0;
var ans = [];

function printAnswers(){
    for(var x = 0; x < 3; x++){
    console.log(ans[x]);
    }
}

function httpGet (index){
    http.get(process.argv[2 + index], function (response){
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
        }
          
            results[index] = data.toString();
            counter++;
            
        if(counter === 3){
            printResults();
      }
    }))
 })
}
for(var y = 0; y < 3; y++){
    httpGet(y);
}