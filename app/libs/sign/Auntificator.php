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
                setcookie("secret", 'secret', time()+3600*24*30); 
                return true;
            }
        }
        
        if(isset($_COOKIE['secret']) && htmlspecialchars($_COOKIE['secret']) == 'secret')
        {
            return;
        }
        echo '<script> location.href = "'.$this->url.'" </script>';
    }
}