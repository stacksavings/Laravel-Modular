<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ secure_asset('css/all.css') }}" rel="stylesheet">
    <link href='//fonts.googleapis.com/css?family=Capriola' rel='stylesheet' type='text/css'>
    <link href='//fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'>
</head>
<body>
    <div id="app">
    
        @include($header)
        
        @include('templates.mansion.content')

        @widget('footer', [
            "footer_title" => $common["footer_title"],
            "sentence" => $common["sentence"],
            "phone" => $common["phone"],
            "address" => $common["address"],
            "copyright" => $common["copyright"]
        ])
    </div>

    <!-- Scripts -->
    <script src="{{ secure_asset('js/app.js') }}"></script>
    <script src="{{ secure_asset('js/all.js') }}"></script>
    <script type="text/javascript">

        addEventListener("load", function() { 
            setTimeout(hideURLbar, 0); 
        }, false);
        
        function hideURLbar(){ 
            window.scrollTo(0,1); 
        }

        jQuery(document).ready(function($) {
            $(".scroll").click(function(event){     
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
            });
        });

        $(document).ready(function() {                                
            $().UItoTop({ easingType: 'easeOutQuart' });                        
        });

        $(document).ready(function(){
          $('.flexslider').flexslider({
            animation: "slide",
            start: function(slider){
              $('body').removeClass('loading');
            }
          });

        $(".flexslider ol.flex-control-nav").hide();
        $(".flexslider ul.flex-direction-nav").hide();
        
        var myLazyLoad = new LazyLoad();
        
        });
    </script>
    @yield('scripts')
</body>
</html>
