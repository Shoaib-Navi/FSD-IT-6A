const express = require("express");
const multer = require("multer");

const app = express();

// basic multer setup
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("image"), (req, res) => {
  res.send("Image uploaded");
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});