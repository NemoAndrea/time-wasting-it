var open = require('open');
var fs = require('fs');


port = 4000;

var http = require('http');
http.createServer(function(request, response) {

    if (request.method === 'POST') {
        console.log(request)
        var data = '';

        request.on('data', function(chunk) {
            data += chunk;
        });

        request.on('end', function() {
            // parse the data
            foo();
        });
    }

    response.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('index.html').pipe(response)
}).listen(port);

open('http://localhost:' + port);
