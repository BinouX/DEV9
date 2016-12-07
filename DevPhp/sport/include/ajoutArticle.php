<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Add actuality</title>
  </head>
  <body>
      <form action="insertArticle.php" method="POST">
          <section>
            <label for="title">Titre : </label>
            <input type="text" name="title" value="">
          </section>
          <section>
            <label for="text">Texte : </label>
            <textarea name="text" rows="30" cols="80"></textarea>
          </section>
          <section>
            <label for="category">Categorie : </label>
            <input type="text" name="category" value="">
          </section>
          <section>
            Oui <input type="radio" name="published" value="oui" checked="checked">
            Non <input type="radio" name="published" value="non">
          </section>
          <section>
            <input type="submit" name="submit" value="Envoyer!">
          </section>
      </form>
  </body>
</html>
