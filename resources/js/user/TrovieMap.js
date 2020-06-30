class TrovieMap {
    /**
     * Create Trovie class
     * @param options
     * {map} map element
     * {addressInput} address input element
     * [center] = [105.76519667323225, 10.043570904701184]
     * [draggableMarker]
     */
    constructor(options) {
        this._currentCoordinate = null;
        this._map = null;
        this._marker = null;
        this.options = options;
        this.options.marker = options.marker === null ? false : options.marker;
        this.options.draggaleMarkder = options.draggaleMarkder || false;
        this.options.apiKey = document.querySelector('meta[name=goong-map-api-key]').getAttribute('content');
        this.options.mapTitlesKey = document.querySelector('meta[name=goong-map-titles-key]').getAttribute('content');
        this.options.apiOrigin = 'https://rsapi.goong.io/';
    }

    getCurrentPosition(options = {}) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }

    async initGoongMapCenterCurrentGeo() {
        try {
            let currentCoords = await this.getCurrentPosition();
            this.options.center = [currentCoords.coords.longitude, currentCoords.coords.latitude];
            return this.initGoongMap();
            // Handle coordinates
        } catch (error) {
            // Handle error
            console.error(error);
        }
    };

    initGoongMap() {
        goongjs.accessToken = this.options.mapTitlesKey;
        this._map = new goongjs.Map({
            container: this.options.map,
            style: 'https://tiles.goong.io/assets/goong_map_web.json',
            center: this.options.center, //[lng,lat]
            zoom: 17
        });

        if (this.options.marker === true) {
            this._marker = new goongjs.Marker({
                draggale: this.options.draggaleMarkder
            }).setLngLat(this.options.center).addTo(this._map);
        }
        this._map.addControl(
            new goongjs.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true
            })
        );

        this._map.addControl(new goongjs.FullscreenControl());
        this._map.addControl(new goongjs.NavigationControl());

        return {
            map: this._map,
            marker: this._marker
        };
    }

    drawMarker(lngLat, hostName, imgSrc = '/public/no_image.jpg') {
        let markerElement = document.createElement('div');
        let hostNameElement = document.createElement('p');

        markerElement.style.backgroundImage = 'url(' + imgSrc + ')';
        markerElement.classList.add('host-marker');
        hostNameElement.innerText = hostName;
        hostNameElement.classList.add('host-marker__name');
        markerElement.append(hostNameElement);
        return markerElement;
    }


    renderSearchResultItems(resultList, data, callback = null) {
        resultList.innerHtml = '';
        for (let item of data) {
            let _item = this._getSearchResultItem(item);
            if (callback !== null) {
                _item.addEventListener('click', function () {
                    callback(_item);
                })
            }
            resultList.appendChild(_item)
        }
    }

    _getSearchResultItem(data) {
        let html = '   <figure class="item__icon">' +
            '       <i class="fa fa-map-marker" aria-hidden="true"></i>' +
            '   </figure>' +
            '   <div class="item__content">' +
            '       <p class="content__title">' + data.structured_formatting.main_text + '</p>' +
            '       <p class="content__detail">' + data.structured_formatting.secondary_text + '</p>' +
            '   </div>';
        let item = document.createElement('li');
        item.className = 'address-result-list__item';
        item.setAttribute('data-place-id', data.place_id);
        item.innerHTML = html;

        return item;
    }

    getApiUrl() {
        return {
            autoComplete: this.options.apiOrigin + 'Place/AutoComplete',
            detail: this.options.apiOrigin + 'Place/Detail',
            geocode: this.options.apiOrigin + 'Geocode',
        }
    }
}

export {TrovieMap};
