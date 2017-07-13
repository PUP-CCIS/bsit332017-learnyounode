var total = 0

process.argv.slice(2).forEach(function (cur) {
	total += Number(cur)
})

console.log(total)
