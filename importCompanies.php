<?php

require_once './config.php';

$file = file_get_contents("https://tender.marten.kz/table.txt");
$file = explode("\n", $file);


foreach($file as $k => $v)
{
  $line = explode(";", $v);
  $bin = $line[0];
  $company = $line[1];
  $company = str_replace('"', '', $company);

  echo $bin;
  echo "<br>";
  echo $company;
  echo "<hr>";

  $con->db->query("INSERT INTO `companies` (`company`, `bin`, `category`) VALUES ('".$company."', '".$bin."', '3')");


}


