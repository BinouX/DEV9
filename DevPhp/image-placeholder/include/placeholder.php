<?php
// on dessine une image vide de 200 pixels sur 100
$icon1 = imagecreatefromjpeg('icon.jpg');
$image = @ImageCreate ($_GET['width'], $_GET['heigth']) or die ("Erreur lors de la création de l'image");
$couleur_fond = ImageColorAllocate ($image, $_GET['red'], $_GET['green'], $_GET['blue']);
$grey = imagecolorallocate($image, 128, 128, 128);
imagestring($image, 5, 0, 0, $_GET['width'].'x'.$_GET['heigth'], $grey);
imageline($image, 0, 0, imagesx($image), imagesy  ($image), $grey);
// on dessine notre image PNG
header ("Content-type: image/png");
ImagePng ($image);

?>
