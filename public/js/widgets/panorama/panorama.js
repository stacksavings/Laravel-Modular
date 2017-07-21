
$(document).ready(function() {
	var panorama = document.getElementById('panorama');
	var img = panorama.dataset.image;

	pannellum.viewer('panorama', {
	    "type": "equirectangular",
	    "panorama": img,
	    "autoLoad": true
	});
});

