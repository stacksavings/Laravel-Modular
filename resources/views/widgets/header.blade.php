<nav class="navbar navbar-default">
	<div class="navbar-header navbar-left">
		<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
			<span class="sr-only">Toggle navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
		<h1><a class="navbar-brand" href="{{ url('/') }}">{{ $config['main_title'] }}<span>{{ $config['slogan'] }}</span></a></h1>
	</div>
	<!-- Collect the nav links, forms, and other content for toggling -->
	<div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
		<nav class="link-effect-3" id="link-effect-3">
			<ul class="nav navbar-nav">
				@foreach($config['menu'] as $menu)
					@if($loop->iteration == 1)
						<li class="active"><a href="{{ url($menu['link_target']) }}" data-hover="{{ $menu['link_name'] }}">{{ $menu['link_name'] }}</a></li>
					@else
						<li><a href="{{ url($menu['link_target']) }}" data-hover="{{ $menu['link_name'] }}">{{ $menu['link_name'] }}</a></li>
					@endif
				@endforeach
			</ul>
		</nav>
	</div>
</nav>	