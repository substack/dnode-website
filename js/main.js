var $ = require('jquery-browserify');

function choose (serverType) {
    var ex = examples[serverType];
    $('#client .console').text(ex && ex.client || '');
    $('#server .console').text(ex && ex.server || '');
}

$(window).load(function () {
    choose($('#server-type').val());

    $('#server-type').change(function () {
        choose($(this).val());
    });
});
