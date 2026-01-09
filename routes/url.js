const express = require("express");
const nanoId = require("nano-id");
const router = express.Router();
const url = require("../modals/url.modal");
router.use(express.json());
router.post("/", async (req, res) => {
  const body = req.body;
  const originalUrl = body.url;
  if (!body) {
    return res.status(400).json({ message: "No data" });
  } else {
    const shortId = nanoId(8);
    await url.create({
      shorturl: shortId,
      redirectUrl: originalUrl,
      visithistory: [],
    });
    const result ="http://localhost:3000/url/" + shortId;
    return res
      .status(201)
      .json({ message: "Url created successfully", result });
  }
});
router.get("/:shorturl", async (req, res) => {
  const { shorturl } = req.params;

  const entry = await url.findOneAndUpdate(
    { shorturl },
    { $push: { visithistory: { timestamp: Date.now() } } },
    { new: true }
  );
  if (!entry) {
    return res.status(404).send("Short URL not found");
  }
  const redirectLink = "http://"+entry.redirectUrl;
  return res.redirect(redirectLink);
});
router.get("/analytics/:shorturl", async (req, res) => {
   const { shorturl } = req.params;

  const entry = await url.findOneAndUpdate(
    { shorturl });
    if (!entry) {
      return res.status(404).send("Short URL not found");
    }
    return res.status(200).json({"total clicks":entry.visithistory.length});
})
module.exports = router;
