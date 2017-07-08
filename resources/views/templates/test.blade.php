@extends('layouts.app')

@section('content')

	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				@widget('form')
			</div>
		</div>
	</div>

	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				@widget('rating')
			</div>
		</div>
	</div>

@endsection

@section('scripts')
	<script type="text/javascript">
		$(function () {
 
			$("#rateYo").rateYo({
			rating: 3.6
			});
		 
		});
	</script>
@endsection