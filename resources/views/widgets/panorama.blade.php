<div class="panorama">
	@if(empty($config['data']['width']) and empty($config['data']['height']))
		<div id="{{ $config['data']['id'] }}" data-image="{{ $config['data']['image'] }}" style="width:{{ $config['width'] }}; height:{{ $config['height'] }};"></div>
	@else
		@if(empty($config['data']['width']))
			<div id="{{ $config['data']['id'] }}" data-image="{{ $config['data']['image'] }}" style="width:{{ $config['width'] }}; height:{{ $config['data']['height'] }};"></div>
		@else
			<div id="{{ $config['data']['id'] }}" data-image="{{ $config['data']['image'] }}" style="width:{{ $config['data']['width'] }}; height:{{ $config['height'] }};"></div>
		@endif
	@endif
</div>

