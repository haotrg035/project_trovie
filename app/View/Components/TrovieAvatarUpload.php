<?php

namespace App\View\Components;

use Illuminate\View\Component;

class TrovieAvatarUpload extends Component
{
    public $image;
    public $uploadUrl;
    /**
     * @var string
     */
    public $method;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($image, $uploadUrl, $method = 'POST')
    {
        //
        $this->image = $image;
        $this->uploadUrl = $uploadUrl;
        $this->method = $method;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.trovie-avatar-upload');
    }
}
