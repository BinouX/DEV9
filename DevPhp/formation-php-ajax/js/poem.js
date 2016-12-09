var app = {
    var urlServer = "http://127.0.0.1/formation-php-ajax/client/";
}

$(document).ready(function() {
    console.log("bonjour");
    loadPoems();
    $('#sendAjax').on('click', function() {
        $.ajax({
            url: app.urlServer + "poem-add.php",
            method: 'POST',
            data: {
                message: 'VI saluto!'
            },
            success: function(res) {},
            error: function() {}
        })
    })
});


$(document).ready(function() {
    $.ajax({
        url: app.urlServer + "poem-lsit.php",
        method: 'GET',
        success: function(res) {
            var poems = JSON.parse(res);
            poems.forEach(function(poem) {
                $('body').append("<p>" + poem +
                    "</p>");
            });
            console.log(res);
        },
        error: function() {
            console.log('ERROR');
        }
    })
});
