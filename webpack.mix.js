const mix = require('laravel-mix');

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

mix.js([
    'resources/js/app.js',
    'resources/js/user/sidebar.js'
], 'public/user/js/app.js')
    .js('resources/js/user/host/detail.js', 'public/user/js/host')
    .js('resources/js/user/host/index.js', 'public/user/js/host/index.js')
    .js('resources/js/user/room.js', 'public/user/js')
    .js('resources/js/user/service.js', 'public/user/js')
    .sass('resources/sass/user/libs.scss', 'public/user/css/libs.css')
    .sass('resources/sass/user/app.scss', 'public/user/css');

