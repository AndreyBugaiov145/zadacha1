<?php
	class Route{

		static $routes;


		//Возвращям адрес запроса
		static function getURI()
		{
			if(!empty($_SERVER['REQUEST_URI'])){
				return trim($_SERVER['REQUEST_URI'],'/');
			}
		}

		static function start()
		{
			//Подключаем маршруты
			self::$routes = include (ROOT.'/application/config/routs.php');

			//Получаем адрес запроса 
			$uri = self::getURI();

			foreach (self::$routes as $uriPattern => $path) {
				

				if(preg_match("~$uriPattern~", $uri)){
					$internaleRoute = preg_replace("~$uriPattern~", $path, $uri);
					// контроллер  по умолчанию
					$controller_name = 'Main';
					//echo $controller_name;

					//Определение имени кантролера ,параметров и экшена
					$segments = explode('/', $internaleRoute);
					
					if(!empty($segments[0])){
						$model_name ="Model_".$segments[0];
						$controller_name =array_shift($segments);
					}
					$controller_name = 'Controller_'.$controller_name;
					$actionName= 'action_'.array_shift($segments);

					// подцепляем файл с классом модели	
					$model_file = strtolower($model_name).'.php';
					$model_path =ROOT.'/application/models/'.$model_file;
					if(file_exists($model_path)){
						include ROOT.'/application/models/'.$model_file;
					}
					// подцепляем файл с классом контроллера
					$controller_file  = strtolower($controller_name).'.php';
					$controller_path  = 'application/controllers/'.$controller_file;
					if(file_exists($controller_path)){
						include "application/controllers/".$controller_file;
					}else{
						self::ErrorPage404();
					}
					//Создаем экземпляр класса контролера 
					$controller = new $controller_name;
					if(method_exists($controller,$actionName)){
						$controller->$actionName($segments);
						break;
					}else{
						self::ErrorPage404();
					}
					
				}
			}
		}
		function ErrorPage404()
		{
	        $host = 'http://'.$_SERVER['HTTP_HOST'].'/';
	        header('HTTP/1.1 404 Not Found');
			header("Status: 404 Not Found");
			header('Location:'.$host.'404');
	    }
	}
?>