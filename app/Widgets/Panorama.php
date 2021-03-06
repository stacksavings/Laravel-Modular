<?php

namespace App\Widgets;

use Arrilot\Widgets\AbstractWidget;

class Panorama extends AbstractWidget
{
    /**
     * The configuration array.
     *
     * @var array
     */
    protected $config = [
        'img' => '',
        'id' => '',
        'width' => '600px',
        'height' => '400px'
    ];

    /**
     * Treat this method as a controller action.
     * Return view() or other content to display.
     */
    public function run()
    {
        // Path to widget template
        return view('widgets.panorama', [
            'config' => $this->config,
        ]);
    }
}
