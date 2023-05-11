<?php

session_start();
require_once "../../libs/security/checkIP.php";

unset($_SESSION['login']);
header("Location: ".$_SESSION['host']); 