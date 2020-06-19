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
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($horizon = false)
    {
        $this->horizon = $horizon;
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
