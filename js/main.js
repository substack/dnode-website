var $ = require('jquery-browserify');

function choose (serverType, opts) {
    var t = serverType;
    if (opts.browserify) t += '-browserify';
    if (opts.jquery) t += '-jquery';
    
    var ex = examples[t];
    if (!ex && opts.browserify) {
        $('#browserify').attr('checked', false);
        opts.browserify = false;
        return choose(serverType, opts);
    }
    if (!ex && opts.jquery) {
        $('#jquery').attr('checked', false);
        opts.jquery = false;
        return choose(serverType, opts);
    }
    
    $('#client .console').text(ex && ex.client || '');
    $('#server .console').text(ex && ex.server || '');
    
    if (opts.browserify
    || examples[serverType + '-browserify']) {
        $('#browserify-label').show();
    }
    else {
        $('#browserify-label').hide();
    }
    
    if (opts.jquery
    || examples[serverType + '-jquery']
    || examples[t + '-jquery']) {
        $('#jquery-label').show();
    }
    else {
        $('#jquery-label').hide();
    }
}

$(window).load(function () {
    choose($('#server-type').val(), {});
    
    var fn = function () {
        choose($('#server-type').val(), {
            browserify : $('#browserify').attr('checked'),
            jquery : $('#jquery').attr('checked')
        });
    };
    
    $('#server-type').change(fn).keyup(fn);
    $('#jquery').change(fn).keyup(fn);
    $('#browserify').change(fn).keyup(fn);
});
