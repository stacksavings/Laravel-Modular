<div class="banner custom-banner" style="background: url({{ $data['background'] or '../images/banner.jpg' }})">
	<div class="container">
		@widget('header', [
	        "main_title" => $common["main_title"],
	        "slogan" => $common["slogan"],
	        "menu" => $common["menu"]
	    ])
		<div class="w3l_banner_info">
			<section class="slider">
				<div class="flexslider">
					<ul class="slides">
						<li>
							<!-- TODO: the two text areas for this should be editable on a page using
							the text widget -->
							<div class="wthree_banner_info_grid">
								<h3><i>Editable-caption-1</i><span>editable-caption-2</span></h3>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</div>			
	</div>
</div>