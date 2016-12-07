<?php
  require '../config.php';

  $db = connect();

  if($db){
    $lineChrono = array();
    $sql = "SELECT count(*) FROM article";
    $results = mysqli_query($db, $sql);
    $row = mysqli_fetch_row($results)

    echo json_encode($row);
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
