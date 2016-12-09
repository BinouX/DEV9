var app ={
    'urlServer': 'http://127.0.0.1/tp-pitch-players/include/',
    availablePlayers: null,
    currentDraggedPlayer: null,
    currentDraggedPlayerId: null;
    pitchBoundaries: {
      left:[120, 800],
      top: [0, 500]
    },
    selectedPlayers = [],
    savedMatchs: []
}

$(function(){
  app.$place = $('#place');
  app.$date = $('#date');
  $('#saveMatch').on('click', saveMatch);
  getPlayers();
});

function getPlayers(){
  $.get(app.urlServer+ 'player-list.php').then(function(res){
    app.availablePlayers = JSON.parse(res);
  });
}

function displayPlayer(){
  var i = 0;

  app.availablePlayers.forEach(function(player){
    var top = 30*i;
    i++;
    player.coords = {left :0, top: top};
    $('div#players').append(
      "<div style='top:"+top+"' id="+ player.id + ">" + player.lastname + '</div>';
    );

    $('.player').draggable({
      stop: stopDrag
    });
  })
}

function stopDrag(){
  app.currentDraggedPlayer = $(this);
  app.currentDraggedPlayerId = $(this).attr('id');
  var postion = app.currentDraggedPlayer.postion();
  var coords = {
    'left' :parseInt(position.left),
    'top': parseInt(position.top)
  }
  app.currentDraggedPlayer.html('top: ' + coords.top + ';left:' coords.left);
}

function isOverPitch(coords){
  var isOkLeft = coords.left > app.pitchBoundraies.left[0] &&
   coords.left < app.pitchBoundraies.left[1];
   var isOkTop = coords.left > app.pitchBoundraies.top[0] &&
    coords.left < app.pitchBoundraies.top[1];

    if(isOkTop && isOkLeft){
      app.currentDraggedPlayer.addClass('good');
      app.selectedPlayers.push(app.currentDraggedPlayerId);
    }else{
      app.currentDraggedPlayer.removeClass('good');
    }
}

function isSelected(){
  for(var i = 0; i<app.selectedPlayers.length; i++){}
      if(app.selectedPlayers[i] === playersid){
        return true;
    }
  }
}


function removePlayer(playerId){
  for(var i=0; i<app.selectedPlayers.length; i++){
    if(app.selectedPlayers[i].id === playersId){
      app.selectedPlayers.splice(i,1);
      return true;
    }
  }
}

function saveMatch(){

  $.ajax({
    url: app.urlServer + 'match-save.php',
    method: 'POST',
    data: match,
    success: function(res){

    },
    error: function(res){

    }
  })
}


function.getMatchs(){
  $.get(app.urlServer + 'match-lsit.php').then(function(res){
    app.savedMatchs = displayMatchs(JSON.parse(res));
  });
}

function displayMatchs(matchs){
  app.savedMatchs.forEach(function(match){
    var li = '';
    li += '<li>' + match.place+ ',' +match.date;
    li += ' <span id="'+match.id+'" class="compo">'+compo+'</span>';
    li += '</li>';
    $('ul#saveMatchs').append(li);
  });

  $('.compo').on('click', function(){
    var matchId = $(this).attr('id');
    var players = getPlayersForMatch(matchId);
    putPlayersOnPitch(players);
  })
}

function getPlayersForMatch(matchId){
  for(var i=0; i<app.savedMatchs.length; i++){
    if (app.savedMatchs[i].id === matchId){
      return app.savedMatchs[i].players
    }
  }
}

function putPlayersOnPitch($players){
    for( var i=0; i<players.length; i++){
      for(var j=0; j<app.availablePlayers.length;j++){
        if(app.availablePlayers[j].id === players[i].player_id){
          var left = parseInt(players[i].coords.left);
          var top = parseInt(players[i].coords.top);

          $('#players').find('div#'+players[i].player_id).animate({
            top: top,
            left: left
          },250);
        }
      }
    }
}

function resetPosition(){
  app.availablePlayers.forEach(function(player){
    $('#players').find('div#'+player.id).animate({
      top: player.coords.top,
      left: player.coords.left
    },250 );
  })
}
