<!--<nav class="navbar navbar-expand-md navbar-light shadow-sm">-->
<nav >
    <div>
        <div class="text-sm text-gray-700 dark:text-gray-500 underline">
            <a href="{{ url('/') }}"> Home </a></br>
            <a href="{{ url('/dashboard') }}"> Dashboard </a></br>
            <a href="{{ route('comments') }}"> Comments </a>
        </div>
        <!-- Authentication Links -->
        @guest
        <a href="{{ route('login') }}">Login</a>
        @endguest
    </div>
</nav>