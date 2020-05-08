<?php

namespace App\View\Components;

use Illuminate\View\Component;

class MainCard extends Component
{
    public $hasHeader;
    /**
     * @var string
     */
    public $customClasses;
    /**
     * @var string
     */
    public $bodyClass;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct( $hasHeader = false, $bodyClass = '')
    {
        $this->hasHeader = $hasHeader;
        $this->bodyClass = $bodyClass;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.main-card');
    }
}
