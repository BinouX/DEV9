<?php
  require '../config.php';

  $articleFile = fopen('./uploads/article-titles.txt', 'r+');
  $lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  $db = connect();
    if($articleFile){
      while(($buffer = fgets($articleFile)) !== false){
        $sqlt = "INSERT INTO article(title, body, category, date, published) VALUE";
        $sqlt .="('$buffer', '$lorem', '".chooseCategory()."', '".chooseDate()."', '".isPublished()."')";
        mysqli_query($db, $sqlt);
      }
    }
  fclose($articleFile);
  mysqli_close($db);

  function isPublished(){
    return rand(0,1);
  }

  function chooseDate(){
    $beforeDay = rand(0,3);
    $date = date("Y-m-d", time()-(86400*$beforeDay));
    return $date;
  }

  function chooseCategory(){
      $db = connect();

      $sqlMin = "SELECT min(id) as min FROM category";
      $sqlMax = "SELECT max(id) as max FROM category";
      $resultsMin = mysqli_query($db, $sqlMin);
      $resultsMax = mysqli_query($db, $sqlMax);
      $rowMin = mysqli_fetch_array($resultsMin);
      $rowMax = mysqli_fetch_array($resultsMax);
      mysqli_close($db);

      return rand($rowMin['min'], $rowMax['max']);
  }
 ?>
