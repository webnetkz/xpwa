<?php require_once "./assets/components/header.php";?>

<style>
  .resultsContainer {
    border: 2px solid var(--red);
    margin-top: 2rem;
    box-shadow: 0 1rem 3rem rgba(0,0,0,0.12);
    border-radius: 0.3rem;
    min-height: 200px;
    color: black;
  }
  .result {
    border: 1px solid var(--red);
    border-radius: 0.3rem;
    margin: 3px;
    padding: 5px;
    min-height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
    border-right: 17px solid rgb(244, 244, 244);
    background: white;
  }
  .result:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .quantity {
    text-align: center;
  }
  .result > .icon {
    width: 50px;
  }
  .profit p {
    font-size: 1.2rem;
  }
  span.mini {
    font-size: 0.7rem;
  }
  .green {
    border-right: 17px solid green;
  }
  .yellow {
    border-right: 17px solid yellow;
  }
  .red {
    border-right: 17px solid red;
  }
  .black {
    border-right: 17px solid black;
  }
</style>

<div id="mainContent">
  <div id="mainContentContainer">
    
    <div id="filterContainer">
      <div id="filterContent">
        <div>

          <select id="portal">
            <option value="none" disabled selected>Наименование рынка</option>
            <?php
              $portals = $con->db->query("SELECT * FROM `portals`");
              $portals = $portals->fetchAll(PDO::FETCH_ASSOC);

              foreach($portals as $k => $v)
              {
                echo '<option value="'.$v['portal_name'].'">'.$v['portal_name'].'</option>';
              }
            ?>
          </select>


          <select id="category">;
            <option value="none" disabled selected>Категория</option>;
            <?php
              $categories = $con->db->query("SELECT * FROM `categories`");
              $categories = $categories->fetchAll(PDO::FETCH_ASSOC);

              foreach($categories as $k => $v)
              {
                echo '<option value="'.$v['category_name'].'">'.$v['category_name'].'</option>';
              }
            ?>
          </select>

          <select id="problem">;
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

          <select id="region">;
            <option value="none" disabled selected>Регион</option>;
            <?php
              $regions = $con->db->query("SELECT * FROM `regions`");
              $regions = $regions->fetchAll(PDO::FETCH_ASSOC);

              foreach($regions as $k => $v)
              {
                echo '<option value="'.$v['region_name'].'">'.$v['region_name'].'</option>';
              }
            ?>
          </select>
          <select id="location">;
            <option value="none" disabled selected>Город</option>;
            <?php
              $locations = $con->db->query("SELECT * FROM `locations`");
              $locations = $locations->fetchAll(PDO::FETCH_ASSOC);
  
              foreach($locations as $k => $v)
              {
                echo '<option value="'.$v['location_name'].'">'.$v['location_name'].'</option>';
              }
            ?>
          </select>
  
        </div>
        <div>
          <input type="text" id="price" placeholder="Цена">
          <input type="text" id="quantity" placeholder="Количетсво">
          <input type="text" id="minimal_price" placeholder="Себистоимость">
          <input type="text" id="vendor" placeholder="Поставщик">
        </div>

      </div>
    </div>


    <div class="resultsContainer">
      <div class="resultsContent">

        <?php

          $allTenders = $con->db->query("SELECT * FROM `tenders`");
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
            $priceProcent = round((int)$priceTenge / (int)$procent, 2);

            echo '<div class="result  '.$colorClass.'">';
              echo '<img src="./assets/images/icons/'.$v['portal_name'].'.png" class="icon">';
              echo '<div class="vendor">';
              echo '<p>';
                echo '<span class="mini">Поставщик:</span> ';
                echo $v['vendor'];
              echo '</p>';
            echo '</div>';
            echo '<div class="category_regions">';
              echo '<p>';
                echo '<span class="mini">Регион:</span> ';
                echo $regions[$v['regions_name']]['region_name'].'</p>';
              echo '<p>';
                echo '<span class="mini">Город:</span> ';
                echo $locations[$v['city_name']]['city_name'].'</p>';
            echo '</div>';
            echo '<div class="price">';
              echo '<p>';
                echo '<span class="mini">Стоимость:</span> ';
              echo $v['price'].' тг.</p>';
              echo '<p>';
                echo '<span class="mini">Себистоимость:</span> ';
              echo $v['dev_price'].' тг.</p>';
            echo '</div>';
            echo '<div class="quantity">';
              echo '<h2>'.$v['quantity'].'</h2>';
              echo '<span class="mini">Количество:</span>';  
            echo '</div>';
            echo '<div class="date">';
              echo '<h4>';
                echo '<span class="mini">Дата:</span>';
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

<script>

  function getURL(parameterName)
  {
    var url = new URL(window.location.href);
    var parameterValue = url.searchParams.get(parameterName);
    return parameterValue;
  }

  /**
   * Автоподгрузка ранее выбранных значений фильтра
   * 
   */
  if(getURL("portal"))
  {
    const portalSave = getURL("portal");
    const portal = document.querySelector("#portal");
    portal.options[0].value = portalSave;
    portal.options[0].innerText = portalSave;
  }

  if(getURL("category"))
  {
    const categorySave = getURL("category");
    const category = document.querySelector("#category");
    category.options[0].value = categorySave;
    category.options[0].innerText = categorySave;
  }


  /**
   * Обработчики событий для фильтра
   * 
   */
  let portalSelect = document.querySelector("#portal");
  portalSelect.addEventListener('click', () => {
    const portal = document.querySelector("#portal");
    const resultPortal = portal.options[portal.selectedIndex].value;

    location.href = "./index.php?portal="+resultPortal;
  });

  let categorySelect = document.querySelector("#category");
  categorySelect.addEventListener('click', () => {
    const category = document.querySelector("#category");
    const resultCategory = category.options[category.selectedIndex].value;

    if(getURL("portal"))
    {
      location.href = "./index.php?category="+resultCategory+"&portal="+getURL("portal");
    } else {
      location.href = "./index.php?category="+resultCategory;
    }
  });
</script>

<script src="./assets/scripts/fetch.js"></script>
<?php require_once "./assets/components/footer.php"; ?>
      
      
