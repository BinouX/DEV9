<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Page1</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </head>
  <body>
    <?php include('../menu.inc.html') ?>
    <?php
      if(isset($_GET['message'])){
        echo "message bien reçu: ".$_GET['message'];
      }

      $orderby = $_GET['orderby'];

      if($orderby === 'asc'){
        echo "Order by ascendant";
      }else if($orderby === 'desc'){
        echo "Order by descendant";
      }else{
        echo "Order by not found";
      }
    ?>
  </body>
</html>
