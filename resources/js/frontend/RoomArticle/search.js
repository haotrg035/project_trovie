import {TrovieMap} from "../../user/TrovieMap";

window.goongjs = require('@goongmaps/goong-js');

document.addEventListener('DOMContentLoaded', () => {
    initSearchMap()
});

function initSearchMap() {
    let articles = document.querySelectorAll('.room-card');
    let trovieMap = null;
    if (articles !== null && articles.length > 0) {
        let mapElement = null;
        let center = [articles[0].dataset.longitude, articles[0].dataset.latitude]
        let mapOptions = {
            map: 'room-article-search-map',
            center: center,
            marker: false,
        };
        let availableHost = document.querySelector('#room-article-search-map input[name=available-hosts-info]').value.trim()
        let listHost = [];

        goongjs.accessToken = document.querySelector('meta[name=goong-map-api-key]').content;
        trovieMap = new TrovieMap(mapOptions);
        mapElement = trovieMap.initGoongMap();

        if (availableHost !== '') {
            JSON.parse(availableHost).forEach(host => {
                let hostMarker = trovieMap.drawMarker(
                    [host.longitude, host.latitude],
                    host.name,
                    host.image
                );
                hostMarker.onclick = () => {
                    window.location.href = '/phong/tim-kiem?host=' + host.id;
                };
                new goongjs.Marker(hostMarker).setLngLat([host.longitude, host.latitude]).addTo(mapElement.map);
            })
        }

        articles.forEach(article => {
            let _center = [article.dataset.longitude, article.dataset.latitude];

            // if (!listHost.includes(article.dataset.hostId)) {
            //     new goongjs.Marker(trovieMap.drawMarker(
            //         _center,
            //         article.querySelector('.host__name').innerText,
            //         article.querySelector('.host__avatar img').src)
            //     ).setLngLat(_center).addTo(mapElement.map);
            //     listHost.push(article.dataset.hostId);
            // }
            article.onmouseenter = () => {
                if (_center !== center) {
                    _.debounce(function () {
                        mapElement.map.flyTo({
                            center: _center,
                            zoom: 16
                        })
                    }, 800)();
                    center = _center;
                }
            }
        })
    }
}
