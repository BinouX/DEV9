var app = {
  'urlServer' : 'http://127.0.0.1/proverb-services/include/',
  'i': 0,
  'refreshInterval' : ''
}

$(document).ready(function(){
    $searchByTheme = $('button#searchProverb');
    $searchTheme = $('#theme');
    $stopbutton = $('button#stop');
    $searchList = $('button#listProverbs');
    $deleteProverbs = $('button#deleteCurrent');
    $spanDelete = $('p.proverbp');
    $searchByTheme.on('click', function(){
      getProverb($searchTheme.val())
    })
    $stopbutton.on('click', function(){
      stopProverb();
    })
    $searchList.on('click',function(){
      getProverbs();
    })
    $deleteProverbs.on('click',function(){
      console.log($spanDelete);
    })
});

function getProverb(theme){
  $.ajax({
    url : app.urlServer + 'proverb-services.php?theme='+ theme,
    method: 'GET',
    success: function(res){
      var proverbs = JSON.parse(res);
        if(proverbs.length == 0){
          $('p').remove();
          stopProverb();
          var p = '';
          p += '<p>';
          p += "Aucun proverbe de ce theme";
          p += '</p>';
          $('div.proverb').append(p);
        }else{
         app.refreshInterval= setInterval(function(){
            $('p').remove();
            if(app.i === proverbs.length){
                app.i =0;
            }
            showProverbs(proverbs[app.i]);
            app.i++;
          }, 1000);
        }
    },
    error: function(res){
      console.log("KO");
    }
  })
}

function showProverbs(proverb){
  var p = '';
  p += '<p class="proverbp" value='+proverb[2]+'>';
  p += proverb[0];
  p += '</p>';
  var pAuthor = '';
  pAuthor += '<p>';
  pAuthor += proverb[1];
  pAuthor += '</p>';
  $('div.proverb').append(p);
  $('div.author').append(pAuthor);
}

function stopProverb(){
    clearInterval(app.refreshInterval);
}

function getProverbs(){
  $.ajax({
    url : app.urlServer + 'proverb-services.php',
    method: 'GET',
    success: function(res){
      var proverbs = JSON.parse(res);
      showListProverbs(proverbs);
    },
    error: function(res){
      console.log("KO");
    }
  })
}

function showListProverbs(proverbs){
  $('p').remove();
  proverbs.forEach(function(proverb){
    var p = '';
    p += '<p value='+proverb[2]+'>';
    p += proverb[0];
    p += '</p>';
    $('div.proverb').append(p);
  })
}
