<?php

namespace App\View\Components\FrontEnd;

use Illuminate\View\Component;

class RoomCard extends Component
{
    /**
     * @var bool
     */
    public $horizon;
    /**
     * @var array
     */
    public $articleDetail;

    /**
     * Create a new component instance.
     *
     * @param bool $horizon
     * @param array $articleDetail
     */
    public function __construct($horizon = false, $articleDetail = [])
    {
        $this->horizon = $horizon;
        $this->articleDetail = $articleDetail;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.front-end.room-card');
    }
}
