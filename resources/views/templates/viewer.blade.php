@extends('layouts.app')

@section('content')
	<div class="container">
		<div class="row">
			<div class="content">
				<div class="col-lg-12 col-lg-offset-3">
					@widget('panorama', ["image" => $data['panorama1']['image'], 'wrapper' => $data['panorama1']['wrapper'], 'id' => $data['panorama1']['id']])
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="content">
				<div class="col-lg-12 col-lg-offset-3">
					@widget('panorama', ["image" => $data['panorama2']['image'], 'wrapper' => $data['panorama1']['wrapper'], 'id' => $data['panorama2']['id']])
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
@endsection
