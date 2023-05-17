<?php

namespace App\Libs;
use PDO;

class Connector
{
	public $db;
	protected $active = true;
	protected $config = [
		'host' => 'srv-pleskdb37.ps.kz',
		'db_name' => 'martenkz_tender',
		'db_user' => 'martenkz_tender',
		'db_pass' => 'fepipe7611!!QQ!!QQ',
    'driver' => 'mysql',
    'charset' => 'utf8',
    'options' => [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
	];

	public function __construct()
	{		
		if($this->active)
		{
			$driver = $this->config['driver'];;
			$host = $this->config['host'].':3306';
			$db_name = $this->config['db_name'];
			$db_user = $this->config['db_user'];
			$db_pass = $this->config['db_pass'];
			$charset = $this->config['charset'];;
			$options = $this->config['options'];
			
			try {
				$this->db = new PDO("$driver:host=$host;dbname=$db_name;charset=$charset",$db_user,$db_pass,$options);
			} catch(PDOException $e) {
				exit('Ошибка подключения к базе данных'.$e);
			}
		}
	}

	public function __destruct()
    {
        $this->db = null;
    }
}
