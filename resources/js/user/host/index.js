import {TrovieMap} from "../TrovieMap";

window.goongjs = require('@goongmaps/goong-js');
let createHostFormMap = document.querySelector('.create-host-modal__form #form__map');
let addressInput = document.querySelector('.create-host-modal__form #address');
let latitudeInput = document.querySelector('.create-host-modal__form #latitude');
let longitudeInput = document.querySelector('.create-host-modal__form #longitude');
let mapElement;

document.addEventListener('DOMContentLoaded', function () {
    initHostFormMap();
});

function initHostFormMap() {
    if (createHostFormMap !== null) {
        let options = {
            map: createHostFormMap,
            addressInput: addressInput,
            center: [105, 20]
        };
        mapElement = new TrovieMap(options).initGoongMap();
    }
}


