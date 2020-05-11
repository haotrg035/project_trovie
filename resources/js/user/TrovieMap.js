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
        this._map = null;
        this._marker = null;
        this.options = options;
        this.options.draggaleMarkder = options.draggaleMarkder || false;
        this.options.apiKey = document.querySelector('meta[name=goong-map-api-key]').getAttribute('content');
        this.options.mapTitlesKey = document.querySelector('meta[name=goong-map-titles-key]').getAttribute('content');
        this.options.apiOrigin = 'https://rsapi.goong.io/';
    }

    initGoongMap() {

        goongjs.accessToken = this.options.mapTitlesKey;
        this._map = new goongjs.Map({
            container: this.options.map,
            style: 'https://tiles.goong.io/assets/goong_map_web.json',
            center: this.options.center, //[lng,lat]
            zoom: 10
        });

        this._marker = new goongjs.Marker({
            draggale: this.options.draggaleMarkder
        }).setLngLat(this.options.center).addTo(this._map);
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

    renderSearchResultItems(resultList, data) {
        resultList.innerHtml = '';
        for (let item of data) {
            resultList.appendChild(this._getSearchResultItem(item))
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
        // let item__icon = document.createElement('figure');
        // item__icon.className = 'item__icon';
        // let item__icon__fa = document.createElement('i');
        // item__icon__fa.className = 'fa fa-map-marker';
        // item__icon.appendChild(item__icon__fa);
        // item.appendChild(item__icon);
        // let item__content = document.createElement('div');
        // item__content.className = 'item__content';
        // let content__title = document.createElement('p');
        // content__title.className = 'content__title';
        // content__title.innerText = data.structured_formatting.main_text;
        item.innerHTML = html;

        return item;
    }

    getApiUrl() {
        return {
            autoComplete: this.options.apiOrigin + 'Place/AutoComplete'
        }
    }

}

export {TrovieMap};
