document.addEventListener('DOMContentLoaded', () => {
    initImageGallery();
    initRelatedArticleSlider()
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
