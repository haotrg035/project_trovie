import {TrovieMap} from "../../user/TrovieMap";

window.goongjs = require('@goongmaps/goong-js');

document.addEventListener('DOMContentLoaded', () => {
    initSearchMap()
});

function initSearchMap() {
    // let trovieMap = null;
    // let mapElement = null;
    // let mapOptions = {
    //     map: 'room-article-search-map',
    //     marker: true,
    // };
    // let availableHost = document.querySelector('#room-article-search-map input[name=available-hosts-info]').value.trim()
    // let listHost = [];
    // goongjs.accessToken = document.querySelector('meta[name=goong-map-api-key]').content;
    // trovieMap = new TrovieMap(mapOptions);
    // mapElement = trovieMap.initGoongMapCenterCurrentGeo();
    //
    //
    // if (availableHost !== '') {
    //     JSON.parse(availableHost).forEach(host => {
    //         let hostMarker = trovieMap.drawMarker(
    //             [host.longitude, host.latitude],
    //             host.name,
    //             host.image
    //         );
    //         hostMarker.onclick = () => {
    //             window.location.href = '/phong/tim-kiem?host=' + host.id;
    //         };
    //         new goongjs.Marker(hostMarker).setLngLat([host.longitude, host.latitude]).addTo(mapElement.map);
    //     })
    // }
}
