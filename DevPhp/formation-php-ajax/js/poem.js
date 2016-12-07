$(document).ready(function() {
    var url = "http://127.0.0.1/formation-php-ajax/client/poem-lsit.php";
    $.ajax({
        url: url,
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
