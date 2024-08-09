<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('data_petugas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('jabatan_id')->constrained('jabatans')->onDelete('cascade');
            $table->string('first_name',50);
            $table->string('last_name',50)->nullable();
            $table->string('jenis_kelamin');
            $table->string('penidikan')->nullable();
            $table->date('tanggal_masuk');
            $table->string('foto');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('data_petugas');
    }
};
