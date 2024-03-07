const http = require('http');
const fs = require('fs');

function serveStaticFile(request, response) {
    const contentTypeMapping = {
        '/': { 'path': './views/index.html', 'type': 'text/html'},
        '/profile.html': { 'path': './views/profile.html', 'type': 'text/html'},
        '/stylesheets/style.css': { 'path': './stylesheets/style.css', 'type': 'text/css'},
    }

    const resource = contentTypeMapping[request.url];

    if (resource) {
        fs.readFile(resource.path, function (errors, contents) {
            response.writeHead(200, { 'Content-Type': resource.type});
            response.write(contents);
            response.end();
        })
    } else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
}

module.exports = serveStaticFile;
