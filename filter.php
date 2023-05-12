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
//$core->x($querySQL);
$tenders = $con->db->query($querySQL);
$tenders = $tenders->fetchAll(PDO::FETCH_ASSOC);

$tenders = json_encode($tenders);
echo $tenders;