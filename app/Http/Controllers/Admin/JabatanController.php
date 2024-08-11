<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Jabatan;

class JabatanController extends Controller
{
    public function index(Request $request)
    {
        $load = $request->load ? $request->load : 10;
        $query = Jabatan::query()->withCount('petugas');
        if ($request->cari) {
            $query->where('nama_jabatan', 'like', '%' . $request->cari . '%');
        }
        $jabatan = $query->latest()->paginate($load);
        $total = Jabatan::count();
        return inertia('Auth/Jabatan/Index', compact('jabatan', 'total'));
    }
}
