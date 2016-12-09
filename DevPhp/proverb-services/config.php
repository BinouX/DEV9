<?php
  define('HOST', 'localhost');
  define('USER', 'root');
  define('PASSWORD', '');
  define('DB', 'proverb-service');

  function connect(){
    $db = mysqli_connect(HOST, USER, PASSWORD, DB);
    return $db;
  }

  function utf8_encode_recursive ($array)
  {
      $result = array();
      foreach ($array as $key => $value)
      {
          if (is_array($value))
          {
              $result[$key] = utf8_encode_recursive($value);
          }
          else if (is_string($value))
          {
              $result[$key] = utf8_encode($value);
          }
          else
          {
              $result[$key] = $value;
          }
      }
      return $result;
  }
 ?>
