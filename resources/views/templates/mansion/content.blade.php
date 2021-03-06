
	<!-- 	//TODO: this should be from text widget, so there is just one title per page, 
	both title fields are optional, if any field is not filled out on sheet is should just skip showing it  -->

	@include('templates.mansion.title-content')
	
	<!-- 	TODO: 
	
	1) We need a new text content type of text-area, this can be part of regular content widget, there
	could be more than one of these per page
	
	2) here it should begin a loop, basically we don't know how many of these the page
	will need, but we want to keep showing a text-area, then a panorama, so it may have like:
	
	text-area-1
	panorama-1
	text-area-2
	panorama-2
	
	and so on..
	
	It is up to page creator to decide. For now, I think using a loop that has an iterator going up
	to 10 would be ok, as we won't need more than 10 of these on one page.
	
	There should be some spacing between the areas, but not too much.
	
	The idea is that this would be kind of like a blog post that shows some text, then a panorama
	widget

	-->

	<div class="container-full">
		<div class="container">
			<div class="row">
				@if(isset($data['contents']))
					@foreach($data['contents'] as $content)
						<article class="paragraph-wrapper">
							<p class="paragraph">
								{{ $content['text'] or " " }}
							</p>
						</article>
						@if(isset($content['panorama']) and !empty($content['panorama']))
							@widget('panorama', [
								"img" => $content['panorama'], 
								'id' => $content['panorama_id'], 
								'width' => $content['panorama_width']
							])
						@endif
					@endforeach
				@endif
			</div>
		</div>
	</div>


