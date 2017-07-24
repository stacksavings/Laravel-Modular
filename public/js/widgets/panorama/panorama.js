
$(document).ready(function() {

    var images = {};
    var objects = [];
	var wrapper = $('.panorama');

	for (var i = 0; i < wrapper.length; i++) {
		var id = wrapper[i].firstChild.id;
		images[id] = wrapper[i].firstChild.dataset.image;
	}

	for (image in images) {
		objects.push(pannellum.viewer(image, {
		    "type": "equirectangular",
		    "panorama": images[image],
		    "autoLoad": true
		}));
	}

	for (var i = 0; i < objects.length; i++) {
		objects[i];
	}
});

// Galery
// var obj = [];
// var images = { 
// 	'panorama': '/images/alma.jpg', 
// 	'other': '/images/cerro.jpg'
// };

// for (image in images) {
// 	obj.push(pannellum.viewer(image, {
// 	    "type": "equirectangular",
// 	    "panorama": images[image],
// 	    "autoLoad": true
// 	}));
// }

// for (var i = 0; i < obj.length; i++) {
// 	obj[i];
// }

