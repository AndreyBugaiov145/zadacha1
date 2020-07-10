<?php

class Model_Main extends Model
{	
	public function get_ALL_data()
	{	

		$misqli = new mysqli("localhost" , "root" ,"","mybase");
		$misqli->query("SET NAMES 'utf8'");
		$data = $misqli->query("SELECT * FROM `pages`");
		$misqli->close();
		function FunctionName($mas)
		{
			while (($row = $mas->fetch_assoc())!=false) {
				$arr[]=$row;
			}
			return $arr;
		}
		$arr  = FunctionName($data);
		return $arr;
	}
	public function get_one_data($friendlly)
	{	
		$misqli = new mysqli("localhost" , "root" ,"","mybase");
		$misqli->query("SET NAMES 'utf8'");
		$data = $misqli->query("SELECT title, img , description FROM  `pages` WHERE  `friendly` LIKE '".$friendlly."'");

		$misqli->close();
		function FunctionName($mas)
		{
			$row = $mas->fetch_assoc();
			return $row;
		}
		$arr  = FunctionName($data);
		return $arr;
	}
}
?>