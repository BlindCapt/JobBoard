<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\CrudController;
use App\Http\Controllers\CompaniesController;
use App\Http\Controllers\Job_ApplyController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\OffersController;
use App\Models\Companies;
use App\Models\Offer;
use Illuminate\Http\Request;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//ROUTES PERSO :
Route::get('/Jobs', [HomeController::class, 'Jobs']);

Route::get('/Home', function () {
    $listId = [];
    foreach (Offer::all() as $offers) {
        array_push($listId, [$offers->title, $offers->description, $offers->id]);
    }
    return Inertia::render('Offre/ListOffre', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'data' => $listId,
    ]);
})->name('home');

Route::get('/test', [HomeController::class, 'Create']);


//ROUTES CREATE DATA :
Route::post('/setOffer', [CrudController::class, 'setOffer'])->name('setOffer');
Route::post('/setCompany', [CrudController::class, 'setCompany'])->name('setCompany');

//ROUTES GET DATA :
Route::get('/setCompany', [HomeController::class, 'CompanyPage']);
Route::get('/setOffer', [HomeController::class, 'OfferPage']);
Route::get('/offer', function (Request $request) {
    $id = $request['id'];

    $post = Offer::findOrFail($id);
    return Inertia::render('Offre/FullOffre', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'id' => $post->id,
        'company_id' => $post->company_id,
        'title' => $post->title,
        'description' => $post->description,
        'full_description' => $post->full_description
    ]);
})->name('offre');

require __DIR__ . '/auth.php';


//Route ADMIN 

/***Companies***/

Route::get("/ManageCompanies", [CompaniesController::class, 'read'])->middleware(['auth'])->name('manage.companies');
Route::post("/ManageCompanies", [CompaniesController::class, 'create'])->name('create.companie');
Route::delete("/ManageCompanies", [CompaniesController::class, 'destroy'])->name('delete.companie');
Route::patch("/ManageCompanies", [CompaniesController::class, 'update'])->name('update.companie');

/***Users***/

Route::get("/ManageUsers", [UsersController::class, 'read'])->middleware(['auth'])->name('manage.users');
Route::post("/ManageUsers", [UsersController::class, 'create'])->name('create.user');
Route::delete("/ManageUsers", [UsersController::class, 'destroy'])->name('delete.user');
Route::patch("/ManageUsers", [UsersController::class, 'update'])->name('update.user');

/***Offers***/

Route::get("/ManageOffers", [OffersController::class, 'read'])->middleware(['auth'])->name('manage.offers');
Route::post("/ManageOffers", [OffersController::class, 'create'])->name('create.offer');
Route::delete("/ManageOffers", [OffersController::class, 'destroy'])->name('delete.offer');
Route::patch("/ManageOffers", [OffersController::class, 'update'])->name('update.offer');

/***Apply***/

Route::get("/ManageApply", [Job_ApplyController::class, 'read'])->middleware(['auth'])->name('manage.apply');
Route::post("/ManageApply", [Job_ApplyController::class, 'create'])->name('create.apply');
Route::delete("/ManageApply", [Job_ApplyController::class, 'destroy'])->name('delete.apply');
Route::patch("/ManageApply", [Job_ApplyController::class, 'update'])->name('update.apply');
