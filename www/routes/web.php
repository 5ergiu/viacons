<?php

use App\Http\Controllers;
use Illuminate\Support\Facades\Route;

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

# Public & admin routes
Route::middleware(['locale'])->group(function() {
    Route::get('/',                  [Controllers\HomeController::class, 'index'])->name('home');
    Route::get('/locale/{code}',     [Controllers\LocaleController::class, 'handleLocaleChange'])->name('locale');

    // News
    Route::get('news',               [Controllers\NewsController::class, 'index'])->name('news.index');
    Route::get('news/details',       [Controllers\NewsController::class, 'show'])->name('news.show');
    Route::get('news/create',        [Controllers\NewsController::class, 'details'])->name('news.create');
    Route::get('news/edit',          [Controllers\NewsController::class, 'edit'])->name('news.edit');

    // Projects
    Route::get('/projects',          [Controllers\ProjectsController::class, 'index'])->name('projects.index');

    // Equipments
    Route::get('/equipment',         [Controllers\EquipmentsController::class, 'index'])->name('equipment.index');

    // Careers
    Route::get('/career',            [Controllers\CareersController::class, 'index'])->name('career.index');
    Route::get('/career/{id}',       [Controllers\CareersController::class, 'show'])->name('career.show');

    // About us
    Route::get('/about-us',          [Controllers\AboutController::class, 'index'])->name('about.index');

    // Contact
    Route::post('/contact',          [Controllers\ContactsController::class, 'store'])->name('contact.store');
    Route::get('/contact/create',    [Controllers\ContactsController::class, 'create'])->name('contact.create');

    // Admin routes
    Route::get('/admin/career',      [Controllers\CareersController::class, 'adminIndex'])->name('admin.careers');
});
