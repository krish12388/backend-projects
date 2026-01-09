const express = require("express");
const router = express.Router();
const urlModal = require("../modals/url.modal")
router.get("/",async(req,res)=>{
  const allUrls=await urlModal.find({})
  return res.render("home",{allUrls})
})


module.exports = router;

  // <!-- <% allUrls.forEach((url)=>{
  //   %>
  //   <p><a href="http://<%= url.redirectUrl%>"><%= url.shorturl%></a></p>
  //   <%
  // }) %> -->