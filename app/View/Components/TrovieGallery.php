<?php

namespace App\View\Components;

use Illuminate\View\Component;

class TrovieGallery extends Component
{
    public $uploadUrl;
    public $deleteUrl;
    public $galleryItems;

    /**
     * Create a new component instance.
     *
     * @param $galleryItems
     * @param $uploadUrl
     * @param string $deleteUrl
     */
    public function __construct($galleryItems = [], $uploadUrl = '', $deleteUrl = '')
    {
        $this->uploadUrl = $uploadUrl;
        $this->deleteUrl = $deleteUrl;
        $this->galleryItems = $galleryItems;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.trovie-gallery');
    }
}
