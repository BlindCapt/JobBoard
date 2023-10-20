<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    /**
     * Create a new line in the user table.
     */
    public function create(Request $request): RedirectResponse
    {   /*
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        */
        $user = new User();

        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->password = Hash::make($request['password']);


        $user->save();

        //A modifier :
        return Redirect::to('/ManageUsers');
    }

    public function read()
    {
        $ListUsers = [];
        foreach (User::all() as $user) {
            array_push($ListUsers, [$user->id, $user->name, $user->email]);
        }

        return Inertia::render("Admin/ManageUser", ['data' => $ListUsers]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(Request $request): RedirectResponse
    {
        $User = User::find($request['id']);

        $User->name = $request['name'];
        $User->email = $request['email'];

        $User->save();

        return Redirect::route('manage.users');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $User = User::find($request['id']);
        $User->delete();

        return Redirect::to('/ManageUsers');
    }
}
