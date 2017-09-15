<!-- banner -->
	<div class="banner1 custom-banner" style="background: url({{ $data['background'] or '../images/banner.jpg' }})">
		<div class="container">
			@widget('header', [
		        "main_title" => $common["main_title"],
		        "slogan" => $common["slogan"],
		        "menu" => $common["menu"]
		    ])	
		</div>
	</div>
<!-- //banner -->