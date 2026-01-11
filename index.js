const express = require("express");
const path = require("path")
const urlRoute = require("./routes/url")
const urlModal = require("./modals/url.modal")
const mongoose = require("mongoose")
const staticRouter = require("./routes/staticRouter")
const app= express();
app.set("view engine","ejs")
app.set("views",path.resolve(__dirname,"views"))
mongoose.connect("mongodb://localhost:27017/urlshortner").then(()=>console.log("Connected to MongoDB")).catch((err)=>console.log(err))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use("/url",urlRoute)
app.use("/",staticRouter)
app.get("/test", async (req,res)=>{
  const allUrls=await urlModal.find({})
  res.render("home",{allUrls})

})
//server side rendering =>{ejs,pug,handlebars}

app.listen(3000,()=>console.log("Server is running on port http://localhost:3000"))





//// buffer code

    // res.end(`<html>
    //   <head>
    //     <title>Test</title>
    //   </head>
    //   <body>
    //     <ul>
    //       <li>${allUrls.map((url)=>` <a href="https://${url.redirectUrl}">${url.shorturl}</a> 
    //       - <a href="https://${url.redirectUrl}">${url.redirectUrl}</a> 
    //       -${url.visithistory.length}`)
    //       .join("<li></li>")}</li>
    //     </ul>
    //   </body>
    // </html>`)