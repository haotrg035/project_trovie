<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Host;
use Faker\Generator as Faker;

$factory->define(Host::class, function (Faker $faker) {
    return [
        'user_id' => 1,
        'name' => $faker->name,
        'desc' => $faker->paragraph,
        'date_payment' => random_int(1, 31),
        'date_note_electric' => random_int(1, 31),
        'cost_electric' => random_int(10,30) * 100,
        'date_note_water' => random_int(1, 31),
        'cost_water' => random_int(10,30) * 100,
        'city_id' => 92,
        'district_id' => 916,
        'floors' => random_int(1, 3),
        'address' => $faker->address,
        'latitude' => $faker->latitude,
        'longitude' => $faker->longitude
    ];
});
