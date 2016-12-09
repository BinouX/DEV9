<?php
  echo $_GET['url'];

  $segments = explode('/', $url);
  $ctrl = $segments[0];
  $action = $segments[1];

  echo $ctrl;
  include 'Controller/'.$ctrl.'Controller.php';

  echo '<p>' . $action() . '</p>';
 ?>
