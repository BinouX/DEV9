<?php
  session_start();
  $_SESSION['connected_user'] = 'toto@titi.tata';
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>template</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </head>
  <body>
    <?php include('include/menu.inc.html'); ?>
    <h1>template</h1>
    <?php
      if(isset($_SESSION['user'])){
        echo "Hello ".$_SESSION['user'];
      }
    ?>
    <ul>
      <?php include('include/datasource.inc.php'); ?>
      <?php foreach ($clients as $client) : ?>
        <li <?php if($client['isMember']) ?>>
          <a href="#"><?php echo $client['name'] ?></a>
        </li>
      <?php  endforeach?>

      <form action="/formation-php-ajax/include/page/page2.php?page=2" method="POST" enctype="multipart/form-data">
        <input type="text" name="pseudo" placeholder="Pseudo">
        <input type="text" name="level" placeholder="level">
        <input type="file" name="file" value="">
        <input type="submit" name="submit" value="Send">
      </form>
    </ul>
  </body>
</html>
