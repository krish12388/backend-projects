const express = require("express");
const Url = require("./routes/url")
const mongoose = require("mongoose")
const app= express();

mongoose.connect("mongodb://localhost:27017/urlshortner").then(()=>console.log("Connected to MongoDB")).catch((err)=>console.log(err))

app.use(express.json())
app.use("/url",Url)
  
app.listen(3000,()=>console.log("Server is running on port 3000"))