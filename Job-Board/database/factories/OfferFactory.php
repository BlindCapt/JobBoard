<?php

namespace Database\Factories;

use App\Models\Companies;
use Illuminate\Database\Eloquent\Factories\Factory;
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
        echo "[";
        foreach ($arr as $item) {
            echo "$item, ";
        }
        echo "]" . var_dump($arr[0]) . "\n";
        return [
            'company_id' => $arr[0],
            'description' => fake()->text(),
            'title' => Str::random(10),
        ];
    }
}
