const http =require("http");

const fs =require("fs");

const url  = require("url");

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
    const myUrl= url.parse(req.url);
    console.log(myUrl);
    fs.appendFile('log.txt',log , (err, data)=>{
          if (err) {
            console.error("Failed to write to log file:", err);
            res.statusCode = 500;
            return res.end("Internal Server Error");
          }
    
//## 🔀 Basic Routing with `req.url`
  switch (myUrl.pathname) {
  case '/':
    res.end('Home Page');
    break;
  case '/about':
    const username =myUrl.query.myname;
    res.end(`hi ,${username}`);
    break;
  case '/search':

  const search = myUrl.query.search_query;
    res.end(`here your result for `+ search);
    break;
  default:
    res.end('404 Not Found');
}

});  

});



myServer.listen(8000,()=>{
    console.log("server started");
});
