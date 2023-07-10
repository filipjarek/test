<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://cdn.tailwindcss.com"></script>
        <title>Channel</title>

        @viteReactRefresh
        @vite(['resources/js/app.tsx'])

    </head>
    <body class="bg-zinc-800">
       <div id="app"></div>
    </body>
</html>
