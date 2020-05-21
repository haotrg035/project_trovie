import {TrovieMap} from "../TrovieMap";
import {TrovieHelper} from "../TrovieHelper";

window.goongjs = require('@goongmaps/goong-js');
let createHostFormMap = document.querySelector('.create-host-modal__form #form__map');
let addressInput = document.querySelector('.create-host-modal__form #address');
let latitudeInput = document.querySelector('.create-host-modal__form #latitude');
let longitudeInput = document.querySelector('.create-host-modal__form #longitude');
let addressResultList = document.querySelector('.create-host-modal__form .address-result-list');
let currentCoords = null;
let mapOptions = {
    map: createHostFormMap,
    addressInput: addressInput,
    center: [100, 20]
};
let is_edit_address = true;
let trovieMap = null;
let mapElement;

//main
document.addEventListener('DOMContentLoaded', function () {

    // $('#create-host-modal').on('show.bs.modal', function (e) {
    //     if (currentCoords === null) {
    //         currentCoords = TrovieHelper.getCurrentLatLng();
    //         mapOptions.center = [currentCoords.lng, currentCoords.lat];
    //         trovieMap = new TrovieMap(mapOptions);
    //
    //     }
    // });
    initAddHostFormMap();
    document.querySelector('.create-host-modal__form').addEventListener('submit', function (e) {
        e.preventDefault();
        if (is_edit_address) {
            tata.warn('Thông báo', 'Hãy chọn chính xác địa chỉ theo map!', {
                duration: 5000
            });
            addressInput.classList.add('is-invalid')
        } else {
            this.submit();
        }
    });
});

function initAddHostFormMap() {
    if (createHostFormMap !== null) {
        trovieMap = new TrovieMap(mapOptions);
        if (navigator.geolocation) {
            mapElement = trovieMap.initGoongMapCenterCurrentGeo();
        } else {
            mapElement = trovieMap.initGoongMap();
        }
        //Bat su kien click ngoai result list
        // window.addEventListener('click', function (e) {
        //     if (addressResultList.contains(e.target) === false) {
        //         addressResultList.innerHTML = '';
        //     }
        // });
    }
    addressInput.addEventListener('keydown', _.debounce(_addressInputOnKeyDown, 500));
}

function _addressInputOnKeyDown() {
    if (addressInput.value.trim() !== '') {
        is_edit_address = true;
        addressInput.classList.add('is-invalid');
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
            trovieMap.renderSearchResultItems(addressResultList, response.data.predictions, searchResultItemClickHandler)
        }).catch(function (error) {
            console.log(error);
        });
    }
}

function searchResultItemClickHandler(item) {
    let placeId = item.getAttribute('data-place-id');
    is_edit_address = false;
    addressInput.classList.remove('is-invalid');
    axios.get(trovieMap.getApiUrl().detail, {
        headers: {
            Accept: 'application/json'
        },
        params: {
            placeid: placeId,
            api_key: trovieMap.options.apiKey,
        }
    }).then(function (response) {
        let data = response.data.result;
        addressResultList.innerHTML = "";
        addressInput.value = data.formatted_address;
        longitudeInput.value = data.geometry.location.lng;
        latitudeInput.value = data.geometry.location.lat;

        mapElement.map.flyTo({
            center: [
                data.geometry.location.lng,
                data.geometry.location.lat
            ]
        });
        mapElement.marker.setLngLat([
            data.geometry.location.lng,
            data.geometry.location.lat
        ]);
        axios.get(trovieMap.getApiUrl().geocode, {
            headers: {
                Accept: 'application/json'
            },
            params: {
                latlng: latitudeInput.value + ',' + longitudeInput.value,
                api_key: trovieMap.options.apiKey,
            }
        }).then(function (response) {
            let data = response.data.results[0].address_components;
            document.querySelector('#city_name').value = data[4].short_name;
            document.querySelector('#district_name').value = data[3].short_name;
        });
    }).catch(function (error) {
        console.log(error);
    });
}
