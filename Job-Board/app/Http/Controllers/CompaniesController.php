<?php

namespace App\Http\Controllers;

use App\Http\Requests\CompaniesUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Companies;

class CompaniesController extends Controller
{
    /**
     * Create a new line in the companie table.
     */
    public function create(Request $request)
    {
        /* Gestion name deja present dans la table  */
        foreach (Companies::all() as $companie) {
            if ($request['name'] == $companie->name) {
                return "Error name $companie->name deja présent dans la table.";
            }
        }

        $post = new Companies();

        $post->name = $request['name'];
        $post->description = $request['description'];

        $post->save();

        //A modifier :
        return "Titre : " . $request['name'] . ",\n Description : " . $request['description'] . "\nLigne créée avec succee.";
    }

    /**
     * Update the companie's profile information.
     */
    public function update(CompaniesUpdateRequest $request): RedirectResponse
    {
        $request->companies()->fill($request->validated());

        $request->companies()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the companie's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $companie = $request->companies();
        $companie->delete();

        return Redirect::to(url()->current());
    }
}
