const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const FILE_PATH = "./data.txt";

app.post("/fs-create",(req,res)=>{
    const {text} =req.body;

    fs.writeFile(FILE_PATH, text, (err)=>{
        if(err){
            return res.status(500).json({mesasge:"Error writing file"})          
        }
        res.json({message:"File created successfully"})
    })
})

app.get("/fs-read",(req,res)=>{
    fs.readFile(FILE_PATH,"utf-8",(err,data)=>{
        if(err){
            res.status(500).json({message:"error reading file"})
        }
        res.json({data})
    })
})


app.listen(5000, () => {
  console.log("Server running on port 5000");
});



// Create (Write) file
// app.post("/fs-create", (req, res) => {
//   const { text } = req.body;

//   fs.writeFile(FILE_PATH, text, (err) => {
//     if (err) {
//       return res.status(500).json({ message: "Error writing file" });
//     }
//     res.json({ message: "File created successfully" });
//   });
// });


// // Read file
// app.get("/fs-read", (req, res) => {
//   fs.readFile(FILE_PATH, "utf-8", (err, data) => {
//     if (err) {
//       return res.status(500).json({ message: "Error reading file" });
//     }
//     res.json({ data });
//   });
// });
