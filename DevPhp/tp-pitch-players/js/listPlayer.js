var app = {
    'urlServer': 'http://127.0.0.1/tp-pitch-players/include/',
    'nbJoueur': 0
}

$(document).ready(function() {
  $.ajax({
    url: app.urlServer + "listPlayer.php",
    method: "GET",
    success: function(res) {
      var players = JSON.parse(res)
      players.forEach(function(player){
        displayPlayer(player);
      })
    },
    error: function() {}
  });
});

function displayPlayer(player){
  var para = '';
  para += "<p id='draggable' class='draggable ui-widget-content' value=" + player[0] + ">";
  para += "<img class='joueur' src='./css/img/football-player.png'/>";
  para += player[3] + " " + player[2] + " " + player[1];
  para += "</p>";
  $("div.pannelJoueur").append(para);

  $("p#draggable").draggable(
    {
      appendTo: ".terrain",
      cursor: "move",
      helper: 'clone',
      revert: "invalid"
    }
  );

  $(".pannelJoueur").droppable({
    tolerance: "intersect",
    accept: "#draggable",
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function(event, ui) {
        $(this).append($(ui.draggable));
    }
  });

  $(".terrain").droppable({
      accept: "#draggable",
      activeClass: "ui-state-default",
      hoverClass: "ui-state-hover",
      drop: function(event, ui) {
          app.nbJoueur++
          console.log(app.nbJoueur);
          $(this).append($(ui.draggable));
      }
  });
}
