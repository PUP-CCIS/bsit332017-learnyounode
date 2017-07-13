var http = require("http");
var Array = [process.argv[2], process.argv[3], process.argv[4]];

var urlResults = ["","",""];
var allDoneCount = 0;

Array.forEach(function (url) {

http.get(url, function (resp) {
resp.on("data", function (data) {
if (url === Array[0]) {
urlResults[0] += data.toString();
} else if (url === Array[1]) {
urlResults[1] += data.toString();
} else {
urlResults[2] += data.toString();
}
})

resp.on("end", function () {
allDoneCount++;
if (allDoneCount === 3) {
console.log(urlResults[0]);
console.log(urlResults[1]);
console.log(urlResults[2]);
}
})

resp.on("error", function (err) {
console.log(err);
})

}).on("error", function (err) {
console.log(err);
})
})