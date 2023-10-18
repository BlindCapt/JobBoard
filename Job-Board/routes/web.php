<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\CrudController;
use App\Models\Offer;

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
        array_push($listId, [$offers->title, $offers->description]);
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
Route::get('/offer', [CrudController::class, 'getOfferID'])->name('offre');

require __DIR__ . '/auth.php';
