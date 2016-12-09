var app = {
  'urlServer' : "http://127.0.0.1/insertionDonnees/include/"
}

$(function(){
  insertCategory();
  insertArticle();
});

function insertCategory(){
  $.ajax({
    url: app.urlServer + "insertCategory.php",
    method: 'POST',
    success: function(res){
      console.log(res);
    },
    error : function(res){
      console.log(res);
    }
  })
}

function insertArticle(){
  $.ajax({
    url: app.urlServer + "insertArticle.php",
    method: 'POST',
    success: function(res){
      console.log(res);
    },
    error : function(res){
      console.log(res);
    }
  })
}
