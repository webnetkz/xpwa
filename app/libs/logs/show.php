<?php
  
use App\Core\Core;
require_once "../../core/Core.php";
$core = new Core(true);

echo "<pre>";
echo file_get_contents("./logs.log");
