<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="keywords" content="" />
	<meta name="description" content=""/>
	<meta name="viewport" content="width=device-width; initial-scale=1.0">
	<link rel="stylesheet" href="../../css/style.css">
	<title>Тустовое задание 1</title>
</head>
<body>
	<div class="backgroundPage"></div>
	<div class="page">
		<header>
			<div class="flex">
				<div><a href="/"><span class="titlePage" title="Главная">ZOO</span></a></div>
				<div>
					<span id="contacts">Контакты</span>
					<div class="showContacts"><span>Bugaiov.andrey@gmail.com</span></div>
				</div>
			</div>
		</header>
		<div class="wraper">
			<?php
				include_once  (ROOT.'/application/views/'.$content_view);
			?>
		</div>
		<footer></footer>
	</div>	
	<script type="text/javascript" src="../../js/js.js"></script>	
</body>
</html>