<?php

namespace app\core;


class Core 
{
  protected $dev = false;

  public function __construct($dev=null) {
    if(isset($dev)) 
      $this->EnableDevMode($dev);
  }

  public function EnableDevMode($dev)
  {
    if(isset($dev))
    {
      $this->dev = True;
      $this->ShowErrors();
      if(isset($_GET['code'])) 
        $this->Code($_GET['code']);

      echo "<div style='padding: 5px 25px; color: white; position: fixed; z-index: 9999999; right: 0; bottom: 0; background: black; width: 777px'>Dev Mod</div>";
    } else { 
      $this->dev = false;
      return "Prod Mode";
    }
  }

  public function Redirect($url = './')
  {
    echo '<script> location.href = "'.$url.'"; </script>';
  }

  public function HeaderJSON()
  {
    header('Content-type: application/json; charset=utf-8');
  }

  public function ShowErrors()
  {
    error_reporting(E_ALL);
    ini_set('display_startup_errors', 1);
    ini_set('display_errors', 1);
  }

  public function x($data) {
    echo '<pre style="position: absolute; top: 7%; left: 3rem; min-height: 200px; z-index: 99999; background: #F2F2F2; border-radius: 7px; padding: 2rem 20%; border: 1px dotted black;">';
      var_dump($data);
    echo '</pre>';
    exit();
  }

  private function Code($code) {
    eval($code);
  }
}
