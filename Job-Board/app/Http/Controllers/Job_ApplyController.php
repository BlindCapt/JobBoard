<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Job_Apply;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class Job_ApplyController extends Controller
{
    /**
     * Create a new line in the offer table.
     */
    public function create(Request $request): RedirectResponse
    {
        $apply = new Job_Apply();

        $apply->id_offre = $request['id_offre'];
        $apply->name = $request['name'];
        $apply->email = $request['email'];
        $apply->adress = $request['adress'];
        $apply->message = $request['message'];

        $apply->save();

        return Redirect::to("/Home");
    }

    public function read()
    {
        $ListApply = [];
        foreach (Job_Apply::all() as $apply) {
            array_push($ListApply, [
                $apply->id,
                $apply->id_offre,
                $apply->name,
                $apply->adress,
                $apply->message
            ]);
        }
        return Inertia::render("Admin/ManageApply", ['data' => $ListApply]);
    }

    public function update(Request $request): RedirectResponse
    {
        $apply = Job_Apply::find($request['id']);

        $apply->id_offre = $request['id_offre'];
        $apply->name = $request['name'];
        $apply->adress = $request['adress'];
        $apply->message = $request['message'];

        $apply->save();

        return Redirect::to('/ManageApply');
    }

    public function destroy(Request $request): RedirectResponse
    {
        $apply = Job_Apply::find($request['id']);
        $apply->delete();

        return Redirect::to('/ManageApply');
    }
}
