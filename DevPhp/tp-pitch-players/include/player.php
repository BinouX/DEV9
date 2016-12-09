<?php
  require '../config.php';

  $db = connect();

  if($db){
    $linePlayers = array();
    $sql = "SELECT * FROM player";
    $results = mysqli_query($db, $sql);
    while($row = mysqli_fetch_array($results)){
      array_push($linePlayers, utf8_encode_recursive($row));
    }
    echo json_encode($linePlayers);
  }
  mysqli_close($db);

  function utf8_encode_recursive ($array)
  {
      $result = array();
      foreach ($array as $key => $value)
      {
          if (is_array($value))
          {
              $result[$key] = utf8_encode_recursive($value);
          }
          else if (is_string($value))
          {
              $result[$key] = utf8_encode($value);
          }
          else
          {
              $result[$key] = $value;
          }
      }
      return $result;
  }
?>
