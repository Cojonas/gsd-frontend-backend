var http = require('http');

var app = require("./app")


const port = 4000;
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
