<?php

namespace App\Libs;


class ParseCSV
{
	public $encodings = ['cp1251','UTF-8'];
	public $rowDelimiter = '';
	public $columnDelimiter = '';


	public function ParseTable($filePath, $lineNum)
	{
		if(!file_exists($file_path))
			return false;
		
		$cont = trim(file_get_contents($file_path));
		$encoded_cont = mb_convert_encoding($cont, 'UTF-8', mb_detect_encoding($cont, $file_encodings));
		unset($cont);
	
		if(!$rowDelimiter) // Разделитель строки
		{ 
			$rowDelimiter = "\r\n";
			if(false === strpos($encoded_cont, "\r\n"))
				$rowDelimiter = "\n";
		}
	
		$lines = explode($rowDelimiter, trim($encoded_cont));
		$lines = array_filter($lines);
		$lines = array_map('trim', $lines);
	
		// Авто-определим разделитель из двух возможных: ';' или ','.
		// для расчета берем не больше 30 строк
		if(!$columnDelimiter)
		{
			$lines10 = array_slice($lines, 0, 30);
	
			// если в строке нет одного из разделителей, то значит другой точно он...
			foreach($lines10 as $line)
			{
				if(!strpos($line, ',')) $columnDelimiter = ';';
				if(!strpos($line, ';')) $columnDelimiter = ',';
	
				if($columnDelimiter) break;
			}
	
			// если первый способ не дал результатов, то погружаемся в задачу и считаем кол разделителей в каждой строке.
			// где больше одинаковых количеств найденного разделителя, тот и разделитель...
			if(!$columnDelimiter)
			{
				$delimСounts = array(';'=>array(), ','=>array());
				foreach($lines10 as $line)
				{
					$delimСounts[','][] = substr_count( $line, ',' );
					$delimСounts[';'][] = substr_count( $line, ';' );
				}
	
				$delimСounts = array_map('array_filter', $delimСounts); // уберем нули
	
				// кол-во одинаковых значений массива - это потенциальный разделитель
				$delimСounts = array_map('array_count_values', $delimСounts);
	
				$delimСounts = array_map('max', $delimСounts); // берем только макс. значения вхождений
	
				if($delimСounts[';'] === $delimСounts[','])
					return array('Не удалось определить разделитель колонок.');
	
				$columnDelimiter = array_search(max($delimСounts), $delimСounts);
			}
		}
	
		$data = [];
		foreach($lines as $key => $line)
		{
			if($key == $num_line)
			{
				$data[] = str_getcsv( $line, $columnDelimiter); 
			}
			unset($lines[$key]);
		}
	
		if(isset($data[0]))
		{
			return $data[0];
		}
	}
}