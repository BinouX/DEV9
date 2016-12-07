<?php
  define('HOST', 'localhost');
  define('USER', 'root');
  define('PASSWORD', '');
  define('DB', 'tp-chrono-sport');

  function connect(){
    $db = mysqli_connect(HOST, USER, PASSWORD, DB);
    return $db;
  }
 ?>
