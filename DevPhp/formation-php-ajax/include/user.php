<?php
  function loginFunction($login, $pwd){
    if($login != 'binoux' || $pwd != '123456'){
      header("location:/formation-php-ajax/include/login.php?echec=ok");
    }else{
      session_start();
      $_SESSION['user'] = $login;
      $_SESSION['pwd'] = $pwd;
      header("location:/formation-php-ajax/template.php?page=home");
    }
  }

  loginFunction($_POST['login'], $_POST['pwd']);
 ?>
