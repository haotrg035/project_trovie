import {TrovieHelper} from "../TrovieHelper";
import {TrovieMap} from "../TrovieMap";

window.goongjs = require('@goongmaps/goong-js');
window.GoongGeocoder = require('@goongmaps/goong-geocoder');

document.addEventListener('DOMContentLoaded', function () {
    let _trovie = new TrovieHelper();
    let createHostFormMap = document.querySelector('.create-host-modal__form #form__map');
    let addressInput = document.querySelector('.create-host-modal__form #address');
    let latitudeInput = document.querySelector('.create-host-modal__form #latitude');
    let longitudeInput = document.querySelector('.create-host-modal__form #longitude');
    let mapElement;
    if (createHostFormMap !== null) {
        let options = {
            map: createHostFormMap,
            addressInput: addressInput,
            center: [105, 20]
        };
        mapElement = new TrovieMap(options).initGoongMap();
        console.log(mapElement);
    }
    // $('#testmap').on('click', function () {
    //     mapElement.map.flyTo({
    //         center: [
    //             105.1, 20.1
    //         ]
    //     });
    //     mapElement.marker.setLngLat([105.1, 20.1]);
    // })
});


