var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname + '/static'));

var browserify = require('browserify');
app.use(browserify({
    entry : __dirname + '/js/main.js',
    require : [ 'jquery-browserify' ],
}));

var fs = require('fs');
var path = require('path');
var examples = fs.readdirSync(__dirname + '/examples')
    .reduce(function (acc, dir) {
        var d = __dirname + '/examples/' + dir;
        acc[dir] = {
            server : fs.readFileSync(d + '/server.js', 'utf8'),
            client : fs.readFileSync(d + (
                path.existsSync(d + '/index.html')
                    ? '/index.html'
                    : '/client.js'
            ), 'utf8')
        };
        return acc;
    }, {})
;

var jsonExamples = JSON.stringify(examples)
    .replace(/<\/script>/g, '<"+"/script>');

app.get('/', function (req, res) {
    res.render('examples.jade', {
        examples : jsonExamples
    });
});

app.listen(8080);
