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
        this.options = options;
        this.options.draggaleMarkder = options.draggaleMarkder || false;
        this.options.apiKey = document.querySelector('meta[name=goong-map-api-key]').getAttribute('content');
        this.options.mapTitlesKey = document.querySelector('meta[name=goong-map-titles-key]').getAttribute('content');
        this._map = null;
        this._marker = null;
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
}

export {TrovieMap};
