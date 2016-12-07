<?php
  require '../config.php';
  function writeToDb(){
    $db = connect();
    if($db){
      $title = $_POST['title'];
      $body = $_POST['text'];
      $category = $_POST['category'];
      $date = date("Y-m-d h:i:s");
      $published = $_POST['published'];

      if($published === "oui"){
        $isPublished = true;
      }else{
        $isPublished = false;
      }

      $sqlInsertArticle = "INSERT INTO article(title,body,category,date,published)
        VALUE('$title', '$body', '$category', '$date','$isPublished')";
        mysqli_query($db, $sqlInsertArticle);
      }

    mysqli_close($db);
    header("location:/sport/include/ajoutArticle.php");
  }

  if(isset($_POST['title'])){
    writeToDb();
  }
 ?>
