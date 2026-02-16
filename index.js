const fs = require('fs');
const os = require("os");
// import http from 'http';
// const PORT=8000;

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     const url = req.url;
//     if (url === '/') {
//         res.write(' <h1>Welcome to Homepage </h1>');
//         res.write('<img width="200px" height="200px" src="https://manage.collnod.com/Upload/Content/web_img_0_1_9_2023_12_42_12.gif" alt="Placeholder Image">');
//         res.end();
//     }
//     else if (url === '/contact') {
//         res.write(' <h1>Welcome to contact us page</h1>');
//         res.end();
//     }
//     else if(url==='/class'){
//         res.write(' <h1>Hello, welcome to the hi page!</h1>');
//         res.end();
//     }
//     else {
//         res.write(' <h1>404 Not Found</h1>');
//         res.end();
//     }
// }).listen(PORT, function () {
//     console.log(`server start at port ${PORT}`);
// });



// fs.writeFileSync("./it-a.txt","we are student of it");
// const result = fs.readFileSync("./it-a.txt","utf-8");
// console.log(result);




// fs.writeFile("./ad.txt","code is very good time pass",()=>{ });

// fs.readFile("./ad.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error",err);
//     }else{
//         console.log(result);        
//     }
// })

// fs.appendFileSync("./ad.txt"," and i am happy");

// fs.appendFile("./ad.txt","code and good",(err,result)=>{
//     if(err){
//         console.log("error",err);   

//     }else{
//         console.log(result);    
//     }
// })



// fs.cpSync("a1.txt","b1.txt");  //sync
//  fs.copyFile("a1.txt","b1.txt",()=>{ }); 

//  fs.unlinkSync("./ad.txt");


// const data = fs.readFileSync("data.json","utf-8");
// const parseData = JSON.parse(data);
// console.log(parseData);


// const newData = [
//   { id: 1, name: "Gokddddddddddddddu" },
//   { id: 2, name: "Vegssta" }
// ];

// fs.writeFileSync("data.json", JSON.stringify(newData, null,5));


// console.log("plateform",os.platform()); 
// console.log("Architecture",os.arch()); 
// // console.log("CPU",os.cpus()); 
// console.log("userInfo",os.userInfo()); 
// console.log("Free main memory",os.freemem());
// console.log("Total main memory",os.totalmem()); 
console.log("uptime",os.uptime()); 

