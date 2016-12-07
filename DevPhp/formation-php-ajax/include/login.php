<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Connexion</title>
  </head>
  <body>
    <h1>Connexion</h1>
    <?php session_start();
     if(!isset($_SESSION['user'])){ ?>
       <?php
       if(isset($_GET['echec'])){
         echo "Erreur login ou password faux!";
       }
        ?>
      <form action="/formation-php-ajax/include/user.php" method="post">
        <label for="login"> Login: </label>
        <input type="text" name="login" value="" placeholder="Login">
        <label for="pwd"> Login: </label>
        <input type="password" name="pwd" value="">
        <input type="submit" name="submit" value="Login">
      </form>
      <?php }else{ echo "Tu es deja connecté gros débile"; } ?>
  </body>
</html>
