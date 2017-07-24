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
        'image' => '',
        'wrapper' => '',
        'id' => ''
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
