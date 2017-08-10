@extends('layouts.mansion')

@section('content')

<!-- work -->
	<div class="work">
		<div class="container">
			<p class="wthree_para">Description</p>
			<h3 class="w3ls_head">How we work</h3>
			<div class="agile_work_grids">
				<div class="col-md-3 agile_work_grid">
					<div class="agile_work_grid1 w3_agileits_work">
						<span>1</span>
					</div>
					<div class="agile_work_grid2 hvr-rectangle-out">
						<div class="agile_work_grid3">
							<span class="glyphicon glyphicon-random" aria-hidden="true"></span>
						</div>
					</div>
					<h4>vitae purus pretium</h4>
					<p>Pellentesque turpis eros, tempor vitae placerat eu, aliquam et leo.</p>
				</div>
				<div class="col-md-3 agile_work_grid">
					<div class="agile_work_grid1 w3_agileits_work1">
						<span>2</span>
					</div>
					<div class="agile_work_grid2 hvr-rectangle-out">
						<div class="agile_work_grid3">
							<span class="glyphicon glyphicon-stats" aria-hidden="true"></span>
						</div>
					</div>
					<h4>lacus turpis rutrum</h4>
					<p>Pellentesque turpis eros, tempor vitae placerat eu, aliquam et leo.</p>
				</div>
				<div class="col-md-3 agile_work_grid">
					<div class="agile_work_grid1 w3_agileits_work2">
						<span>3</span>
					</div>
					<div class="agile_work_grid2 hvr-rectangle-out">
						<div class="agile_work_grid3">
							<span class="glyphicon glyphicon-export" aria-hidden="true"></span>
						</div>
					</div>
					<h4>purus pretium eros</h4>
					<p>Pellentesque turpis eros, tempor vitae placerat eu, aliquam et leo.</p>
				</div>
				<div class="col-md-3 agile_work_grid">
					<div class="agile_work_grid1 agile_work_grid1_four">
						<span>4</span>
					</div>
					<div class="agile_work_grid2 hvr-rectangle-out">
						<div class="agile_work_grid3">
							<span class="glyphicon glyphicon-link" aria-hidden="true"></span>
						</div>
					</div>
					<h4>aliquam et leo</h4>
					<p>Pellentesque turpis eros, tempor vitae placerat eu, aliquam et leo.</p>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>
<!-- //work -->

<!-- work-bottom -->
{{-- 	<div class="work-bottom">
		<div class="container">
			<h2>Real estate investment is certainly a vote of confidence on future activity</h2>
			<div class="agileits_more">
				<a href="single.html" class="button button--rayen button--border-thin button--text-thick button--text-upper button--size-s" data-text="Learn More"><span>Learn More</span></a>
			</div>
		</div>
	</div> --}}
	<div class="container-full">
		<div class="container">
			<div class="row">
				@widget('panorama', ["data" => $data['panorama1']])
			</div>
		</div>
	</div>
<!-- //work-bottom -->

<!-- testimonials -->
	<div class="testimonials">
		<div class="container">
			<p class="wthree_para">Testimonials</p>
			<h3 class="w3ls_head">Our Clients says</h3>
			<div class="w3_testimonials_grids">
				<div id="slideshow" class="disabled">
					<button class="previous"><b>« Previous</b></button>
					<button class="next"><b>Next »</b></button>
					<div class="strip">
						<div class="slide sticky">
							<div class="w3_testimonials_grid">
							<div class="col-md-8 w3_testimonials_grid_left">
								<div class="w3_testimonials_grid_leftl">
									<div class="w3_testimonials_grid_leftl1">
										<p>Suspendisse porttitor neque eget erat dignissim, 
											quis tempus tortor porttitor. Duis bibendum bibendum varius. 
											Vivamus orci felis, luctus quis mi quis, lacinia eleifend ipsum.</p>
									</div>
									<h4>Alley Carl</h4>
									<p class="w3_builder">Co-ordinator</p>
								</div>
								<div class="w3_testimonials_grid_leftr">
									<img src="images/2-.jpg" alt=" " class="img-responsive" />
								</div>
								<div class="clearfix"> </div>
							</div>
							<div class="col-md-2 w3_testimonials_grid_right">
								<img src="images/1.png" alt=" " class="img-responsive" />
							</div>
							<div class="col-md-2 w3_testimonials_grid_right">
								<img src="images/2.png" alt=" " class="img-responsive" />
							</div>
							<div class="clearfix"> </div>
						</div>
						</div>
						<div class="slide">
							<div class="w3_testimonials_grid">
							<div class="col-md-8 w3_testimonials_grid_left">
								<div class="w3_testimonials_grid_leftl">
									<div class="w3_testimonials_grid_leftl1">
										<p>Suspendisse porttitor neque eget erat dignissim, 
											quis tempus tortor porttitor. Duis bibendum bibendum varius. 
											Vivamus orci felis, luctus quis mi quis, lacinia eleifend ipsum.</p>
									</div>
									<h4>Willium Mark</h4>
									<p class="w3_builder">Builder</p>
								</div>
								<div class="w3_testimonials_grid_leftr">
									<img src="images/1-.jpg" alt=" " class="img-responsive" />
								</div>
								<div class="clearfix"> </div>
							</div>
							<div class="col-md-2 w3_testimonials_grid_right">
								<img src="images/2.png" alt=" " class="img-responsive" />
							</div>
							<div class="col-md-2 w3_testimonials_grid_right">
								<img src="images/3.png" alt=" " class="img-responsive" />
							</div>
							<div class="clearfix"> </div>
						</div>
						</div>
						<div class="slide">
							<div class="w3_testimonials_grid">
							<div class="col-md-8 w3_testimonials_grid_left">
								<div class="w3_testimonials_grid_leftl">
									<div class="w3_testimonials_grid_leftl1">
										<p>Suspendisse porttitor neque eget erat dignissim, 
											quis tempus tortor porttitor. Duis bibendum bibendum varius. 
											Vivamus orci felis, luctus quis mi quis, lacinia eleifend ipsum.</p>
									</div>
									<h4>Lii Paul</h4>
									<p class="w3_builder">Builder</p>
								</div>
								<div class="w3_testimonials_grid_leftr">
									<img src="images/3-.jpg" alt=" " class="img-responsive" />
								</div>
								<div class="clearfix"> </div>
							</div>
							<div class="col-md-2 w3_testimonials_grid_right">
								<img src="images/1.png" alt=" " class="img-responsive" />
							</div>
							<div class="col-md-2 w3_testimonials_grid_right">
								<img src="images/3.png" alt=" " class="img-responsive" />
							</div>
							<div class="clearfix"> </div>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<!-- //testimonials -->

<!-- newsletter -->
{{-- 	<div class="agileits_w3layouts newsletter">
		<div class="container">
			<p class="wthree_para wthree_para1">Newsletter</p>
			<h3 class="w3ls_head w3ls_head1">Subscribe to us</h3>
			<form action="#" method="post">
				<input class="email" type="email" name="Email" placeholder="Email" required="">
				<input type="submit" value="Submit">
			</form>
		</div>
	</div> --}}
	<div class="container-full">
		<div class="container">
			<div class="row">
				@widget('panorama', ["data" => $data['panorama2']])
			</div>
		</div>		
	</div>
<!-- //newsletter -->

@endsection