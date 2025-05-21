const http=require('http');
const fs=require('fs');
const path=require('path');

const server=http.createServer((req,res)=>{
    const filepath=path.join(__dirname,req.url);

    fs.readFile(filepath,(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text\plain'})
            res.end('404 Not Found')
        }
        else{
            res.writeHead(200,{'Content-Type':'text\html'})
            res.end(data);
        }
    })
})
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`)

})

