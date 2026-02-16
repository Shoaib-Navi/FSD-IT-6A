const http = require('http');
const fs = require('fs');
const home = fs.readFileSync('abes.html');

const myserver = http.createServer((req, res) => {

    res.statusCode = 200;
    
    // res.setHeader('Content-Type', 'text/plain');

    res.end(home);

    // if(req.url == '/') {
    //     res.end('This is the home page');
    // }
    // else if(req.url == '/about') {
    //     res.end('This is the about page');
    // }
    // else if(req.url == '/contact') {
    //     res.end('This is the contact page');
    // }
    
    // console.log('server1');
    // res.end('Hi this is my first server');
})


myserver.listen(8000, () => {
    console.log('server is running on port 8000');
})