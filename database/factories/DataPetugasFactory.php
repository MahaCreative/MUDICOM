<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DataPetugas>
 */
class DataPetugasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $jek = ['laki-laki','perempuan'];
        return [
            'first_name' => $this->faker->firstName,
'last_name' => $this->faker->lastName(),
'jenis_kelamin' => fake()->randomElement( ['laki-laki','perempuan']),
'penidikan' => $this->faker->sentence(),
'tanggal_masuk' => $this->faker->dateTimeBetween('-1 years', 'now'),
'foto' => fake()->imageUrl()
        ];
    }
}
