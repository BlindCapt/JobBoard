<?php

namespace Database\Factories;

use App\Models\Company;
use Brick\Math\BigInteger;
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
        foreach (Company::all() as $company) {
            array_push($arr, $company->id);
        }
        return [
            'company_id' => $arr[0],
            'description' => fake()->text(),
            'title' => Str::random(10),
            'description' => fake()->text(),
        ];
    }
}
