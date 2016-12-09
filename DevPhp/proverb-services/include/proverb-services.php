<?php
    include '../config.php';

    $db = connect();
    if($db){
      $proverbs = array();
      if($_SERVER['REQUEST_METHOD'] === 'GET'){
        if(isset($_GET['theme'])){
          $theme = $_GET['theme'];
          $sqlProverb = "SELECT p.text, p.author, p.id FROM proverb p ";
          $sqlProverb .= " WHERE p.theme in (SELECT t.id FROM theme t WHERE t.name = '$theme')";
        }
        $sqlProverb = "SELECT p.text, p.author, p.id FROM proverb p ";
      }else if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        $idDelete = $_GET['id'];
        $sqlProverb = "DELETE FROM proverb WHERE id ='$idDelete'";
      }

      $resultProverb = mysqli_query($db, $sqlProverb);
      while($proverb = mysqli_fetch_array($resultProverb)){
        array_push($proverbs, utf8_encode_recursive($proverb));
      }
      echo json_encode($proverbs);
    }
    mysqli_close($db);
 ?>
