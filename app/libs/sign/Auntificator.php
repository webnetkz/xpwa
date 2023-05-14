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
                return true;
            }
        }
        header("Location: ".$this->url);
    }
}