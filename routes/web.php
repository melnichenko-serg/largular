<?php

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

use App\User;
use App\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return view('index');
});

Route::post('/api/auth/signup', function (Request $request) {
    return User::create($request->all());
});
Route::post('/api/auth/login', function (Request $request) {
    $credentials = ['email' => $request->email, 'password' => $request->password];
    if (Auth::attempt($credentials)) {
        $user = User::where('email', $request->email)->first();
        Auth::login($user);
        return response()->json($user);
    } else {
        die("Fuck off");
    }
});


Route::get('/api/books', function () {
    return response()->json(Book::all());
});
Route::get('/api/books/{id}', function ($id) {
    return response()->json(Book::findOrFail($id));
});
Route::post('/api/books', function (Request $request) {
    return Book::create($request->all());
});
Route::put('/api/books/{id}', function ($id, Request $request) {
    $book = Book::findOrFail($id);

    return $book->update($request->all());
});
Route::delete('/api/books/{id}', function ($id) {
    return Book::delete($id);
});
