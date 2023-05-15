<?php

use App\Core\Core;
require_once './app/core/Core.php';
$core = new Core();

use App\Libs\Connector;
require_once "./app/libs/Connector.php";
$con = new Connector;

if(!isset($_GET['key']))
{
    $_GET['key'] = '777';
}

use App\Libs\Sign\Auntificator;
require_once "./app/libs/sign/Auntificator.php";
$auth = new Auntificator($_GET['key']);

//require_once "./app/libs/logs/logs.php";



