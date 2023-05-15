<footer>

</footer>

<script src="./assets/scripts/moduls/showMsg.js"></script>
<script>
  initMsg();
</script>
<?php
      
  /*================================================*/
  // Отображение сообщения
  /*================================================*/
      
  if(isset($_GET['msg']) && !empty($_GET['msg']))
  {
    if(isset($_GET['succMsg']) && !empty($_GET['succMsg'])) 
    {
      // Отображение зеленого сообщения
      echo "<script>showMsg('".$_GET['msg']."', true);</script>";
    } else {
      // Отображение красного сообщения
      echo "<script>showMsg('".$_GET['msg']."');</script>";
    }

    unset($_GET['msg']);
    unset($_GET['succMsg']);
  }

?>
