<?php
  include 'config.pph';
  include 'match.php';

  $matchs = match_get_all();

  if($matchs){
    echo json_encode($matchs);
  }
 ?>
