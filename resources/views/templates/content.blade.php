@extends('layouts.app')

@section('content')

<header class="header" id="lp-pom-root">
    <div class="container">
        <div class="header__logo txt-center pdt50">
            <h1>
                <a><img src="{{ $data['image-logo'] }}" alt="logo"> </a>
            </h1>
        </div>
 		<div class="header__content txt-center">
			    <h2 class="font-size48 txt-color-white lato-bold mgt120 ">
			        {{ $data['mainTitle'] }}</h2>
			    <h3 class="mgt20">
			        <a href="#"
			                class="txt-color-white font-size18 lato-regular position-re">{{ $data['subHeading'] }}</a>
			    </h3>
			</div><!--End-header__content-->
 		</div>
        <!-- end facebook widget here -->
    </div><!--End-container-->
</header>
<section class="section1 section1__bd bg-color-white pdbt60 pdt20">
    <div class="container pdt65">
        <div class="row">
            <div class="col-md-11 col-md-offset-1 position-re">
                <div class="col-md-6 mgbt20">
                    <h2 class="font-size22 lineheight24 txt-color-gray lato-bold mgbt20">
                        {{ $data['col_head_1'] }}</h2>
                    <p class="lato-regular font-size16 lineheight24 txt-color-gray2 width80">
                        {{ $data['col_content_1'] }}</p>
                </div><!--End-col-md-6-->
                <div class="col-md-6 mgbt20">
                    <h2 class="font-size22 lineheight24 txt-color-gray lato-bold mgbt20">
                        {{ $data['col_head_2'] }}</h2>
                    <p class="lato-regular font-size16 lineheight24 txt-color-gray2 width80">
                        {{ $data['col_content_2'] }}</p>
                </div><!--End-col-md-6-->
                <div class="col-md-6 mgbt20">
                    <h2 class="font-size22 lineheight24 txt-color-gray lato-bold mgbt20">
                        {{ $data['col_head_3'] }}</h2>
                    <p class="lato-regular font-size16 lineheight24 txt-color-gray2 width80">
                        {{ $data['col_content_3'] }}</p>
                </div><!--End-col-md-6-->
                <div class="col-md-6 mgbt20">
                    <h2 class="font-size22 lineheight24 txt-color-gray lato-bold mgbt20">
                        {{ $data['col_head_4'] }}</h2>
                    <p class="lato-regular font-size16 lineheight24 txt-color-gray2 width80">
                        {{ $data['col_content_4'] }}</p>
                </div><!--End-col-md-6-->
            </div>
        </div><!--End-row-->
    </div><!--End-container-->
</section>
<section class="section2 section--point bg-color-blue pdt50 pdbt100 txt-center position-re">
    <div class="container">
        <h2 class="txt-color-blue font-size28 lato-bold mgbt40">{{ $data['title_2'] }}</h2>
        <p class="font-size18 txt-color-white lineheight24 lato-regular width80 mgauto">
            {{ $data['content_2'] }}</p>
    </div><!--End-container-->
</section>
<section class="section3 section--point mgauto txt-center pdt80 pdbt60 position-re">
    <iframe width="974" height="546" src="{{ $data['video-link'] }}" frameborder="0"
            allowfullscreen></iframe>
</section>
<section class="section4 section--point position-re txt-center pdt45 pdbt30">
    <h2 class="txt-color-white lato-bold font-size24 lineheight40 width50 mgauto">
        {{ $data['quote'] }}</h2>
    <h2 class="txt-color-white lato-bold font-size24 lineheight40">
        {{ $data['author'] }}</h2>
</section>
<section class="section5 section5__bd bg-color-white pdbt00 pdt100 position-re">
    <div class="container">
        <div class="row">
            <div class="col-md-11 col-md-offset-1">
                <div class="row">
                	@foreach($data['testimonial'] as $testimonial)
					<div class="col-md-6">
						@if($loop->iteration % 2 == 0)
						    <div class="section5__box width85 position-re section5__box--left">
						        <div class="section5__box--top">
						            <img src="{{ $testimonial['image_emp'] }}" alt="" class="fll mgr25">
						            <h3 class="fll txt-color-gray font-size16 lineheight24 lato-regular width70">
						                {{ $testimonial['title'] }}</h3>
						        </div>
						        <p class="font-size12 lato-regular">
						            {{ $testimonial['job_title'] }}</p>
						    </div>
						@else
							<div class="section5__box width85 position-re">
						        <div class="section5__box--top">
						            <img src="{{ $testimonial['image_emp'] }}" alt="" class="fll mgr25">
						            <h3 class="fll txt-color-gray font-size16 lineheight24 lato-regular width70">
						                {{ $testimonial['title'] }}</h3>
						        </div>
						        <p class="font-size12 lato-regular">
						            {{ $testimonial['job_title'] }}</p>
						    </div>
						@endif
					</div>
					@endforeach
                </div><!--End-row-->
            </div>
        </div><!--End-row-->
    </div><!--End-container-->
</section>
<section class="section6  section--point bg-color-blue position-re pdt40 pdbt40 txt-center">
    <div class="container">
        <div class="row">
            <div class="col-md-4 "><a
                        class="txt-color-white font-size18 lato-regular pull-right">{{ $data['text-1'] }}</a>
            </div>
            <div class="col-md-4"><a class="btn txt-color-white font-size18" href=""
                        target="">{{ $data['btn_2'] }}</a></div>
            <div class="col-md-4"><a
                        class="txt-color-white font-size18 lato-regular pull-left">{{ $data['text-2'] }}</a>
            </div>
        </div>
    </div>
</section>
<footer class="footer txt-center lato-regular">
    <a href='"text-3-link"' title="{{ $data['text-3'] }}
            rel="nofollow" target="_blank">
        {{ $data['text-3'] }}</a>
</footer>
@endsection