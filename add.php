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
  .buttons {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }
  .buttons img {
    width: 35px;
    margin-right: 10px;
  }
</style>

<div id="mainContent">
  <div id="mainContentContainer">
    
    <div class="buttons">
      <img src="./assets/images/icons/interface/back.png" style="width: 30px;" class="hoverBtn" onclick="location.href = 'index.php';">
      <img src="./assets/images/icons/interface/add.png" class="hoverBtn" style="width: 30px;">
    </div>

    <div id="appendContainer">
      <div id="appendContent">
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
          <input type="text" onchange="startFilter();" id="price" placeholder="Цена">
          <input type="text" onchange="startFilter();" id="minimal_price" placeholder="Себистоимость">
          <input type="text" onchange="startFilter();" id="vendor" placeholder="Поставщик">
          <input type="text" onchange="startFilter();" id="quantity" placeholder="Количетсво">


      </div>
    </div>


    

<script src="./assets/scripts/fetch.js"></script>

<script>


</script>
<?php require_once "./assets/components/footer.php"; ?>
      
      
