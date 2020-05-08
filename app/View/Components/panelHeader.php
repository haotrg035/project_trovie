<?php

namespace App\View\Components;

use Illuminate\View\Component;

class panelHeader extends Component
{
    public $panelTitle;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($panelTitle)
    {
        //
        $this->panelTitle = $panelTitle;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.panel-header');
    }
}
