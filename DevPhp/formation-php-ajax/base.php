<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<?php
  echo '<p>Text PHP</p>';

  // variables simples
  $message = "Formation PHP";
  $year = 2016;
  $isActive = true;
  $price = 450.20;

  //variables complexes
  $colors = [$message, $year, 18];

  $client = array(
    'id' => 18,
    'firstname' => 'BinouX',
    'lastname' => 'thegod',
    'categories' => ['Histoire', 'Compte', 'Sciences', 'Philosophie']
  );

  echo gettype($message);
  echo gettype($year);
  echo gettype($isActive);
  echo gettype($price);

  echo "<p>Le client ". $client['firstname']." ".$client['lastname']." est en ".$message."</p>";

  //constantes
  define('AUTHOR', 'Fabien Potencier');
  define('APP_VERSION', '1.0');

  echo "<p>Version actuelle v".APP_VERSION."</p>";

  // tableau imbrique
  echo "<p>".$client['categories'][2]."</p>";

  // opérateurs
  $operation = 2048*2048;
  echo $operation;

  echo "<br>";
  for($i=0; $i<10; $i++){
    echo $i;
    echo "<br>";
  }

  //fann_get_activation_function
  function add($a, $b){
    return $a + $b;
  }

  echo "<p>".add(2,5)."</p>";
?>
