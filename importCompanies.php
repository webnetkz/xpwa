<?php

require_once './config.php';

$file = file_get_contents("https://tender.marten.kz/pc.csv");
$file = explode("\n", $file);

$core->x($file);

// foreach($file as $k => $v)
// {
//   $line = explode(";", $v);
//   $bin = $line[0];
//   $bin = str_replace("БИН: ", '', $bin);
//   $company = $line[1];
//   echo $bin;
//   echo "<hr>";
//   echo $company;

// }
