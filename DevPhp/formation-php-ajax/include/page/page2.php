<?php
  session_start();
  $_SESSION['connected_user'] = 'toto@titi.tata';
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Page2</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </head>
  <body>
    <?php include('../menu.inc.html') ?>
    <?php
    $allowedMimes = array(
      'image/png',
      'image/jpg',
      'image/jpeg'
    );
      if(isset($_FILES['file'])){
        $originalName = $_FILES['file']['name'];
        $uploadDir = $_SERVER['DOCUMENT_ROOT']."/formation-php-ajax/uploads/";
        if($_FILES['file']['size'] > 10000000){
          echo "Fichier trop lourd";
        }else if(!in_array($_FILES['file']['type'], $allowedMimes)){
          echo "Type de fichier non autorisé!";
        }else{
          if(file_exists($uploadDir.$originalName)){
            echo "++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.";
          }else{
              $boolMove = move_uploaded_file($_FILES['file']['tmp_name'], $uploadDir.$originalName );
              if($boolMove){
                echo "Document uploaded";
              }else{
                echo "hhodor? Hodor!? Hodor!? oHooodorrhodor orHodor!? d = HoDoRHoDoR () {
                    hodor.hod('Hhodor? Hodor!? Hodor!? o HODOR!? orHodor!? d!');
                  };hhodor? Hodor!? Hodor!? oHooodorrhodor orHodor!? d();";
              }
          }
        }
      }
      if(isset($_POST['submit'])){
        echo $_POST['pseudo'];
      }

     ?>
  </body>
</html>
