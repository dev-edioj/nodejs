var http = require('http');
var fs = require('fs')

var server = http.createServer(function (request, response) {
    fs.readFile(__dirname + '/artigos.html', function (erro, html) {
        response.writeHeader(200, { 'Content-Type': 'text/html' });
        if (!request.url == "/" || request.url == "/contato") {
                    responde.write()
                }
        response.end(html);
    });
})
server.listen(3000, function () {
    console.log('Executando Site pessoal');
})
