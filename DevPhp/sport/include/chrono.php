<?php
  require '../config.php';

  $db = connect();

  if($db){
    $lineChrono = array();
    $sql = "SELECT
    a.title, a.body,(SELECT name from category WHERE id = a.category ) , a.date, a.published
    FROM article a ORDER BY date DESC LIMIT ".$_GET['articlemin'].",".$_GET['articlemax'];
    $results = mysqli_query($db, $sql);
    while($row = mysqli_fetch_row($results)){
      $date = date_create($row[3]);
      $row[3] = date_format($date, 'd/m');
      array_push($lineChrono, utf8_encode_recursive($row));
    }

    echo json_encode($lineChrono);
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
