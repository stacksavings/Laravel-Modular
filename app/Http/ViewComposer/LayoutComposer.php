<?php 

namespace App\Http\ViewComposers;
 
use Illuminate\Contracts\View\View;
 
class LayoutComposer {

    public $header;

    public function __construct()
    {
        $uri = $_SERVER['REQUEST_URI'];

        if ($uri == '/mansion/index' or $uri == '/public/mansion/index') {
            $this->header = 'templates.mansion.banner';
        } else {
            $this->header = 'templates.mansion.second-banner';
        }
    }

    /**
     * Bind data to the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $view->with('header', $this->header);
    }
}