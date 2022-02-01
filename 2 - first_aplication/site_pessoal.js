var http = require('http');
var fs = require('fs');
const { dirname } = require('path/posix');

var server = http.createServer(function (request, response) {
    //A constante _dirname retorna o diretório raiz da aplicação

    fs.readFile(__dirname + '/index.html', function (erro, html) {
        response.writeHeader(200, { 'Content-Type': 'text/html' });
        response.write(html);
        response.end();
    });
});

server.listen(3000, function () {
    console.log('Executando Site pessoal');
})
