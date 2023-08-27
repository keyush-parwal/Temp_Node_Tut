const fs=require('fs')

console.log("Start");

const first=fs.readFileSync('./content/first.txt','utf8')
const second=fs.readFileSync('./content/second.txt','utf8')

// console.log(first,second);
// console.log(second);

fs.writeFileSync('./content/result-sync',`here is the result : ${first},${second}`)

console.log("Done with this task");
console.log("Starting the next one");