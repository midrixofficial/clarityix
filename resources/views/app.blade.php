<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>ClarityIX</title>
        <meta name="description" content="AI Photo Enhancement App" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            "primary": "#000000",
                            "background-light": "#ffffff",
                            "background-dark": "#111111",
                        },
                        fontFamily: {
                            sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
                        },
                    },
                },
            }
        </script>
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/main.jsx'])
    </head>
    <body class="font-sans antialiased">
        <div id="root"></div>
    </body>
</html>
