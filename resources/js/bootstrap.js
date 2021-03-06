window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');

    window.showBsModal = (modal) => {
        $(modal).modal('show');
    };
    window.hideBsModal = (modal) => {
        $(modal).modal('hide');
    };
    window.showBsCollapse = (collapse) => {
        $(collapse).collapse('show');
    };
    window.hideBsCollapse = (collapse) => {
        $(collapse).collapse('hide');
    };
} catch (e) {
    console.log(e);
}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

// $.ajaxSetup({
//     headers: {
//         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//     }
// });

/**
 * import tata toast js
 */
window.tata = require('tata-js');

window.__csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
if (document.querySelector('meta[name="access_token"]') !== null) {
    window.__apiToken = document.querySelector('meta[name="access_token"]').getAttribute('content');
}
