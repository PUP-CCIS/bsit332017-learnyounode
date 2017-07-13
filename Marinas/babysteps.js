var la = 2
var sum = 0;

while(process.argv[la]){
     sum = sum+Number(process.argv[la])
         la++
}
console.log(sum)