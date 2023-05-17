<?php

require_once "./config.php";

$portal = $con->db->query("SELECT `id` FROM `portals` WHERE portal_name='".$_POST['portal']."'");
$portal = $portal->fetch(PDO::FETCH_ASSOC);
$portal = $portal['id'];

$category = $con->db->query("SELECT `id` FROM `categories` WHERE `category_name` = '".$_POST['category']."';");
$category = $category->fetch(PDO::FETCH_ASSOC);
$category = $category['id'];

$problem = $con->db->query("SELECT `id` FROM `problem_levels` WHERE `problem_name` = '".$_POST['problem']."';");
$problem = $problem->fetch(PDO::FETCH_ASSOC);
$problem = $problem['id'];

$location = $con->db->query("SELECT `id` FROM `locations` WHERE `location_name` = '".$_POST['location']."';");
$location = $location->fetch(PDO::FETCH_ASSOC);
$location = $location['id'];

$company = $con->db->query("SELECT `id` FROM `companies` WHERE `company` = '".$_POST['vendor']."';");
$company = $company->fetch(PDO::FETCH_ASSOC);
$company = $company['id'];

$con->db->query("INSERT INTO `tenders`(`portal_name`, `category_name`, `location_name`, `problem_level`, `price`, `dev_price`, `quantity`, `regions_name`, `vendor`, `date`) VALUES('".(int)$portal."', '".(int)$category."', '".(int)$location."', '".(int)$problem."', '".(int)$_POST['price']."', '".(int)$_POST['dev_price']."', '".(int)$_POST['quantity']."', '".(int)$_POST['region']."', '".(int)$company."', '".$_POST['tenderDate']."');");

echo "Новая записть успешно добавлена";