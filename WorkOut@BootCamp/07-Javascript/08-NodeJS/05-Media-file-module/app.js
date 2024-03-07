// http server
const http = require('http');
const fs = require('fs');

// static.js file
const static_contents = require('./static.js');

// creating a server
const server = http.createServer(function (request, response) {
    static_contents(request, response); // this will serve all static files automatically
});

server.listen(8920);
console.log("Running in localhost at port 8920");
