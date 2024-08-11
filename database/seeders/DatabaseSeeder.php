<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\DataPetugas;
use Illuminate\Database\Seeder;
use App\Models\Jabatan;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Jabatan::factory(500)->hasPetugas(10)->create();
    }
}
