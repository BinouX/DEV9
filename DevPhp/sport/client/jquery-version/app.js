var app = {
  limit: 20,
  currentPage: 1,
  maxPages: 10,
  speedAnimation: 500,
  boxHeight: 300,
  urlServer: 'http://127.0.0.1/sport/app'
};

$(document).ready(function() {

  // mise en page d'éléments ciblés par jQuery
  app.$currentPage = $('.pager span.currentPage');
  app.$ul_chrono = $('ul.chrono');
  app.$footer = $('.footer');

  app.$currentPage.text(app.currentPage);
  $('.pager span.maxPages').text(app.maxPages);

  app.$footer.find('.next').on('click', function() {

    if (app.currentPage < app.maxPages) {
      var offset = app.currentPage * app.limit;
      getArticles(offset, app.limit);
      app.currentPage++;
      app.$currentPage.text(app.currentPage);
    }

  });

  app.$footer.find('.prev').on('click', function() {

    if (app.currentPage >= 2) {
      app.currentPage--;
      app.$currentPage.text(app.currentPage);

      var positionTop = app.$ul_chrono.position().top;
      var newPosition = positionTop + app.boxHeight;

      app.$ul_chrono.animate({
        'top' : newPosition,
      }, app.speedAnimation)
    }

  });

  getArticles(0, app.limit);

});

function getArticles(offset, limit) {

  $.ajax({
    url: app.urlServer + '/article-list.php',
    method: 'GET',
    data: {offset:offset, limit:limit},
    success: function(res) {
      var articles = JSON.parse(res);

      if (app.currentPage > 1) {

        app.$ul_chrono.animate({
          'top': -(app.boxHeight * app.currentPage)
        }, app.speedAnimation);

        app.$footer.find('.prev').css({
          'background-position': '0 -589px' // image de la fèche noire
        });
      }

      displayArticles(articles);
    },
    error: function(res) {

    }
  });

}

function displayArticles(articles) {
  articles.forEach(function(article) {
    var li = '';
    li += '<li>';
    li += '<span class="date">' + article.date + '</span>';
    li += '<a class="articleLink" href="'+article.id+'"><strong>' + article.category + '</strong> ';
    li +=  article.title + '</a>';
    li += '</li>';
    $('ul.chrono').append(li);
  });

  $('.articleLink').on('click', function(e) {
    e.preventDefault(); // annule le comportement par défaut de la balise a
    var articleId = $(this).attr('href');

    // requête ajax pour récupéer le texte (body) de l'article
    $.ajax({
      url: app.urlServer + '/article-by-id.php',
      method: 'GET',
      data: {'id':articleId},
      success: function(res) {
        //var article = JSON.parse(res);
        displayArticleBody(res);
      },
      error: function(res) {

      }
    });

  });
}

function displayArticleBody(article) {
  $('div#article').html('<p>' + article + '</p>');
}
