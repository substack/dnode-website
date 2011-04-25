var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname));

var dnode = require('dnode');

dnode(function (client) {
    this.cat = function (cb) {
        cb('meow');
    };
}).listen(app);

app.listen(8080);
