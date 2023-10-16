<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {

        return Inertia::render('Home', [
            'name' => 'QSDFQSD',
        ]);
    }

    public function OfferPage()
    {
        return Inertia::render('Description'); //nom a changer.
    }

    public function CompanyPage()
    {
        return Inertia::render('CompanyForm');
    }


    public function savedescription(Request $request)
    {

        //dd($request);

        $post = new \App\Models\offer();
        $post->title = $request['name'];
        $post->description = $request['text'];
        $post->save();

        return "Titre : " . $request['name'] . ",\n Description : " . $request['text'];
    }
    public function jobs()
    {
        return Inertia::render('Jobs');
    }
}
