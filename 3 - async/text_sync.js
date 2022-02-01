var fs = require('fs');

for (var i = 1; i <= 5; i++){
    var file = "sync-text" + 1 + ".txt";
    var out = fs.writeFileSync(file, "hello node.js!");
    console.log(out);
}
