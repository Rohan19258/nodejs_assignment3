const fs=require('fs')
const http=require('http')

const server=http.createServer()
server.on("request",(req,res)=>{
   /* fs.readFile("index.html",(err,data)=>{
        if(err)return console.error(err);
        res.end(data);
    })*/
    const stream=fs.ReadStream("index.html")
    stream.pipe(res)
  
})
server.listen(8000,console.log("server is listening on port 8000"))