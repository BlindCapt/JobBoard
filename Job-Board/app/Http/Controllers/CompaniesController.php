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
    public function create(Request $request): RedirectResponse
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
        return Redirect::to('/ManageCompanies');
    }

    public function read()
    {
        $ListCompanies = [];
        foreach (Companies::all() as $companie) {
            array_push($ListCompanies, [$companie->id, $companie->name, $companie->description]);
        }

        return Inertia::render("Admin/ManageCompanies", ['data' => $ListCompanies]);
    }

    /**
     * Update the companie's profile information.
     */
    public function update(Request $request): RedirectResponse
    {
        $companie = Companies::find($request['id']);

        $companie->name = $request['name'];
        $companie->description = $request['description'];

        $companie->save();

        return Redirect::to('/ManageCompanies');
    }

    /**
     * Delete the companie's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $companie = Companies::find($request['id']);
        $companie->delete();

        return Redirect::to('/ManageCompanies');
    }
}
