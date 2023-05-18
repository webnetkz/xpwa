<?php require_once "./assets/components/header.php";?>

<link rel="stylesheet" href="./assets/styles/index.css">
<link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">
<script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>

<div id="mainContent">
  <div id="mainContentContainer">
    
    <div class="buttons">
      <img src="./assets/images/icons/interface/reset.png" class="hoverBtn" onclick="location.reload();">
      <img src="./assets/images/icons/interface/add.png" style="width: 30px;" class="hoverBtn" onclick="location.href='add.php'">
      <img src="./assets/images/icons/interface/home.png" class="hoverBtn" onclick="location.href='index.php'">
    </div>

    <div id="filterContainer">
      <div id="filterContent">
        <div>

          <select id="portal" onchange="startFilter();">
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
          <input type="text" onchange="startFilter();" id="price" placeholder="Цена">
          <input type="text" onchange="startFilter();" id="minimal_price" placeholder="Себистоимость">
          <input type="text" onchange="startFilter();" id="vendor" placeholder="Поставщик/БИН">
          <input type="text" onchange="startFilter();" id="quantity" placeholder="Количетсво">
        </div>

      </div>
    </div>

    <style>
      .statistic {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 30px;
      }
      .statistic > div {
        width: 250px;
        height: 250px;
        margin: 5px;
        border-radius: 17px;
        background: var(--bgColor);
        padding: 30px;
        font-weight: 700;
        text-align: center;
      }
      .statistic > div:hover {
        cursor: pointer;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      }
      .staticticResult {
        margin-top: 50px;
        font-size: 3rem;
      }
      .statistic {
        text-transform: uppercase;
      }
    </style>

    <div class="resultsContainer">
      <div class="resultsContent">

          <div class="statistic">
            <div>
              <h3>Всего</h3>
              <p class="staticticResult" id="allTenders">0</p>
            </div>
            <div>
              <h3>Стоимость</h3>
              <p class="staticticResult" id="resPrice">0</p>
            </div>
            <div>
              <h3>Прибыль</h3>
              <p class="staticticResult" id="profit">0</p>
            </div>
            <div>
              <h3>Количество</h3>
              <p class="staticticResult" id="resQuantity">0</p>
            </div>
            <div style="width: 30%">
             <div class="ct-chart ct-perfect-fourth"></div>
            </div>
            <div>
              <h3>Себестоимость</h3>
              <p class="staticticResult" id="devPrice">0</p>
            </div>
            <div style="width: 30%">
             <div class="ct-chart2 ct-perfect-fourth"></div>
            </div>
          </div>

      </div>
    </div>

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
    const price = document.querySelector("#price").value;
    const devPrice = document.querySelector("#minimal_price").value;
    const vendor = document.querySelector("#vendor").value;
    const quantity = document.querySelector("#quantity").value;
  
  
    let filterParametrs = {};
    filterParametrs.portal = resultPortal;
    filterParametrs.category = resultCategory;
    filterParametrs.problem = resultProblem;
    filterParametrs.region = resultRegion;
    filterParametrs.location = resultLocation;
    filterParametrs.price = price;
    filterParametrs.dev_price = devPrice;
    filterParametrs.vendor = vendor;
    filterParametrs.quantity = quantity;
  
    fsetRequest("./filter.php", filterParametrs, showStatistics);
  }

  startFilter();

  function showStatistics(data)
  {
    const resultData = JSON.parse(data);
    const countTenders = resultData.length;

    let price = 0;
    let devPrice = 0;
    let profit = 0;
    let profitProcent = 0;
    let quantity = 0;

    for(let el of resultData)
    {
      price += Number(el.price);
      devPrice += Number(el.dev_price);
      quantity += Number(el.quantity);
    }
    
    price = Number(price) / Number(countTenders);
    devPrice = Number(devPrice) / Number(countTenders);
    profit = price - devPrice;
    profitProcent = Math.round(Math.round(profit / (Number(price)/100)) / countTenders);


    console.log(resultData);

    document.querySelector("#allTenders").innerText = countTenders;
    document.querySelector("#resPrice").innerText = !isNaN(price) ? price : 0;
    document.querySelector("#profit").innerText = !isNaN(profit) ? profit : 0 +"тг "+ (!isNaN(profitProcent) ? profitProcent : 0) +"%";
    document.querySelector("#resQuantity").innerText = quantity;

    


    document.querySelector("#devPrice").innerText = !isNaN(devPrice) ? devPrice : 0 +"тг ";


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

      startFilter();

    });
  }

</script>


<script>
  
var data = {
  labels: ['1', '2', '3', '4', '5'],
  series: [
    [3, 3, 3, 2, 0]
  ]
};

var data2 = {
  labels: ['PC', 'Note', 'Mono', 'Panel'],
  series: [
    [0, 1, 2, 3]
  ]
};

var options = {
  width: 300,
  height: 200
};

new Chartist.Line('.ct-chart', data, options);
new Chartist.Line('.ct-chart2', data2, options);

</script>


<?php require_once "./assets/components/footer.php"; ?>
      
      
