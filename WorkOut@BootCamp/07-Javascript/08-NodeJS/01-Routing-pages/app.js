const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
    console.log(`Client request url: ${request.url}`);

    if (request.url === '/') {
        fs.readFile('welcome.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/village88') {
        fs.readFile('village88.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/training/new') {
        fs.readFile('training.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
})

const port = 6543;

server.listen(port);

console.log(`Running at localhost:${port}`);
