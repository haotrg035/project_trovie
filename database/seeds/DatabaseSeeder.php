<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CitySeeder::class);
        $this->call(DistrictSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(HostSeeder::class);
        $this->call(RoomSeeder::class);

        \Illuminate\Support\Facades\DB::table('users')->find(1)->update([
            'username' => 'haotrg035',
            'role' => 1
        ]);
    }
}
