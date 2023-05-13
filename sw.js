<div class="result  '.$colorClass.'">
  <img src="./assets/images/icons/'.$v['portal_name'].'.png" class="icon">
  <div class="vendor">
  <p>
    <span class="mini">Поставщик:</span> 
    echo $v['vendor'];
  </p>
  <p>
    <span class="mini">Категория:</span> 
    echo $categories[$v['category_name']]['category_name'].'</p>
</div>
<div class="category_regions">
  <p>
    <span class="mini">Регион:</span> 
    echo $regions[$v['regions_name']]['region_name'].'</p>
  <p>
    <span class="mini">Город:</span> 
    echo $locations[$v['location_name']]['location_name'].'</p>
</div>
<div class="price">
  <p>
    <span class="mini">Стоимость:</span> 
  echo $v['price'].' тг.</p>
  <p>
    <span class="mini">Себистоимость:</span> 
  echo $v['dev_price'].' тг.</p>
</div>
<div class="quantity">
  <h2>'.$v['quantity'].'</h2>
  <span class="mini">Количество:</span>
</div>
<div class="date">
  <h4>
    <span class="mini">Дата:</span>
    12.05.2022</h4>
</div>
<div class="profit">
  <p><b>'.$priceTenge.' тг.</b></p>
  <p><b>'.$priceProcent.' %</b></p>
</div>
            
</div>