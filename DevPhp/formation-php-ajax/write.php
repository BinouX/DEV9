<?php
  require 'config.php';
    function writeToFile(){
      $uploadDir = $_SERVER['DOCUMENT_ROOT']."/formation-php-ajax/uploads/";
      if(isset($_POST['poeme'])){
        $poemeText = " poeme_".date("Ymdhis").".txt";

        if(!file_exists($uploadDir.$poemeText)){
          fopen($uploadDir.$poemeText, "w");
        }
        $myfile = fopen($uploadDir. $poemeText, "w") or die("Unable to open file!");
        fwrite($myfile, $_POST['poeme']);
        fclose($myfile);
      }
    }

    function writeToDb(){
      $db = connect();
      if($db){
        $title = $_POST['title'];
        $text = $_POST['poeme'];

        $sql = "INSERT INTO poem(title,text) VALUE ('$title','$text')";
        $dbOk = mysqli_query($db, $sql);
      }
      mysqli_close();
    }

    if(isset($_POST['saveTo'])){
      if($_POST['saveTo'] === "file"){
        writeToFile();
      }else if( $_POST['saveTo'] === "database"){
        writeToDb();
      }
    }

    header("location:/formation-php-ajax/template.php");
 ?>
