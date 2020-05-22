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

        DB::table('users')->where('id', 1)->update([
            'username' => 'haotrg035',
            'role' => 1
        ]);

        $hostUsers = DB::table('users')->where('role', 1)->get('id')->toArray();
        $hostUsers = array_map(function ($val) {
            return $val->id;
        }, $hostUsers);
        foreach ($hostUsers as $user) {
            $units = array_map(function ($val) use ($user) {
                return ['user_id' => $user, 'name' => $val];
            }, config('app.default_service_units'));

            DB::table('service_units')->insert($units);
        }

        foreach ($hostUsers as $userId) {
            $units = DB::table('service_units')->where('user_id', $userId)->get('id')->toArray();
            $units = array_map(function ($val) {
                return $val->id;
            }, $units);
            $services = array_map(function ($val) use ($userId, $units) {
                return [
                    'user_id' => $userId,
                    'unit_id' => $units[array_rand($units)],
                    'name' => $val,
                    'cost' => random_int(0, 300) * 1000
                ];
            }, config('app.default_services'));
            DB::table('services')->insert($services);
        }
    }
}
