<?php

session_start();
require_once "../../libs/security/checkIP.php";

if(isset($_POST['login']) && !empty($_POST['login'])) {
  if(isset($_POST['pass']) && !empty($_POST['pass'])) {
    if(isset($_POST['pass2']) && !empty($_POST['pass2'])) {
      include_once "../../libs/Db.php";
      $res = $db->query('SELECT user FROM users WHERE user ="'.$_POST['login'].'";');
      $res = $res->fetch(PDO::FETCH_ASSOC);
      if($res) {
        header("Location: ".$_GET['url']."?msg=Логин занят");
      } else {
        $login = trim(htmlspecialchars($_POST['login']));
        $pass = trim(htmlspecialchars($_POST['pass']));

        $db->query('INSERT INTO `users` (`user`, `pass`, `role`) VALUES ("'.$login.'", "'.$pass.'", 1)');
        
        $_SESSION['login'] = $login;
        header("Location: ".$_GET['url']."?msg=Зарегистрирован");
      }

    } else {
      header("Location: ".$_GET['url']."?msg=Введите пароль еще раз");
    }
  } else {
    header("Location: ".$_GET['url']."?msg=Введите пароль");
  } 
} else {
  header("Location: ".$_GET['url']."?msg=Введите логин");
}