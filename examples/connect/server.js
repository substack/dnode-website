var connect = require('connect');
var webserver = connect.createServer();
webserver.use(connect.static(__dirname));

var dnode = require('dnode');

dnode(function (client) {
    this.cat = function (cb) {
        cb('meow');
    };
}).listen(webserver);

webserver.listen(8080);
