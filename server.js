var app = require("./app")
var http = require('http');

const port = 5000;
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
