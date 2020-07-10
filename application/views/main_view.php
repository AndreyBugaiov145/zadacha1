
<div class='grid'>
	<?php  foreach($data as $row){
		echo "<div>
			<a href='main/".$row['friendly']."' >
				<div class='box'>	
					<div class='imgContainer'><img src='../../img/".$row['img']."' alt='cat'></div>
					<div class='boxContent'>
							<p>".$row['title']."</p>
							<span>
								".$row['description']."
							</span>
					</div>
				</div>
			</a>
		</div>";
		}?>
</div>
