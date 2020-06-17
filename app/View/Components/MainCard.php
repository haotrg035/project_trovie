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
     * @var string
     */
    public $headerClass;

    /**
     * Create a new component instance.
     *
     * @param bool $hasHeader
     * @param string $bodyClass
     * @param string $headerClass
     */
    public function __construct($hasHeader = false, $bodyClass = '', $headerClass = '')
    {
        $this->hasHeader = $hasHeader;
        $this->bodyClass = $bodyClass;
        $this->headerClass = $headerClass;
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
