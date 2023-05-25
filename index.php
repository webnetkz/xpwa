<?php require_once "./assets/components/header.php";?>

<link rel="stylesheet" href="./assets/styles/index.css">

<div id="mainContent">
  <div id="mainContentContainer">
    
    <div class="buttons">
      <img src="./assets/images/icons/interface/home.png" class="hoverBtn" onclick="location.href='index.php'">
      <img src="./assets/images/icons/interface/reset.png" class="hoverBtn" onclick="localStorage.clear();location.reload();">
      <img src="./assets/images/icons/interface/add.png" style="width: 30px;" class="hoverBtn" onclick="location.href='add.php'">
      <img src="./assets/images/icons/interface/data.png" class="hoverBtn" onclick="location.href='statistic.php'">
    </div>

    <div id="filterContainer">
      <div id="filterContent">
        <div style="margin-top: 5px;">

          <select id="portal" onchange="startFilter();">
            <option value="none" disabled selected>Наименование рынка</option>
            <?php
              $portals = $con->db->query("SELECT * FROM `portals`");
              $portals = $portals->fetchAll(PDO::FETCH_ASSOC);
              
              $locations = $con->db->query("SELECT * FROM `locations`");
              $locations = $locations->fetchAll(PDO::FETCH_ASSOC);
			        echo '<script> localStorage.setItem("locations", \''.json_encode($locations).'\');</script>';
			  $companies = $con->db->query("SELECT * FROM `companies`");
              $companies = $companies->fetchAll(PDO::FETCH_ASSOC);
			        echo '<script> localStorage.setItem("companies", \''.json_encode($companies).'\');</script>';
              
              foreach($portals as $k => $v)
              {
                echo '<option value="'.$v['portal_name'].'">'.$v['portal_name'].'</option>';
              }
            ?>
          </select>


          <select id="category" onchange="startFilter();">;
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

          <select id="problem" onchange="startFilter();">;
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
          <select id="location" onchange="startFilter();">;
            <option value="none" disabled selected>Город</option>;
            <?php
              foreach($locations as $k => $v)
              {
                echo '<option style="display: none" class="hiddenLocations" parent="'.$v['parent_region'].'" value="'.$v['location_name'].'">'.$v['location_name'].'</option>';
              }
            ?>
          </select>
          </div>
        <div>
          <input type="text" onchange="startFilter();" style="width: 100px" id="price_from" placeholder="Цена от">
          <input type="text" onchange="startFilter();" style="width: 100px" id="price_to" placeholder="Цена до">
          <input type="text" onchange="startFilter();" id="minimal_price" placeholder="Себистоимость">
          <input type="text" onchange="startFilter();" id="vendor" placeholder="Поставщик/БИН">
          <input type="text" onchange="startFilter();" id="quantity" placeholder="Количетсво">
        
        </div>
        <div style="margin: 5px;">
          <input type="date" onchange="startFilter();" id="date_from">
          <input type="date" onchange="startFilter();" id="date_to">
        </div>

      </div>
    </div>


    <div class="resultsContainer">
      <div class="resultsContent">

        <?php

          $allTenders = $con->db->query("SELECT * FROM `tenders` LIMIT 50");
          $allTenders = $allTenders->fetchAll(PDO::FETCH_ASSOC);
          

          foreach($allTenders as $k => $v)
          {
            $colorClass = '';
            if(isset($problemLevels[$v['problem_level']]))
            {
              switch($problemLevels[$v['problem_level']]['problem_name'])
              {
                case 'Нет проблем':
                break;
                case 'Средний уровень проблем':
                  $colorClass = 'green';
                break;
                case 'Высокий уровень проблем':
                  $colorClass = 'yellow';
                break;
                case 'Тяжелый уровень проблем':
                  $colorClass = 'red';
                break;
                case 'Нерешаемо':
                  $colorClass = 'black';
                break;
              }
            }
            
            $priceTenge = $v['price'] - $v['dev_price'];
            $procent = ((int)$v['price'] / 100);
            // $core->x($procent);
            $priceProcent = round((int)$priceTenge / (int)$procent, 2);

            echo '<div class="result  '.$colorClass.'">';
              echo '<img src="./assets/images/icons/'.$v['portal_name'].'.png" class="icon">';
              echo '<div class="vendor">';
              echo '<p>';
                echo '<span class="mini">Поставщик:</span> ';
				foreach($companies as $k => $val)
				{
					if($val['id'] == $v['vendor'])
					{
						echo $val['company'];
					}
				}
                
              echo '</p>';
              echo '<p>';
                echo '<span class="mini">Категория:</span> ';
                echo $categories[$v['category_name'] - 1]['category_name'].'</p>';
            echo '</div>';
            echo '<div class="category_regions">';
              echo '<p>';
                echo '<span class="mini">Регион:</span> ';
                echo $regions[$v['regions_name']]['region_name'].'</p>';
              echo '<p>';
                echo '<span class="mini">Город:</span> ';
                echo $locations[$v['location_name']]['location_name'].'</p>';
            echo '</div>';
            echo '<div class="price">';
              echo '<p>';
                echo '<span class="mini">Стоимость:</span> ';
              echo $v['price'].' тг.</p>';
              echo '<p>';
                echo '<span class="mini">Себистоимость:</span><br> ';
              echo $v['dev_price'].' тг.</p>';
            echo '</div>';
            echo '<div class="quantity">';
              echo '<h2>'.$v['quantity'].'</h2>';
              echo '<span class="mini">Количество:</span>';  
            echo '</div>';
            echo '<div class="date">';
              echo '<h4>';
                echo '<span class="mini">Дата:</span><br>';
                echo '12.05.2022</h4>';
            echo '</div>';
            echo '<div class="profit">';
              echo '<p><b>'.$priceTenge.' тг.</b></p>';
              echo '<p><b>'.$priceProcent.' %</b></p>';
            echo '</div>';
            
            echo '</div>';
          }

        ?>

  </div>
</div>

<script src="./assets/scripts/fetch.js"></script>

<script>

  function startFilter()
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
    const price_from = document.querySelector("#price_from").value;
    const price_to = document.querySelector("#price_to").value;
    const devPrice = document.querySelector("#minimal_price").value;
    const vendor = document.querySelector("#vendor").value;
    const quantity = document.querySelector("#quantity").value;
    const date_from = document.querySelector("#date_from").value;
    const date_to = document.querySelector("#date_to").value;
  
    let filterParametrs = {};
    filterParametrs.portal = resultPortal;
    filterParametrs.category = resultCategory;
    filterParametrs.problem = resultProblem;
    filterParametrs.region = resultRegion;
    filterParametrs.location = resultLocation;
    filterParametrs.price_from = price_from;
    filterParametrs.price_to = price_to;
    filterParametrs.dev_price = devPrice;
    filterParametrs.vendor = vendor;
    filterParametrs.quantity = quantity;
    filterParametrs.date_from = date_from;
    filterParametrs.date_to = date_to;
  
    fsetRequest("./filter.php", filterParametrs, showTenders);
  }

  function showTenders(data)
  {
    if(data[0] == '<') return;
	  let results = JSON.parse(data);
   	let resultsContent = document.querySelector('.resultsContent');
	  resultsContent.innerHTML = '';
	  let problems = localStorage.getItem('problems');
	  problems = JSON.parse(problems);
	  let regions = localStorage.getItem('regions');
	  regions = JSON.parse(regions);
	  let categories = localStorage.getItem('categories');
	  categories = JSON.parse(categories);
	  let locations = localStorage.getItem('locations');
	  locations = JSON.parse(locations);
	  
	  results.forEach((el) => {
		  let oneProcentProfit = Number(el.price) / 100;
		  let profit = Number(el.price) - Number(el.dev_price);
		  let profitProcent = profit / oneProcentProfit;

      let colorClass = el.problem_level;

      switch(colorClass)
      {
        case 1:
          colorClass = "";
        break;
        case 2:
          colorClass = 'green';
        break;
        case 3:
          colorClass = 'yellow';
        break;
        case 4:
          colorClass = 'red';
        break;
        case 5:
          colorClass = 'black';
        break;
      }

		  const companies = JSON.parse(localStorage.getItem('companies'));
		  let company = '';
		  companies.forEach((elem) => {
			if(elem.id == el.vendor)
			{
				company = elem.company;
			}
		  });
		  let templateBlock = `<div class="result ${colorClass}">
  <img src="./assets/images/icons/${el.portal_name}.png" class="icon">
  <div class="vendor">
  <p>
    <span class="mini">Поставщик:</span>
    ${company}
  </p>
  <p>
    <span class="mini">Категория:</span> 
    ${categories[Number(el.category_name) - 1].category_name}</p>
</div>
<div class="category_regions">
  <p>
    <span class="mini">Регион:</span> 
    ${regions[Number(el.regions_name) - 1].region_name}</p>
  <p>
    <span class="mini">Город:</span> 
    ${locations[Number(el.location_name) - 1].location_name}</p>
</div>
<div class="price">
  <p>
    <span class="mini">Стоимость:</span> 
  ${el.price} тг.</p>
  <p>
    <span class="mini">Себистоимость:</span> 
  ${el.dev_price} тг.</p>
</div>
<div class="quantity">
  <h2>${el.quantity}</h2>
  <span class="mini">Количество:</span>
</div>
<div class="date">
  <h4>
    <span class="mini">Дата:</span><br>
    ${el.date}</h4>
</div>
<div class="profit">
  <p><b>${profit} тг.</b></p>
  <p><b>${Math.round(profitProcent)} %</b></p>
</div>
            
</div>`;
		  resultsContent.innerHTML += templateBlock;
	  });
  }

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
    
    startFilter();
  }

</script>

<?php require_once "./assets/components/footer.php"; ?>
      
      
