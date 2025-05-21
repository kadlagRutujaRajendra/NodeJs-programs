const http= require('http');
const fs=require('fs');
const url=require('url');

const app=http.createServer((req,res)=>{
    if(req.method==='GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(`
          <form method="post">
          File1: <input type="text" name="file1"/><br>
          File2: <input type="text" name="file2">
          <button type="submit">Submit</button>
          </form>
        `);
        
    }
    else if(req.method==='POST'){
        let body='';
        req.on('data',chunk=>{body+=chunk});
        req.on('end',()=>{
            const parseData= new URLSearchParams(body);
            const file1=parseData.get('file1');
            const file2=parseData.get('file2');
           
            fs.readFile(file1,'utf-8',(err,data)=>{
              if(err){
                res.writeHead(400,{'Content-Type':'text/plain'});
                res.end(`error reading file1:${appendErr.message}`);
              }
              else{
                fs.appendFile(file2,data,appendErr=>{
                    if(appendErr){
                        res.writeHead(400,{'Content-Type':'text/plain'});
                        res.end(`error appending file2:${appendErr.message}`);
                    }else{
                        res.writeHead(200,{'Content-Type':'text/plain'});
                        res.end('content successfully appended to second file');
                    }
                });
              }

            });
            
        });

    }else{
        res.writeHead(405,{'Content-Type':'text/plain'});
        res.end('method not allowed');
    }


});
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`)
})
