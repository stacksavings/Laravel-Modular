<?php

namespace App\Widgets;

use Arrilot\Widgets\AbstractWidget;

class Footer extends AbstractWidget
{
    /**
     * The configuration array.
     *
     * @var array
     */
    protected $config = [
        "footer_title" => "",
        "sentence" => "",
        "phone" => "",
        "address" => "",
        "copyright" => ""
    ];

    /**
     * Treat this method as a controller action.
     * Return view() or other content to display.
     */
    public function run()
    {
        //

        return view('widgets.footer', [
            'config' => $this->config,
        ]);
    }
}
