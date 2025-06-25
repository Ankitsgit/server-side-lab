
const express = require("express");
const path = require('path');

const cookieParser =require("cookie-parser");


const { connectToMongoDB } = require("./connect");
const URL = require("./models/url");
//export inline middlewares
const {restrictToLoggedinUserOnly,checkAuth} =require('./middlewares/auth');

// export routes to use

const urlRoute = require("./routes/url");
const staticRoute = require('./routes/staticRoute')
const userRoute =require("./routes/user");

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("MongoDB connected")
);


// telling express that using ejs
app.set("view engine" , "ejs")
app.set("views" , path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({extended:false})) //for form data
app.use(cookieParser());

// registering routes
app.use("/url",restrictToLoggedinUserOnly,urlRoute);// restrictToLoggedinUserOnly middle ware tabhi chalega jb request /url ke upar aayegi
app.use("/" ,checkAuth, staticRoute);
app.use("/user",userRoute);

// Server Side Rendering -> 
// Write html on server side -> complicated
// For ease we use EJS
app.get('/test' , async(req , res)=>{
  const allUrls = await URL.find({});
  // return res.end(`
  //   <html>
  //     <head></head>
  //     <body>
  //       <ol>
  //         ${allUrls.map( url => `<li>
  //           ${url.shortId} - 
  //           ${url.redirectURL} - 
  //           ${url.visitHistory.length}</li>`
  //           ).join("")
  //           }
  //       </ol>
  //     </body>
  //   </html>`
    
  // )
  
  return res.render('home',{
    urls: allUrls,
  })
})



// Redirect logic
app.get("/:shortId", async (req, res) => {
  try {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      },
      { new: true }
    );

    if (!entry) {
      return res.status(404).send("Short URL not found");
    }

    res.redirect(entry.redirectURL);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));

