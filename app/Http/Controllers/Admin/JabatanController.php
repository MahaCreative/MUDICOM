<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Jabatan;
class JabatanController extends Controller
{
    public function index(Request $request){
        $query = Jabatan::query();
        $jabatan = $query->latest()->get();
        return inertia('Auth/Jabatan/Index', compact('jabatan'));
    }
}
