const fs=require('fs')

console.log("Start");
fs.readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return 
    }
    const first=result;
    fs.readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return 
        }
        const second=result;
        fs.writeFile('./content/result-async.txt',
        `here is the result : ${first} , ${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return 
            }
            // console.log(result);
            console.log("Done with this task");
        })
    })
})

console.log("Starting the next one");

