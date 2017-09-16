	<div class="work">
		<div class="container">
			@if(isset($data['content_title']) and !empty($data['content_title']))
				<p class="wthree_para">{{ $data['content_title'] }}</p>
			@endif

			@if(isset($data['content_text']) and !empty($data['content_text']))
				<h3 class="w3ls_head">{{ $data['content_text'] }}</h3>
			@endif			
		</div>
	</div>