<?php

namespace App\Widgets;

use App\Stacksavings\Spreadsheet;
use Arrilot\Widgets\AbstractWidget;

class Header extends AbstractWidget
{
    /**
     * The configuration array.
     *
     * @var array
     */
    protected $config = [
        'main_title' => '',
        'slogan' => '',
        'menu' => []
    ];

    /**
     * Treat this method as a controller action.
     * Return view() or other content to display.
     */
    public function run()
    {
        return view('widgets.header', [
            'config' => $this->config,
        ]);
    }
}
