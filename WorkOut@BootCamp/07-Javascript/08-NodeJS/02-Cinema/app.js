const http = require('http');
const fs = require('fs');

const contentTypeMapping = {
    '/': { path: './views/movies.html', type: 'text/html' },
    '/theatres': { path: './views/theatres.html', type: 'text/html' },
    '/movies/new': { path: './views/new-movies.html', type: 'text/html' },
    '/stylesheets/style.css': { path: './stylesheets/style.css', type: 'text/css' },
    '/images/bullet-train-2022.jpg': { path: './images/bullet-train-2022.jpg', type: 'image/jpg' },
    '/images/evil-dead-rise-2023.jpg': { path: './images/evil-dead-rise-2023.jpg', type: 'image/jpg' },
    '/images/smile-2022.jpg': { path: './images/smile-2022.jpg', type: 'image/jpg' },
    '/images/davao-theatre.jpg': { path: './images/davao-theatre.jpg', type: 'image/jpg' },
    '/images/imax-davao.jpg': { path: './images/imax-davao.jpg', type: 'image/jpg' },
    '/images/gmall-digos.jpg': { path: './images/gmall-digos.jpg', type: 'image/jpg' }
};


const server = http.createServer(function(request, response) {
    console.log(`Client request URL: ${request.url}`);

    const resource = contentTypeMapping[request.url];

    if (resource) {
        fs.readFile(resource.path, function(errors, contents) {
            response.writeHead(200, {'Content-Type': resource.type});
            response.write(contents);
            response.end();
        });
    } else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});

const port = 7890;
server.listen(port);

console.log(`Running at localhost:${port}`);
