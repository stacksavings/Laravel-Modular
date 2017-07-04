@extends('layouts.app')

@section('content')
	<div class="container">
		<div class="row">
			<div class="content">
				<div class="col-lg-12 col-lg-offset-3">
					@widget('panorama')
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
@endsection

@section('scripts')

	<script>
		pannellum.viewer('panorama', {
		    "type": "equirectangular",
		    "panorama": "/images/alma.jpg",
		    "autoLoad": true
		});
	</script>

@endsection