<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Documentation xPWA</title>
  <link rel="icon" type="image/png" href="./logo.png">
</head>
<body>

  <header-x position="fixed">
    <menu-x>
      <button-x link="/index.php">Home</button-x>
      <button-x link="/pages/index.php">Components</button-x>
      <button-x onclick="document.body.innerHTML += `<tos-x>Message</tos-x>`">Tos</button-x>
      <button-x onclick="document.body.innerHTML += `<sidebar-x><h1>Content</h1><div><card-3d-x style='color: black'>Card-3D<h2>Hover me</h2></card-3d-x></div></sidebar-x>`">Sidebar</button-x>
    </menu-x>
  </header-x>