<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Invoice;
use Faker\Generator as Faker;

$factory->define(Invoice::class, function (Faker $faker) {
    return [
        'room_id' => random_int(1, 10),
        'total_amount' => random_int(1, 10) * 1000000,
        'state' => random_int(1, 3),
        'created_at' => time(),
        'updated_at' => time(),
    ];
});
