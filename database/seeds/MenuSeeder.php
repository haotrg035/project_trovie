<?php

use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        for ($i = 1; $i <= 10; $i++) {
            DB::table('menu_tables')->insert([
                'title' => $faker->word,
                'url' => '/',
                'pos' => $i
            ]);
        }
    }
}
