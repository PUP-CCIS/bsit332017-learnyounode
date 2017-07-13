var http = require('http');
var bl = require('bl');
var ctr= 0;
var result = [];

function Results() {
    for (var i = 0; i < 3; i++) {
        console.log(result[i]);
    }
}
function httpGet(index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }
            result[index] = data.toString();
            ctr++;
            if (ctr == 3) {
                Results();
            }
        }));
    });
}
for (var i = 0; i < 3; i++) {
    httpGet(i);
}