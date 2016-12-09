$(document).ready(function() {
    var url = "http://127.0.0.1/sport/include/chrono.php";
    var url2 = "http://127.0.0.1/sport/include/nbArticle.php";
    var page;
    if (typeof(getAllUrlParams().page) === "undefined") {
        page = 0;
    } else {
        page = getAllUrlParams().page - 1;
    }
    var maxParPage = 10;
    var min = page * maxParPage;
    var max = page * maxParPage + maxParPage;
    var $prev = $('a.prev');
    var $next = $('a.next');
    var $maxPage = $('span.maxPage');
    var $currentPage = $('span.currentPage');
    $.ajax({
        url: url,
        method: 'GET',
        data: 'articlemin=' + min + '&articlemax=' + maxParPage,
        success: function(res) {

            $.ajax({
                url: url2,
                method: 'GET',
                success: function(res) {
                    $maxPage.append(Math.ceil(res.length / maxParPage));
                    if ((page + 1) == (Math.ceil(res.length / maxParPage))) {
                        $next.hide();
                    } else {
                        $next.show();
                    }
                }
            });


            var actuChronos = JSON.parse(res);
            actuChronos.forEach(function(actuChrono) {
                displayArticles(actuChrono);
            });
            if ((page + 1) == 1) {
                $prev.hide();
            } else {
                $prev.show();
            }
            $currentPage.append(page + 1);
        },
        error: function() {
            console.log("ERROR");
        }
    });

});


function displayArticles(article) {
    var li = '';
    li += "<li>";
    li += "<span class='date'>" + article[3] + "</span>";
    li += "<a href='#'>" + article[2];
    li += article[0] + "</a>";
    li += "</li>";
    $('ul.chrono').append(li);
}

function getAllUrlParams(url) {
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
    var obj = {};
    if (queryString) {
        queryString = queryString.split('#')[0];
        var arr = queryString.split('&');
        for (var i = 0; i < arr.length; i++) {
            var a = arr[i].split('=');
            var paramNum = undefined;
            var paramName = a[0].replace(/\[\d*\]/, function(v) {
                paramNum = v.slice(1, -1);
                return '';
            });
            var paramValue = typeof(a[1]) === 'undefined' ? true : a[1];
            paramName = paramName.toLowerCase();
            paramValue = paramValue.toLowerCase();
            if (obj[paramName]) {
                if (typeof obj[paramName] === 'string') {
                    obj[paramName] = [obj[paramName]];
                }
                if (typeof paramNum === 'undefined') {
                    obj[paramName].push(paramValue);
                } else {
                    obj[paramName][paramNum] = paramValue;
                }
            } else {
                obj[paramName] = paramValue;
            }
        }
    }
    return obj;
}

function pageSup() {
    var page;
    if (typeof(getAllUrlParams().page) === "undefined") {
        page = 0;
    } else {
        page = getAllUrlParams().page;
    }
    var pageSuiv = parseInt(page) + 1;
    window.location.replace("http://127.0.0.1/sport/index.html?page=" + pageSuiv);
}

function pagePrec() {
    var page;
    if (typeof(getAllUrlParams().page) === "undefined") {
        page = 0;
    } else {
        page = getAllUrlParams().page;
    }
    if (page <= 1) {
        window.location.replace("http://127.0.0.1/sport/index.html?page=1");
    } else {
        var pagePrec = parseInt(page) - 1;
        window.location.replace("http://127.0.0.1/sport/index.html?page=" + pagePrec);
    }

}
