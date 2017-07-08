<?php

namespace App\Widgets;

use Arrilot\Widgets\AbstractWidget;

class Form extends AbstractWidget
{
    /**
     * The configuration array.
     *
     * @var array
     */
    protected $config = [
        'style' = config('rating.key')
    ];

    /**
     * Treat this method as a controller action.
     * Return view() or other content to display.
     */
    public function run()
    {
        //

        return view('widgets.form', [
            'config' => $this->config,
        ]);
    }
}
