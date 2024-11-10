var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res) {

    var filePath = path.join(__dirname, req.url === '/' ? 'html/index.html' : req.url);

    
    var extname = path.extname(filePath).toLowerCase();
    var contentType = 'text/html';

    if (extname === '.css') contentType = 'text/css';
    if (extname === '.js') contentType = 'application/javascript';

    
    fs.readFile(filePath, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('<h1>File Not Found</h1>');
            return res.end();
        }

        res.writeHead(200, {'Content-Type': contentType});
        res.write(data);
        return res.end();
    });

}).listen(8080, function() {
    console.log('Server running at http://localhost:8080/');
});
