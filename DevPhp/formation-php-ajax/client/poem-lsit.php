<?php
  require '../config.php';

  $db = connect();
  if($db){
    $poems = array();
    $sql = "SELECT * FROM poem";
    $results = mysqli_query($db, $sql);
    while($row = mysqli_fetch_row($results)){
      array_push($poems, $row['1']);
    }

    echo json_encode($poems);
  }
 ?>
