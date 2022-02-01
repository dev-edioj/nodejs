var fs = require('fs');

fs.readdir(__dirname, function (erro, contents) {
    if (erro) { throw erro; }
    contents.forEach(function (content) {
        var path = './' + content;
        fs.stat(path, function (erro, start) {
            if (erro) { throw erro; }
            if (stat.isFile()) {
                console.log('$s %d bytes', content, stat.size);
            };
        });
    });
});
