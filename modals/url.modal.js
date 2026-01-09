const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shorturl:{
    type:String,
    unique:true,
  },
  redirectUrl:{
    type:String,
  },
  visithistory:[{
    timestamp:{type:Number}
  }],
},{timestamps:true});
const  url= mongoose.model("Url",urlSchema);

module.exports = url;