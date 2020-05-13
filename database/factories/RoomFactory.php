<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\Models\Room::class, function (Faker $faker) {
    return [
        'host_id' => random_int(1, 3),
        'name' => $faker->name,
        'announcement' => $faker->paragraph,
        'state' => random_int(1, 3),
        'desc' => $faker->paragraph,
    ];
});
