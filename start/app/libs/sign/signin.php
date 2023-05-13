<?php

session_start();
require_once "../../libs/security/checkIP.php";

if(!isset($_GET['url'])) {
  $_GET['url'] = $_SESSION['host'];
}

if(isset($_POST['login']) && !empty($_POST['login']))
{
  if(isset($_POST['pass']) && !empty($_POST['pass']))
  {
    $login = trim($_POST['login']);
    $pass = trim($_POST['pass']);

    include_once "../../libs/Db.php";
    
    $res = $db->query('SELECT user FROM users WHERE user ="'.$_POST['login'].'";');
    $res = $res->fetch(PDO::FETCH_ASSOC);
    
    if($res)
    {
      $res = $db->query('SELECT user FROM users WHERE pass ="'.$pass.'";');
      $res = $res->fetch(PDO::FETCH_ASSOC);
      if($res) {
        $_SESSION['login'] = $login;
        
        // Запомнить пользователя на стороне клиента
        if(isset($_POST['save']) && !empty($_POST['save'])) {
          if($_POST['save'] == 1) {
            echo "<script>location.href='".$_GET['url']."?save=1&login=".$login."&pass=".$pass."'</script>";
          }
        }

        echo "<script>location.href='".$_GET['url']."'</script>";
      } else {
        echo "<script>location.href='".$_GET['url']."?msg=Не верный пароль'</script>";  
      }

    } else {
      echo "<script>location.href='".$_GET['url']."?msg=Не верный логин'</script>";
    }
  } else {
    echo "<script>location.href='".$_GET['url']."?msg=Введите пароль'</script>";
  } 
} else {
  echo "<script>location.href='".$_GET['url']."?msg=Введите логин'</script>";
}