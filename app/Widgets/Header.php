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
    protected $config = [];

    /**
     * Treat this method as a controller action.
     * Return view() or other content to display.
     */
    public function run()
    {
        $sheet = new Spreadsheet();
        $data = $sheet->read('header')->get(); 
        $this->config = array_merge($this->config, $data);

        return view('widgets.header', [
            'config' => $this->config,
        ]);
    }
}
