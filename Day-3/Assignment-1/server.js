const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("welcome to Home Page");
    }else if(req.url==="/aboutus"){
        res.setHeader("Content-type",'text/html');
        res.end("<h3>welcome to About Page</h3>");
    }
    else if(req.url==="/contactus"){
        res.setHeader("Content-Type","text/html");
        res.end("contact us at <a href='https://www.masaischool.com' target='_blank'>www.masaichool.com</a>")
    }
    else if(req.url==="/index"){
        let index=fs.readFile("./index.js","utf-8",(err,data)=>{
            if (err) {
                res.end("error when reading this file");
            }else{
                res.end(data);
            }
        })
    }
    else {
        res.end("404 Not Found");
    }
})
server.listen(3010,()=>{
    console.log("server is running on http://localhost:3010")
})