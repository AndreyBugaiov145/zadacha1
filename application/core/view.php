<?php

class View
{
	
	function generate($content_view, $template_view, $data = null)
	{
		include (ROOT.'/application/views/'.$template_view);
	}
}

?>