<?php
  session_start();
  session_destroy();
  header("location:/formation-php-ajax/template.php?page=home");
 ?>
