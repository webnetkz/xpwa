<?php

use App\Core\Core;
require_once './app/core/Core.php';
$core = new Core(true);

use App\Libs\Connector;
require_once "./app/libs/Connector.php";
$con = new Connector;

use App\Libs\Sign\Auntificator;
require_once "./app/libs/sign/Auntificator.php";
$auth = new Auntificator($_GET['key']);

//require_once "./app/libs/logs/logs.php";



