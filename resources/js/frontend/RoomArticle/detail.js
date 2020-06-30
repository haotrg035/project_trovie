import {TrovieMap} from "../../user/TrovieMap";

document.addEventListener('DOMContentLoaded', () => {
    initImageGallery();
    initRelatedArticleSlider()
    initRoomMap();
});

function initImageGallery() {
    let slider = document.querySelector('#gallery__list');

    if (slider !== null) {
        $(slider).lightSlider({
            gallery: true,
            item: 1,
            loop: true,
            slideMargin: 0,
            thumbItem: 3
        });
    }
}

function initRelatedArticleSlider() {
    let slider = document.querySelector('#related-room-articles');

    if (slider !== null) {
        $(slider).lightSlider({
            item: 4,
            loop: false,
            slideMargin: 16,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        item: 3,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        item: 2,
                    }
                },
                {
                    breakpoint: 520,
                    settings: {
                        item: 1,
                    }
                }
            ],
        });
    }
}

function initRoomMap() {
    let mapElement = document.querySelector('#room-article-detail-map');
    if (mapElement !== null) {
        window.goongjs = require('@goongmaps/goong-js');
        let mapOptions = {
            map: mapElement,
            marker: true,
            center: [mapElement.dataset.lng, mapElement.dataset.lat]
        };
        new TrovieMap(mapOptions).initGoongMap();
    }
}
