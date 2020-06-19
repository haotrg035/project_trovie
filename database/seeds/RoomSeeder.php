<?php

use Illuminate\Database\Seeder;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\Room::class, 10)->create();
        $faker = \Faker\Factory::create();
        for ($i = 1; $i <= 10; $i++) {
            DB::table('room_articles')->insert([
                'title' => $faker->title,
                'room_id' => $i,
                'content' => $faker->paragraph,
                'created_at' => date('Y-m-d', time()),
                'updated_at' => date('Y-m-d', time()),
            ]);
        }
//        for ($i = 1; $i <= 20; $i++) {
//            \Illuminate\Support\Facades\DB::table('room_user')->insert([
//                'date_in' => now(),
//                'room_id' => random_int(1, 10),
//                'user_id' => $i
//            ]);
//        }
    }
}
