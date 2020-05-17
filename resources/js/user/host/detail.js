import * as FilePond from 'filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';
import {TrovieHelper} from "../TrovieHelper";
import {TrovieMap} from "../TrovieMap";

window.goongjs = require('@goongmaps/goong-js');
FilePond.registerPlugin(FilePondPluginImagePreview, FilePondPluginFilePoster);
let galleryUploader = document.querySelector('#file-gallery');
let avatarUploader = document.querySelector('#file-avatar');
let updateHostFormMap = document.getElementById('form-position__map');
let addressInput = document.querySelector('.host-info__form-position input[name=address]');
let latitudeInput = document.querySelector('.host-info__form-position input[name=latitude]');
let longitudeInput = document.querySelector('.host-info__form-position input[name=longitude]');
let addressResultList = document.querySelector('.host-info__form-position .address-result-list');

let mapOptions = {
    map: updateHostFormMap,
    addressInput: addressInput,
};
let is_edit_address = false;
let trovieMap;
let mapElement;

document.addEventListener('DOMContentLoaded', function () {
    initFileUploader();
    initMap();
    document.querySelector('.host-info__form-position').addEventListener('submit', function (e) {
        e.preventDefault();
        if (is_edit_address || addressInput.value === addressInput.getAttribute('data-address')) {
            tata.warn('Thông báo', 'Hãy chọn chính xác địa chỉ theo map!', {
                duration: 5000
            });
            addressInput.classList.add('is-invalid')
        } else {
            this.submit();
        }
    });
});

function initFileUploader() {
    if (avatarUploader !== null) {
        FilePond.create(avatarUploader, TrovieHelper.getOptionsForFIlepondInstance(avatarUploader, {
            url: '/api/host/update-avatar/',
            process: avatarUploader.getAttribute('data-host-id'),
        }));
    }
    if (galleryUploader !== null) {
        FilePond.create(galleryUploader, TrovieHelper.getOptionsForFIlepondInstance(galleryUploader));
    }
}

function initMap() {
    if (updateHostFormMap !== null) {
        mapOptions.center = [longitudeInput.value, latitudeInput.value];
        trovieMap = new TrovieMap(mapOptions);
        mapElement = trovieMap.initGoongMap();
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

