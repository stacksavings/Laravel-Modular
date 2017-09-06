@extends('layouts.mansion')

@section('header')
    @include('templates.mansion.second-banner')
@endsection

@section('content')
<!-- about -->
	<div class="about">
		<div class="container">
			<p class="wthree_para">Description</p>
			<h3 class="w3ls_head">brief description of mansion</h3>
			<div class="wthree_about_grids">
				<div class="col-md-6 wthree_about_grid_left">
					<img src="{{ asset('images/13.jpg') }}" alt=" " class="img-responsive" />
				</div>
				<div class="col-md-6 wthree_about_grid_right">
					<h4>Cras ante tortor, egestas in vulputate eget</h4>
					<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet 
						nibh at ligula pharetra, eu semper dui tristique. Phasellus mi sapien, 
						vestibulum non pharetra non, dictum a purus.</p>
					<div class='bar_group'>
						<div class='bar_group__bar thin elastic' label='Real Estate' value='80'></div>
						<div class='bar_group__bar thin elastic' label='Development' value='60'></div>
						<div class='bar_group__bar thin elastic' label='Process' value='160'></div>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>
<!-- //about -->
<!-- choose-us -->
	<div class="choose-us">
		<div class="col-md-3 w3ls_choose_us_left">
			<img src="{{ asset('images/14.jpg') }}" alt=" " class="img-responsive" />
		</div>
		<div class="col-md-6 w3ls_choose_us_right">
			<h3>why choose us</h3>
			<p>Curabitur vel justo nisl. Cras ante tortor, egestas in vulputate eget.
				Donec ornare sed diam sit amet tincidunt aliquam felis sagittis viverra.</p>
			<div class="col-md-6 w3ls_choose_us_right1">
				<ul>
					<li><a href="single.html"><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>professional variations</a></li>
					<li><a href="single.html"><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>guaranteed</a></li>
					<li><a href="single.html"><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>consulting</a></li>
				</ul>
			</div>
			<div class="col-md-6 w3ls_choose_us_right1">
				<ul>
					<li><a href="single.html"><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>happy clients</a></li>
					<li><a href="single.html"><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>clean design</a></li>
					<li><a href="single.html"><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>advertise</a></li>
				</ul>
			</div>
			<div class="clearfix"> </div>
		</div>
		<div class="col-md-3 w3ls_choose_us_left">
			<img src="{{ asset('images/15.jpg') }}" alt=" " class="img-responsive" />
		</div>
		<div class="clearfix"> </div>
	</div>
<!-- //choose-us -->
<!-- team -->
	<div class="team">
		<div class="container">
			<p class="wthree_para">Agents</p>
			<h3 class="w3ls_head">meet our team</h3>
			<div class="agileinfo_team_grids">
				<div class="col-md-6 agileinfo_team_grid">
					<div class="agileinfo_team_grid1">
						<div class="agileinfo_team_grid1_text">
							<div class="agileinfo_team_grid1_pos">
								<img src="{{ asset('images/16.jpg') }}" alt=" " class="img-responsive" />
							</div>
							<h4>Mark Henry</h4>
							<h5>Founder & CEO</h5>
							<p>Sed eu sollicitudin ex. Donec malesuada maur ac lectus molestie tristique.</p>
						</div>
						<ul class="social-nav model-3d-0 footer-social agile_social">
							<li><a href="#" class="facebook">
								<div class="front"><i class="fa fa-facebook" aria-hidden="true"></i></div>
								<div class="back"><i class="fa fa-facebook" aria-hidden="true"></i></div></a></li>
							<li><a href="#" class="twitter"> 
								<div class="front"><i class="fa fa-twitter" aria-hidden="true"></i></div>
								<div class="back"><i class="fa fa-twitter" aria-hidden="true"></i></div></a></li>
							<li><a href="#" class="instagram">
								<div class="front"><i class="fa fa-instagram" aria-hidden="true"></i></div>
								<div class="back"><i class="fa fa-instagram" aria-hidden="true"></i></div></a></li>
						</ul>
					</div>
				</div>
				<div class="col-md-6 agileinfo_team_grid">
					<div class="agileinfo_team_grid1">
						<div class="agileinfo_team_grid1_text">
							<div class="agileinfo_team_grid1_pos">
								<img src="{{ asset('images/17.jpg') }}" alt=" " class="img-responsive" />
							</div>
							<h4>Thomus Lii</h4>
							<h5>Sales Manager</h5>
							<p>Sed eu sollicitudin ex. Donec malesuada maur ac lectus molestie tristique.</p>
						</div>
						<ul class="social-nav model-3d-0 footer-social agile_social">
							<li><a href="#" class="facebook">
								<div class="front"><i class="fa fa-facebook" aria-hidden="true"></i></div>
								<div class="back"><i class="fa fa-facebook" aria-hidden="true"></i></div></a></li>
							<li><a href="#" class="twitter"> 
								<div class="front"><i class="fa fa-twitter" aria-hidden="true"></i></div>
								<div class="back"><i class="fa fa-twitter" aria-hidden="true"></i></div></a></li>
							<li><a href="#" class="instagram">
								<div class="front"><i class="fa fa-instagram" aria-hidden="true"></i></div>
								<div class="back"><i class="fa fa-instagram" aria-hidden="true"></i></div></a></li>
						</ul>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
			<div class="agileinfo_team_grids">
				<div class="col-md-6 agileinfo_team_grid">
					<div class="agileinfo_team_grid1">
						<div class="agileinfo_team_grid1_text">
							<div class="agileinfo_team_grid1_pos">
								<img src="{{ asset('images/19.jpg') }}" alt=" " class="img-responsive" />
							</div>
							<h4>Joseph Carl</h4>
							<h5>Sales Manager</h5>
							<p>Sed eu sollicitudin ex. Donec malesuada maur ac lectus molestie tristique.</p>
						</div>
						<ul class="social-nav model-3d-0 footer-social agile_social">
							<li><a href="#" class="facebook">
								<div class="front"><i class="fa fa-facebook" aria-hidden="true"></i></div>
								<div class="back"><i class="fa fa-facebook" aria-hidden="true"></i></div></a></li>
							<li><a href="#" class="twitter"> 
								<div class="front"><i class="fa fa-twitter" aria-hidden="true"></i></div>
								<div class="back"><i class="fa fa-twitter" aria-hidden="true"></i></div></a></li>
							<li><a href="#" class="instagram">
								<div class="front"><i class="fa fa-instagram" aria-hidden="true"></i></div>
								<div class="back"><i class="fa fa-instagram" aria-hidden="true"></i></div></a></li>
						</ul>
					</div>
				</div>
				<div class="col-md-6 agileinfo_team_grid">
					<div class="agileinfo_team_grid1">
						<div class="agileinfo_team_grid1_text">
							<div class="agileinfo_team_grid1_pos">
								<img src="{{ asset('images/18.jpg') }}" alt=" " class="img-responsive" />
							</div>
							<h4>John Mark</h4>
							<h5>Agent</h5>
							<p>Sed eu sollicitudin ex. Donec malesuada maur ac lectus molestie tristique.</p>
						</div>
						<ul class="social-nav model-3d-0 footer-social agile_social">
							<li><a href="#" class="facebook">
								<div class="front"><i class="fa fa-facebook" aria-hidden="true"></i></div>
								<div class="back"><i class="fa fa-facebook" aria-hidden="true"></i></div></a></li>
							<li><a href="#" class="twitter"> 
								<div class="front"><i class="fa fa-twitter" aria-hidden="true"></i></div>
								<div class="back"><i class="fa fa-twitter" aria-hidden="true"></i></div></a></li>
							<li><a href="#" class="instagram">
								<div class="front"><i class="fa fa-instagram" aria-hidden="true"></i></div>
								<div class="back"><i class="fa fa-instagram" aria-hidden="true"></i></div></a></li>
						</ul>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>
<!-- //team -->
@endsection

@section('footer')
	@widget('footer', [
        "footer_title" => $common["footer_title"],
        "sentence" => $common["sentence"],
        "phone" => $common["phone"],
        "address" => $common["address"],
        "copyright" => $common["copyright"]
    ])
@endsection