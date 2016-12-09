<?php
  require '../config.php';
  $db = connect();
  if($db){
    $categoryFile = fopen('./uploads/article-categories.txt', 'r+');

    if($categoryFile){
      while(($buffer = fgets($categoryFile)) !== false){
        $sql = "INSERT INTO category(name) VALUE('$buffer')";
        mysqli_query($db, $sql);
      }
    }
    fclose($categoryFile);
  }

  function verifInsert(){
    $db = connect();
    if($db){
      $sql2 = "SELECT * FROM article";
      $results2 = mysqli_query($db, $sql2);
      while ($row2=mysql_fetch_array($results2)){
        echo $row2['category'];
      }
    }
    mysqli_close($db);
}
 ?>
