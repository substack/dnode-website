var connect = require('connect');
var server = connect.createServer();

var browserify = require('browserify');
var dnode = require('dnode');

server.use(connect.static(__dirname));
server.use(browserify({
    require : [ 'dnode', 'jquery-browserify' ]
}));

dnode(function (client) {
    this.cat = function (cb) {
        cb('meow');
    };
}).listen(server);

server.listen(8080);
