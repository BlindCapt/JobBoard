<?php

namespace Database\Factories;

use App\Models\Companies;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class OfferFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $arr = [];
        foreach (Companies::all() as $company) {
            array_push($arr, $company->id);
        }
        return [
            'company_id' => $arr[random_int(0, count($arr) - 2)],
            'description' => fake()->text(),
            'title' => Str::random(10),
            'full_description' => fake()->realTextBetween(600, 1200),
        ];
    }
}
