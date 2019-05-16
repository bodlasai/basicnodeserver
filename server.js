const http=require('http')
const hostname='127.0.0.1';
const port=5000;
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'Text/plain'});
    res.end('hello world')
}).listen(port,hostname,()=>{
    console.log(`server is running http://${hostname}:${port}`)
})
