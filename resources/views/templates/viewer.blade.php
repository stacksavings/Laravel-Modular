@extends('layouts.app')

@section('content')
	<div class="container">
		<div class="row">
			<div class="content">
				<div class="col-lg-12 col-lg-offset-3">
					@widget('panorama', ["data" => $data['panorama1']])
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="content">
				<div class="col-lg-12 col-lg-offset-3">
					@widget('panorama', ["data" => $data['panorama2']])
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
@endsection
