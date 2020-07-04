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

mix
    .js(
        [
            'resources/js/app.js',
            'resources/js/user/sidebar.js',
            'resources/js/components/input.js',
            'resources/js/components/trovie_avatar_upload.js',
        ], 'public/user/js/app.js')
    .js('resources/js/user/host/detail.js', 'public/user/js/host')
    .js('resources/js/user/host/index.js', 'public/user/js/host/index.js')
    .js('resources/js/user/room/index.js', 'public/user/js/room')
    .js(['resources/js/user/service/index.js',
        'resources/js/user/service/unit.js'], 'public/user/js/service')
    .js('resources/js/user/contract/index.js', 'public/user/js/contract')
    .js('resources/js/user/invoice/index.js', 'public/user/js/invoice')
    .js('resources/js/user/profile/show.js', 'public/user/js/profile')
    .js('resources/js/user/roomArticle/index.js', 'public/user/js/roomArticle')
    .js('resources/js/user/roomArticle/create.js', 'public/user/js/roomArticle')
    .js('resources/js/user/roomArticle/edit.js', 'public/user/js/roomArticle')
    .js('resources/js/user/admin/menu/index.js', 'public/user/admin/menu')
    .js('resources/js/user/admin/place/index.js', 'public/user/admin/place/')
    .js('resources/js/user/admin/users/index.js', 'public/user/admin/users/')
    .js('resources/js/user/admin/articles/index.js', 'public/user/admin/articles/')
    // .sass('resources/sass/user/libs.scss', 'public/user/css/libs.css')
    .sass('resources/sass/user/app.scss', 'public/user/css')
    .js([
        'resources/js/app.js',
        'resources/js/components/input.js',
        'resources/js/components/trovie_avatar_upload.js',
        'resources/js/frontend/_lib.js',
        'resources/js/frontend/_header.js',
    ], 'public/frontend/js/app.js')
    .js('resources/js/frontend/RoomArticle/detail.js', 'public/frontend/js/RoomArticle/')
    .js('resources/js/frontend/RoomArticle/search.js', 'public/frontend/js/RoomArticle/')
    .js('resources/js/frontend/index/index.js', 'public/frontend/js/index/')

    // .sass('resources/sass/frontend/libs.scss', 'public/frontend/css/libs.css')
    .sass('resources/sass/frontend/app.scss', 'public/frontend/css');

