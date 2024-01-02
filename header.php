<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Documentation xPWA</title>
  <link rel="icon" type="image/png" href="./logo.png">
  <link rel="stylesheet" href="./xpwa/styles/xpwa.css">
  <script async defer type="module" src="../xpwa.js" ></script>
</head>
<body>

  <header-x fixed >
    <logo-x src="/logo.png"></logo-x>
    <menu-x>
      <!-- <lang-x>123</lang-x> -->
      <!-- <change-theme-x></change-theme-x> -->
      <button-x link="/index.php">Главная</button-x>
      <button-x link="/quick-start.php">Быстрый старт</button-x>
      <button-x link="/documentation.php">Документация</button-x>
      <button-x link="/test.php">test</button-x>

      <button-x onclick="document.body.innerHTML += `<sidebar-x right><h1>Content</h1></sidebar-x>`">Sidebar</button-x>
    </menu-x>
  </header-x>