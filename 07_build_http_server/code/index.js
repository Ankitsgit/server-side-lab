const http =require("http");

const fs =require("fs");

//create server using  http

// const myServer = http.createServer((req,res)=>{
//     console.log("new req received");
//     res.end("hello from server")

// }); 


// to run this server we need port number -on port number server listen 

// myServer.listen(8000,()=>{
//     console.log("server started");
// });


// Assigment -## 📂 Logging Requests (with `fs`)- this contain informatiopn about every request

//create server using  http
const myServer = http.createServer((req,res)=>{

    const log =`${Date.now()}:${req.url} New Req Recived\n`;
    fs.appendFile('log.txt',log , (err, data)=>{
          if (err) {
            console.error("Failed to write to log file:", err);
            res.statusCode = 500;
            return res.end("Internal Server Error");
          }
    });
//## 🔀 Basic Routing with `req.url`
  switch (req.url) {
  case '/':
    res.end('Home Page');
    break;
  case '/about':
    res.end('About Page');
    break;
  case '/contact':
    res.end('Contact Page');
    break;
  default:
    res.end('404 Not Found');
}

});     


myServer.listen(8000,()=>{
    console.log("server started");
});
