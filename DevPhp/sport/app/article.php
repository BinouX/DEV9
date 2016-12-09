<?php

function article_get_all($range)
{
  $db = mysqli_connect(HOST, USER, PASS, DB);
  $articles = array();
  if ($db) {

    $sql = "SELECT article.id, title, date, category.name as category";
    $sql .= " FROM article ";
    $sql .= " JOIN category ON article.category = category.id";
    $sql .= " ORDER BY date DESC";
    $sql .= " LIMIT ". $range['offset'] . ", " . $range['limit'] . "";

    if ($result = mysqli_query($db, $sql)) {
      while($article = mysqli_fetch_array($result)) {
        $date = date_create($article['date']);
        $article['date'] = date_format($date, 'd/m');
        array_push($articles, $article);
        // si problème d'encodage SQL
        //array_push($articles, utf8_encode_recursive($article));
      }
      return $articles;
    } else {
      return null;
    }

  }
  mysqli_close($db);
}

function article_get_by_id($id)
{
  $db = mysqli_connect(HOST, USER, PASS, DB);
  $articles = array();
  if ($db) {

    $sql = "SELECT body FROM article";
    $sql .= " WHERE id = " . $id;

    if ($result = mysqli_query($db, $sql)) {
      while($article = mysqli_fetch_array($result)) {
        array_push($articles, $article);
      }
      return $articles;
    } else {
      return null;
    }

  }
  mysqli_close($db);
}

function article_save()
{
  return;
}

?>
