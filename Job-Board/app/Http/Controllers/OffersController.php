<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Offer;
use Illuminate\Auth\Events\Registered;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Hash;

class OffersController extends Controller
{
    /**
     * Create a new line in the offer table.
     */
    public function create(Request $request): RedirectResponse
    {   /*
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        */
        $offer = new Offer();

        $offer->company_id = $request['company_id'];
        $offer->title = $request['title'];
        $offer->description = $request['description'];
        $offer->full_description = $request['full_description'];


        $offer->save();

        //A modifier :
        return Redirect::to('/ManageOffers');
    }

    public function read()
    {
        $ListOffer = [];
        foreach (Offer::all() as $offer) {
            array_push($ListOffer, [$offer->id, $offer->company_id, $offer->title, $offer->description, $offer->full_description]);
        }

        return Inertia::render("Admin/ManageOffers", ['data' => $ListOffer]);
    }

    /**
     * Update the offer's profile information.
     */
    public function update(Request $request): RedirectResponse
    {
        $Offer = Offer::find($request['id']);

        $Offer->title = $request['title'];
        $Offer->description = $request['description'];
        $Offer->full_description = $request['full_description'];

        $Offer->save();

        return Redirect::route('manage.offers');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $Offer = Offer::find($request['id']);
        $Offer->delete();

        return Redirect::to('/ManageOffers');
    }
}
