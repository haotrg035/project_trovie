<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;

$factory->define(\App\Models\Contract::class, function (Faker $faker) {
    return [
        'created_at' => date('Y-m-d', time()),
        'updated_at' => date('Y-m-d', time()),
//        'updated_at' => date('y-m-d', time()),
        'expired_at' => date('Y-m-d', time() + 86400),
        'address' => $faker->streetAddress,
        'deposit' => random_int(0, 1000) * 1000
    ];
});
