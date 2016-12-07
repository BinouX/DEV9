<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>POEM</title>
  </head>
  <body>
    <h1>POEM</h1>
    <form class="" action="write.php" method="POST">
      <section><input type="text" name="title" value="" placeholder="Titre"></section>
      <section><textarea name="poeme" rows="30" cols="80"></textarea></section>
      <section>
        File :<input type="radio" name="saveTo" value="file" checked="checked">
        DaBa :<input type="radio" name="saveTo" value="database">
      </section>
      <input type="submit" name="submit" value="Envoyer">
    </form>
  </body>
</html>
