<?php

require_once "./config.php";

$querySQL = "SELECT * FROM `tenders` WHERE";

$allData = $_GET;
$andYesOrNo = false;

if(isset($allData['portal']))
{
    $portal = $con->db->query("SELECT `id` FROM `portals` WHERE `portal_name` = '".$allData['portal']."';");
    $portal = $portal->fetch(PDO::FETCH_ASSOC);
    $portal = $portal['id'];

    if($portal)
    {
        if($andYesOrNo)
        {
            $querySQL .= " AND `portal_name` = ".$portal."";
        } else {
            $querySQL .= " `portal_name` = ".$portal."";
        }
        $andYesOrNo = true;
    }

}

if(isset($allData['category']))
{
    $category = $con->db->query("SELECT `id` FROM `categories` WHERE `category_name` = '".$allData['category']."';");
    $category = $category->fetch(PDO::FETCH_ASSOC);
    $category = $category['id'];

    if($category)
    {
        if($andYesOrNo)
        {
            $querySQL .= " AND `category_name` = ".$category."";
        } else {
            $querySQL .= " `category_name` = ".$category."";
        }
        $andYesOrNo = true;
    }
}

if(isset($allData['problem']))
{
    $problem = $con->db->query("SELECT `id` FROM `problem_levels` WHERE `problem_name` = '".$allData['problem']."';");
    $problem = $problem->fetch(PDO::FETCH_ASSOC);
    $problem = $problem['id'];

    if($problem)
    {
        if($andYesOrNo)
        {
            $querySQL .= " AND `problem_level` = ".$problem."";
        } else {
            $querySQL .= " `problem_level` = ".$problem."";
        }
        $andYesOrNo = true;
    }
}

if(isset($allData['region']))
{
    if($allData['region'])
    {
        if($andYesOrNo)
        {
            $querySQL .= " AND `regions_name` = ".$allData['region']."";
        } else {
            $querySQL .= " `regions_name` = ".$allData['region']."";
        }
        $andYesOrNo = true;
    }
}

if(isset($allData['location']) && $allData['location'] != 'Алматы' && $allData['location'] != 'Астана' && $allData['location'] != 'Шимкент')
{
    $location = $con->db->query("SELECT `id` FROM `locations` WHERE `location_name` = '".$allData['location']."';");
    $location = $location->fetch(PDO::FETCH_ASSOC);
    $location = $location['id'];

    if($location)
    {
        if($andYesOrNo)
        {
            $querySQL .= " AND `location_name` = ".$location."";
        } else {
            $querySQL .= " `location_name` = ".$location."";
        }
        $andYesOrNo = true;
    }
}

if(isset($allData['price']))
{
    if($allData['price'])
    {
        if($andYesOrNo)
        {
            $querySQL .= " AND `price` = ".$allData['price']."";
        } else {
            $querySQL .= " `price` = ".$allData['price']."";
        }
        $andYesOrNo = true;
    }
}

if(isset($allData['dev_price']))
{
    if($allData['dev_price'])
    {
        if($andYesOrNo)
        {
            $querySQL .= " AND `dev_price` = ".$allData['dev_price']."";
        } else {
            $querySQL .= " `dev_price` = ".$allData['dev_price']."";
        }
        $andYesOrNo = true;
    }
}

if(isset($allData['quantity']))
{
    if($allData['quantity'])
    {
        if($andYesOrNo)
        {
            $querySQL .= " AND `quantity` = ".$allData['quantity']."";
        } else {
            $querySQL .= " `quantity` = ".$allData['quantity']."";
        }
        $andYesOrNo = true;
    }
}

if(isset($allData['vendor']))
{
    if($allData['vendor'])
    {
        if($andYesOrNo)
        {
            $querySQL .= " AND `vendor` = ".$allData['vendor']."";
        } else {
            $querySQL .= " `vendor` = ".$allData['vendor']."";
        }
        $andYesOrNo = true;
    }
}

$tenders = $con->db->query($querySQL);
$tenders = $tenders->fetchAll(PDO::FETCH_ASSOC);

$tenders = json_encode($tenders);
echo $tenders;