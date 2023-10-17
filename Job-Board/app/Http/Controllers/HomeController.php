<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $listId = [];
        foreach (Offer::all() as $offers) {
            array_push($listId, [$offers->title, $offers->description]);
        }
        return Inertia::render('ListOffre', [
            'data' => $listId,
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

        $post = new \App\Models\Offer();
        $post->title = $request['name'];
        $post->description = $request['text'];
        $post->save();

        return "Titre : " . $request['name'] . ",\n Description : " . $request['text'];
    }
    public function jobs()
    {
        return Inertia::render('Jobs');
    }

    public function create()
    {
        return Inertia::render('test/Create');
    }

    public function offer()
    {
        return Inertia::render('Offre/Offers');
    }
}
