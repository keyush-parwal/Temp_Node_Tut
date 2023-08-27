const http=require('http')

const server=http.createServer((req,res)=>{

    if(req.url === '/'){
        res.end("Welcome to home page")
    }

    if(req.url === '/about'){
        res.end("Here is our short history")
    }
    
    res.end(`
    <h1> OOPS! </h1>
    <p> we cant seem to find page that you are looking for </p>
    <a href="/">Back Home</a>
    `);
})

server.listen(5000);

