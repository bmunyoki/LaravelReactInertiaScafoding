<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full" id="htmlRoot">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <script>
    (function () {
      try {
        var stored = localStorage.getItem('theme');
        var preferDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = stored || (preferDark ? 'dark' : 'light');
        var html = document.documentElement;
        if (theme === 'dark') html.classList.add('dark'); else html.classList.remove('dark');
      } catch (e) {}
    })();
  </script>

  @viteReactRefresh
  @vite(['resources/css/app.css','resources/js/app.jsx'])
  @inertiaHead
</head>
<body class="h-full">
  @inertia
</body>
</html>
