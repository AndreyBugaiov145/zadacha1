<?php

class Controller_Main extends Controller
{	
	function __construct()
	{	
		$this->model = new Model_Main();
		$this->view = new View();
	}
	function action_index()
	{	
		$data= $this->model->get_ALL_data();
		$this->view->generate('main_view.php', 'template_view.php',$data);
		return true ;
	}
	function action_one($arr)
	{	
		$friendlly = $arr[0];
		$data= $this->model->get_one_data($friendlly);
		$this->view->generate('one_view.php', 'template_view.php',$data);
		return true ;
	}
}

?>