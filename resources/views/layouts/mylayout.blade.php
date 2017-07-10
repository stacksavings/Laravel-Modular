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
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ config('layout.css') }}" rel="stylesheet">
    <link href="{{ config('layout.widgets.calendar.css') }}" rel="stylesheet">
    <link href="{{ config('layout.widgets.lastpost.css') }}" rel="stylesheet">

</head>
<body>
    <div id="app">
        @include(config('layout.inc.header'))
        
        <div>
            <h1>My Application</h1>
        </div>
        <div class="content">
            @foreach($data as $post)
                <div>
                    <h1>{{ $post['title'] }}</h1>
                    <p>{{ $post['content'] }}</p>
                </div>
            @endforeach
        </div>
        <div class="sidebar">
            @include(config('layout.widgets.calendar.tpl'))
            @include(config('layout.widgets.lastpost.tpl'))
        </div>
        <div class="clearfix"></div>
        @include(config('layout.inc.footer'))
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ config('layout.widgets.calendar.js') }}"></script>
    <script src="{{ config('layout.widgets.lastpost.js') }}"></script>
    @yield('scripts')
</body>
</html>
