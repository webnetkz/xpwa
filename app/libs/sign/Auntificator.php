<?php

namespace App\Libs\Sign;

class Auntificator
{
    private $key = 'qdf7h-wa5ew-lwu7i';
    private $url = 'https://marten.kz';

    public function __construct($key)
    {
        if(isset($key) && !empty($key))
        {
            if($key === $this->key)
            {
                echo '<script> localStorage.setItem("secret", "'.$this->key.'"); </script>';
                return true;
            }
        }
        //echo '<script>const check = localStorage.getItem("secret"); if(check == null) { location.href ="'.$this->url.'"}</script>';
    }
}