@extends('layouts.mansion')

@section('header')
    @include('templates.mansion.second-banner')
@endsection

@section('content')
<!-- service-breadcrumb -->
	<div class="service-breadcrumb">
		<div class="container">
			<h2>Gallery</h2>
		</div>
	</div>
<!-- //service-breadcrumb -->

<!-- gallery -->
	<div class="gallery">
		<div class="container">
			<p class="wthree_para">Photogallery</p>
			<h3 class="w3ls_head">properties with image gallery</h3>

			<div class="agileinfo_gallery_grids">
				<ul class="clearfix demo">
					<li>
						<div class="agileinfo_gallery_grid">
						  <figure class="imghvr-fold-up"><img src="{{ asset('images/10.jpg') }}" alt=" " class="img-responsive" />
							<figcaption>
							  <h4>Mansion</h4>
							  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
							</figcaption>
						  </figure>
						</div>
					</li>
					<li>
						<div class="agileinfo_gallery_grid">
						  <figure class="imghvr-fold-up"><img src="{{ asset('images/11.jpg') }}" alt=" " class="img-responsive" />
							<figcaption>
								<h4>Mansion</h4>
								<p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
							</figcaption>
						  </figure>
						</div>
					</li>
					<li>
						<div class="agileinfo_gallery_grid">
						  <figure class="imghvr-fold-up"><img src="{{ asset('images/12.jpg') }}" alt=" " class="img-responsive" />
							<figcaption>
							  <h4>Mansion</h4>
							  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
							</figcaption>
						  </figure>
						</div>
					</li>
					<li>
						<div class="agileinfo_gallery_grid">
						  <figure class="imghvr-fold-up"><img src="{{ asset('images/20.jpg') }}" alt=" " class="img-responsive" />
							<figcaption>
							  <h4>Mansion</h4>
							  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
							</figcaption>
						  </figure>
						</div>
					</li>
					<li>
						<div class="agileinfo_gallery_grid">
						  <figure class="imghvr-fold-up"><img src="{{ asset('images/21.jpg') }}" alt=" " class="img-responsive" />
							<figcaption>
							  <h4>Mansion</h4>
							  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
							</figcaption>
						  </figure>
						</div>
					</li>
					<li>
						<div class="agileinfo_gallery_grid">
						  <figure class="imghvr-fold-up"><img src="{{ asset('images/3.jpg') }}" alt=" " class="img-responsive" />
							<figcaption>
							  <h4>Mansion</h4>
							  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
							</figcaption>
						  </figure>
						</div>
					</li>
					<li>
						<div class="agileinfo_gallery_grid">
						  <figure class="imghvr-fold-up"><img src="{{ asset('images/4.jpg') }}" alt=" " class="img-responsive" />
							<figcaption>
							  <h4>Mansion</h4>
							  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
							</figcaption>
						  </figure>
						</div>
					</li>
					<li>
						<div class="agileinfo_gallery_grid">
						  <figure class="imghvr-fold-up"><img src="{{ asset('images/5.jpg') }}" alt=" " class="img-responsive" />
							<figcaption>
							  <h4>Mansion</h4>
							  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
							</figcaption>
						  </figure>
						</div>
					</li>
					<li>
						<div class="agileinfo_gallery_grid">
						  <figure class="imghvr-fold-up"><img src="{{ asset('images/6.jpg') }}" alt=" " class="img-responsive" />
							<figcaption>
							  <h4>Mansion</h4>
							  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
							</figcaption>
						  </figure>
						</div>
					</li>
					<li>
						<div class="agileinfo_gallery_grid">
						  <figure class="imghvr-fold-up"><img src="{{ asset('images/7.jpg') }}" alt=" " class="img-responsive" />
							<figcaption>
							  <h4>Mansion</h4>
							  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
							</figcaption>
						  </figure>
						</div>
					</li>
					<li>
						<div class="agileinfo_gallery_grid">
						  <figure class="imghvr-fold-up"><img src="{{ asset('images/8.jpg') }}" alt=" " class="img-responsive" />
							<figcaption>
							  <h4>Mansion</h4>
							  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
							</figcaption>
						  </figure>
						</div>
					</li>
					<li>
						<div class="agileinfo_gallery_grid">
						  <figure class="imghvr-fold-up"><img src="{{ asset('images/22.jpg') }}" alt=" " class="img-responsive" />
							<figcaption>
							  <h4>Mansion</h4>
							  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
							</figcaption>
						  </figure>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
<!-- //gallery -->
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

@section('scripts')
	<script type="text/javascript">
        $(document).ready(function () {
        	$('.demo li').picEyes();
        });
          
	</script>
@endsection