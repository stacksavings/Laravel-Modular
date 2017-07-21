const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .copy('node_modules/font-awesome/fonts', 'public/fonts')
   .copy('node_modules/pannellum/src/css/img', 'public/css/img')
   .scripts([
		'node_modules/pannellum/build/pannellum.js',
		'node_modules/rateyo/min/jquery.rateyo.min.js',
		'public/js/widgets/panorama/panorama.js'
	], 'public/js/all.js')
   .styles([
	    'public/css/main.css',
	    'public/css/testimonial.css',
	    'node_modules/pannellum/build/pannellum.css',
	    'node_modules/rateyo/min/jquery.rateyo.min.css',
	    'public/css/widgets/panorama/panorama.css'
	], 'public/css/all.css')
   .browserSync({proxy: "stacksavings.dev"});


 //   .scripts([
	//     'node_modules/toastr/build/toastr.min.js',
	// ], 'public/js/all.js')
   
