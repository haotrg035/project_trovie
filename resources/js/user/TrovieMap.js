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
    }

    initGoongMap() {
        let apiKey = document.querySelector('meta[name=goong-map-api-key]').getAttribute('content');
        goongjs.accessToken = document.querySelector('meta[name=goong-map-titles-key]').getAttribute('content');

        let _map = new goongjs.Map({
            container: this.options.map,
            style: 'https://tiles.goong.io/assets/goong_map_web.json',
            center: this.options.center, //[lng,lat]
            zoom: 10
        });

        let _marker = new goongjs.Marker({
            draggale: this.options.draggaleMarkder
        }).setLngLat(this.options.center).addTo(_map);
        _map.addControl(
            new goongjs.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true
            })
        );
        _map.addControl(
            new GoongGeocoder({
                accessToken: apiKey,
                goongjs: goongjs,
                searchInput: this.options.addressInput
            })
        );
        _map.addControl(new goongjs.FullscreenControl());
        _map.addControl(new goongjs.NavigationControl());


        return {
            map: _map,
            marker: _marker
        };
    }
}
export {TrovieMap};
