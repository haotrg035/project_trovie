import {TrovieMap} from "../TrovieMap";

window.goongjs = require('@goongmaps/goong-js');
let createHostFormMap = document.querySelector('.create-host-modal__form #form__map');
let addressInput = document.querySelector('.create-host-modal__form #address');
let latitudeInput = document.querySelector('.create-host-modal__form #latitude');
let longitudeInput = document.querySelector('.create-host-modal__form #longitude');
let addressResultList = document.querySelector('.create-host-modal__form .address-result-list');

let mapOptions = {
    map: createHostFormMap,
    addressInput: addressInput,
    center: [105, 20]
};
let trovieMap = new TrovieMap(mapOptions);
let mapElement;

document.addEventListener('DOMContentLoaded', function () {
    initAddHostFormMap();
});

function initAddHostFormMap() {
    if (createHostFormMap !== null) {
        mapElement = trovieMap.initGoongMap();
    }
    addressInput.addEventListener('keydown', _.debounce(_addressInputOnKeyDown, 500));

}

function _addressInputOnKeyDown() {
    if (addressInput.value.trim() !== '') {
        axios.get(trovieMap.getApiUrl().autoComplete, {
            headers: {
                Accept: 'application/json'
            },
            params: {
                input: addressInput.value,
                api_key: trovieMap.options.apiKey,
                limit: 5
            }
        }).then(function (response) {
            addressResultList.innerHTML = "";
            trovieMap.renderSearchResultItems(addressResultList, response.data.predictions)
        });
    }
}

