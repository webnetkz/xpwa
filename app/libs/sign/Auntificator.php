<?php

namespace App\Libs\Sign;

class Auntificator
{
   		private $key = 'qdf7h-wa5ew-lwu7i';
		private $key2 = '3sw2w-saf231-3h9se';
	    private $key3 = 'fa32s-fsdg2-saf32';
	    private $key4 = 'asdf2-asf12-li324';
	    private $key5 = 'sdaf88-2345gd-asdf32';
	    private $key6 = 'asdf234-jli4-lwu7i';
	    private $key7 = 'li7-djk234jk-124kl';
	    private $key8 = 'adsf1-avk12-as13h';
	    private $key9 = '6kl3h-lkj82kj-asfd2';
	    private $key10 = '23kj8-salwi3-asfjb62';

    private $url = 'https://marten.kz';

    public function __construct($key)
    {
        if(isset($key) && !empty($key))
        {
            if($key === $this->key || $key === $this->key2 || $key === $this->key3 || $key === $this->key4 || $key === $this->key5 || $key === $this->key6 || $key === $this->key7 || $key === $this->key8 || $key === $this->key9 || $key === $this->key10 )
            {
                setcookie("secret", $this->key, time()+3600*24*30); 
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