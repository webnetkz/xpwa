<?php

session_start();
require_once "../../libs/security/checkIP.php";

if(isset($_GET['login']) && !empty($_GET['login']))
{
  if(isset($_GET['pass']) && !empty($_GET['pass']))
  {
    $login = trim($_GET['login']);
    $pass = trim($_GET['pass']);

    include_once "../../libs/Db.php";
    
    $res = $db->query('SELECT user FROM users WHERE user ="'.$_GET['login'].'";');
    $res = $res->fetch(PDO::FETCH_ASSOC);
    
    if($res)
    {
      $res = $db->query('SELECT user FROM users WHERE pass ="'.$pass.'";');
      $res = $res->fetch(PDO::FETCH_ASSOC);
      if($res) {
        $_SESSION['login'] = $login;
        
        // Запомнить пользователя на стороне клиента
        if(isset($_GET['save']) && !empty($_GET['save'])) {
          if($_GET['save'] == 1) {
            $res = [
              'status' => 'success', 
              'msg' => 'Добро пожаловать ' . $login, 
              'save' => 1, 
              'login' => $login, 
              'pass' => $pass
            ];
          }
        } else {
          $res = [
            'status' => 'success', 
            'msg' => 'Добро пожаловать ' . $login, 
            'save' => 0, 
            'login' => $login, 
            'pass' => $pass
          ];
        }

      } else {
        $res = [
          'status' => 'failed', 
          'msg' => 'Не верный пароль'
        ];
      }

    } else {
      $res = [
        'status' => 'failed', 
        'msg' => 'Не верный логин'
      ];
    }
  } else {
    $res = [
      'status' => 'failed', 
      'msg' => 'Введите пароль'
    ];
  } 
} else {
  $res = [
    'status' => 'failed', 
    'msg' => 'Введите логин'
  ];
}
$res = json_encode($res);
echo $res;
unset($_GET);