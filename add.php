<?php require_once "./assets/components/header.php";?>

<link rel="stylesheet" href="./assets/styles/index.css">

<div id="mainContent">
  <div id="mainContentContainer">
    
    <div class="buttons">
      <img src="./assets/images/icons/interface/home.png" class="hoverBtn" onclick="location.href='index.php'">
      <img src="./assets/images/icons/interface/back.png" style="width: 30px;" class="hoverBtn" onclick="location.href = 'index.php';">
      <img src="./assets/images/icons/interface/reset.png" class="hoverBtn" onclick="location.reload();">
    </div>

    <div id="appendContainer">
      <div id="appendContent">
          <select id="portal" >
            <option value="none" disabled selected>Наименование рынка</option>
            <?php
              $portals = $con->db->query("SELECT * FROM `portals`");
              $portals = $portals->fetchAll(PDO::FETCH_ASSOC);
              
              $locations = $con->db->query("SELECT * FROM `locations`");
              $locations = $locations->fetchAll(PDO::FETCH_ASSOC);
			        echo '<script> localStorage.setItem("locations", \''.json_encode($locations).'\');</script>';
              
              foreach($portals as $k => $v)
              {
                echo '<option value="'.$v['portal_name'].'">'.$v['portal_name'].'</option>';
              }
            ?>
          </select>


          <select id="category" >;
            <option value="none" disabled selected>Категория</option>;
            <?php
              $categories = $con->db->query("SELECT * FROM `categories`");
              $categories = $categories->fetchAll(PDO::FETCH_ASSOC);
			        echo '<script> localStorage.setItem("categories", \''.json_encode($categories).'\');</script>';

              foreach($categories as $k => $v)
              {
                echo '<option value="'.$v['category_name'].'">'.$v['category_name'].'</option>';
              }
            ?>
          </select>

          <select id="problem" >;
            <option value="none" disabled selected>Уровень проблем</option>;
            <?php
              $problemLevels = $con->db->query("SELECT * FROM `problem_levels`");
              $problemLevels = $problemLevels->fetchAll(PDO::FETCH_ASSOC);

              foreach($problemLevels as $k => $v)
              {
                echo '<option value="'.$v['problem_name'].'">'.$v['problem_name'].'</option>';
              }
            ?>
          </select>

          <select id="region" onchange="setLocations();">;
            <option value="none" disabled selected>Регион</option>;
            <?php
              $regions = $con->db->query("SELECT * FROM `regions`");
              $regions = $regions->fetchAll(PDO::FETCH_ASSOC);
			        echo '<script> localStorage.setItem("regions", \''.json_encode($regions).'\');</script>';

              foreach($regions as $k => $v)
              {
                echo '<option value="'.$v['id'].'">'.$v['region_name'].'</option>';
              }
            ?>
          </select>
          <select id="location" >;
            <option value="none" disabled selected>Город</option>;
            <?php
              foreach($locations as $k => $v)
              {
                echo '<option style="display: none" class="hiddenLocations" parent="'.$v['parent_region'].'" value="'.$v['location_name'].'">'.$v['location_name'].'</option>';
              }
            ?>
          </select>
          <input type="text" id="price" placeholder="Цена">
          <input type="text" id="minimal_price" placeholder="Себестоимость">
          <input type="text" id="quantity" placeholder="Количетсво">
          <input type="date" id="tenderDate">
          <input type="text" id="vendor" placeholder="Поставщик" class="autocomplete_vendor">

          
        </div>
      </div>

      <br>
      <button class="btn" onclick="setNewTender()">Сохранить</button>
<script src="./assets/scripts/fetch.js"></script>

<script>

function setLocations()
{
  const region = document.querySelector("#region");
  const resultRegion = region.options[region.selectedIndex].value;
    
  document.querySelectorAll('.hiddenLocations').forEach((el) => {
    el.style.display = 'none';

    // Выбор городов республиканского назначения
    switch(Number(resultRegion))
    {
      case 17:
        document.querySelector("#location").setAttribute("disabled", "");
      break;
      case 18:
        document.querySelector("#location").setAttribute("disabled", "");
      break;
      case 19:
        document.querySelector("#location").setAttribute("disabled", "");
      break;
    }

      if(Number(el.getAttribute('parent')) === Number(resultRegion))
      {
        document.querySelector("#location").removeAttribute("disabled");
        el.style.display = "inline-block";
      }
    });
  }

  function setNewTender()
  {
    const portal = document.querySelector("#portal");
    const resultPortal = portal.options[portal.selectedIndex].value;
    const category = document.querySelector("#category");
    const resultCategory = category.options[category.selectedIndex].value;
    const problem = document.querySelector("#problem");
    const resultProblem = problem.options[problem.selectedIndex].value;
    const region = document.querySelector("#region");
    const resultRegion = region.options[region.selectedIndex].value;
    const location = document.querySelector("#location");
    const resultLocation = location.options[location.selectedIndex].value;  
    const price = document.querySelector("#price").value;
    const devPrice = document.querySelector("#minimal_price").value;
    const vendor = document.querySelector("#vendor").value;
    const quantity = document.querySelector("#quantity").value;
    const tenderDate = document.querySelector("#tenderDate").value;

	      let errorsData = false;
	  
	  if(resultRegion != 17 || resultRegion != 18 || resultRegion != 19)
	  {
		  //if(resultLocation === 'none') {showMsg('Выберите локацию!'); errorsData = true;}
	  }
	  
	  
    if(resultRegion === 'none') {showMsg('Выберите регион!'); errorsData = true;}
    if(resultPortal === 'none') {showMsg('Выберите портал!'); errorsData = true;}
    if(resultCategory === 'none') {showMsg('Выберите категорию!'); errorsData = true;}
    if(resultProblem === 'none') {showMsg('Выберите уровень проблем!'); errorsData = true;}
    if(price === '') {showMsg('Заполните стоимость!'); errorsData = true;}
    if(devPrice === '') {showMsg('Заполните себестоимость!'); errorsData = true;}
    if(vendor === '') {showMsg('Заполните название поставщика!'); errorsData = true;}
    if(quantity === '') {showMsg('Заполните количество!'); errorsData = true;}
    if(tenderDate === '') {showMsg('Выберите дату!'); errorsData = true;}

    if(errorsData)
    {
      return;
    }

    let allParametrs = {};
    allParametrs.portal = resultPortal;
    allParametrs.category = resultCategory;
    allParametrs.problem = resultProblem;
    allParametrs.region = resultRegion;
    allParametrs.location = resultLocation;
    allParametrs.price = price;
    allParametrs.dev_price = devPrice;
    allParametrs.vendor = vendor;
    allParametrs.quantity = quantity;
    allParametrs.tenderDate = tenderDate;
  
    fsetRequest("./addTender.php", allParametrs, showMsg);
  }

</script>


<?php require_once "./assets/components/footer.php"; ?>


<script src="./assets/scripts/moduls/autocomplete.js"></script>
<script>

<?php

$companies = $con->db->query("SELECT `company` FROM `companies`");
$companies = $companies->fetchAll(PDO::FETCH_ASSOC);
$companyNames = array_column($companies, 'company');
$companyList = implode('\', \'', $companyNames);

echo 'var companeis = [\''.$companyList.'\'];';
?>

autocomplete(document.querySelector(".autocomplete_vendor"), companeis);

</script>
      


      
