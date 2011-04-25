var dnode = require('dnode');

dnode(function (client) {
    this.cat = function (cb) {
        cb('meow');
    };
}).listen(5050);
