<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PhpParser\Node\Stmt\TryCatch;

use function Laravel\Prompts\error;

class CrudController extends Controller
{
    //TABLE OFFERS :
    //Ecrit une nouvelle entrée dans la table offers
    public function SetOffer(Request $request)
    {

        $post = new \App\Models\offer();

        $post->company_id = $request['company_id'];
        $post->title = $request['name'];
        $post->description = $request['text'];

        $post->save();

        //A modifier :
        return "Titre : " . $request['name'] . ",\n Description : " . $request['text'];
    }

    //Renvoit l'entrée de la table offers en donnant en $request un id.
    public function GetOfferID(Request $request)
    {

        $id = $request['id'];

        $post = \App\Models\Offer::findOrFail($id);

        return Inertia::render('Offre/FullOffre', [
            'id' => $post->id,
            'company_id' => $post->company_id,
            'title' => $post->title,
            'description' => $post->description,
            'full_description' => $post->full_description
        ]);
    }


    //TABLE COMPANIES :
    //Ecrit une nouvelle entrée dans la table companies
    public function SetCompany(Request $request)
    {

        $post = new \App\Models\Companies();

        $post->name = $request['name'];


        $post->description = $request['description'];
        $post->save();

        //A modifier :
        return "Titre : " . $request['name'] . ",\n Description : " . $request['description'];
    }
}
