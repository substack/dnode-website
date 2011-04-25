var dnode = require('dnode');

dnode.connect(5050, function (remote) {
    remote.cat(function (says) {
        console.log('The cat says ' + says + '.');
    });
});
