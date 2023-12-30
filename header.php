<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Documentation xPWA</title>
  <link rel="icon" type="image/png" href="./logo.png">
</head>
<body>

  <header-x>
    <logo-x src="/logo.png"></logo-x>
    <menu-x>
      <lang-x>123</lang-x>
      <!-- <change-theme-x></change-theme-x> -->
      <button-x link="/index.php">Главная</button-x>
      <button-x link="/quick-start.php">Быстрый старт</button-x>
      <button-x link="/documentation.php">Документация</button-x>
      <button-x link="/test.php">test</button-x>

      <button-x onclick="document.body.innerHTML += `<tos-x position='bottom-right'>Message</tos-x>`">Tos</button-x>
      <button-x onclick="document.body.innerHTML += `<sidebar-x position='left'><h1>Content</h1><div><card-3d-x style='color: black'>Card-3D<h2>Hover me</h2></card-3d-x></div></sidebar-x>`">Sidebar</button-x>
    </menu-x>
  </header-x>