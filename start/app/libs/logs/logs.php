<?php

// Получаем IP-адрес пользователя и URI посещаемой страницы
$logFile = './app/libs/logs/logs.log';

$ip = $_SERVER['REMOTE_ADDR'];
$userAgent = $_SERVER['HTTP_USER_AGENT'];
$date = date('Y-m-d H:i:s');
$uri = $_SERVER['REQUEST_URI'];

$logLine = "$date - $ip - $userAgent - $uri\n";

// Открываем файл лога для дополнения (prepend)
$logHandle = fopen($logFile, 'r+');

// Добавляем запись в начало файла
$fileContent = fread($logHandle, filesize($logFile));
rewind($logHandle);
fwrite($logHandle, $logLine . $fileContent);

// Закрываем файл
fclose($logHandle);



//echo '<script>const check = localStorage.getItem("secret"); if(check == null) { location.href ="https://google.com"}</script>';
