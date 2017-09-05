@extends('layouts.mansion')

@section('content')
<!-- service-breadcrumb -->
	<div class="service-breadcrumb">
		<div class="container">
			<h2>Mail Us</h2>
		</div>
	</div>
<!-- //service-breadcrumb -->

<!-- mail -->
	<div class="mail">
		<div class="container">
			<div class="w3layouts_mail_grid">
				<div class="col-md-4 w3layouts_mail_grid_left">
					<div class="w3layouts_mail_grid_left1">
						<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
					</div>
					<div class="w3layouts_mail_grid_left2">
						<h3>Mail Us</h3>
						<a href="mailto:info@example.com">info@example.com</a>
					</div>
				</div>
				<div class="col-md-4 w3layouts_mail_grid_left">
					<div class="w3layouts_mail_grid_left1">
						<span class="glyphicon glyphicon-home" aria-hidden="true"></span>
					</div>
					<div class="w3layouts_mail_grid_left2">
						<h3>Address</h3>
						<p>PO Box 97845 Baker , Australia</p>
					</div>
				</div>
				<div class="col-md-4 w3layouts_mail_grid_left">
					<div class="w3layouts_mail_grid_left1">
						<span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>
					</div>
					<div class="w3layouts_mail_grid_left2">
						<h3>Phone</h3>
						<p>+(0121) 121 121</p>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>

	<div class="map">
		<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d50416.99204102258!2d144.93732617279937!3d-37.83543431360044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1saustralia+real+estate!5e0!3m2!1sen!2sin!4v1470915593791" style="border:0"></iframe>
	</div>
	<div class="mail-bottom">
		<div class="container">
			<div class="col-md-5 w3_agileits_mail_bottom_left">
				<h3>leave a message</h3>
			</div>
			<div class="col-md-7 w3_agileits_mail_bottom_right">
				<form action="#" method="post">
					<input type="text" name="Name" placeholder="Name" required="">
					<input type="email" name="Email" placeholder="Email" required="">
					<input type="text" name="Subject" placeholder="Subject" required="">
					<input type="text" name="Website" placeholder="Website" required="">
					<textarea name="Message" placeholder="Message..." required=""></textarea>
					<input type="submit" value="Submit Now">
				</form>
			</div>
			<div class="clearfix"> </div>
		</div>
	</div>
 <!-- //mail -->
@endsection