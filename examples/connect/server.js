var connect = require('connect');
var server = connect.createServer();
server.use(connect.static(__dirname));

var dnode = require('dnode');

dnode(function (client) {
    this.cat = function (cb) {
        cb('meow');
    };
}).listen(server);

server.listen(8080);
