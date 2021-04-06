const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        
        res.end(' welcome to home page')
    }
    else if(req.url==='/about'){
        res.end('here is our history')
    }
    else res.end(`
        <h1>OOps!</h1>
        <p>we cabbot find the page</p>
        <a href="/"> back home</a>
    `)
})

server.listen(5000)
