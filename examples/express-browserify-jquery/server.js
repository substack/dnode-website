var express = require('express');
var app = express.createServer();

var browserify = require('browserify');
var dnode = require('dnode');

app.use(express.static(__dirname));
app.use(browserify({
    require : [ 'dnode', 'jquery-browserify' ]
}));

dnode(function (client) {
    this.cat = function (cb) {
        cb('meow');
    };
}).listen(app);

app.listen(8080);
