var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('pem/private.pem', 'utf-8'),
    cert: fs.readFileSync('pem/file.crt', 'utf-8')
};

var a = https.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
}).listen(3000);
console.log('Server started...');