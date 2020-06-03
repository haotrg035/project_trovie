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
        $faker = Faker\Factory::create();

        $this->call(CitySeeder::class);
        $this->call(DistrictSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(HostSeeder::class);
        $this->call(RoomSeeder::class);

        DB::table('users')->where('id', 1)->update([
            'username' => 'haotrg035',
            'role' => 1
        ]);

        $userDetails = [];
        for ($i = 1; $i <= 20; $i++) {
            $userDetails[] = [
                'user_id' => $i,
                'phone' => '033210488' . $i,
                'address' => $faker->address,
                'career' => $faker->jobTitle,
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis corporis error, eveniet illum ipsam mollitia quibusdam similique. Dolor doloribus eos quae quas! Accusantium deserunt eaque excepturi facilis sint, voluptatem.',
                'created_at' => date(now()),
                'updated_at' => date(now())
            ];
        }
        DB::table('user_details')->insert($userDetails);

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

        foreach ($hostUsers as $user) {
            $hosts = DB::table('hosts')->where('user_id', $user)->get('id')->toArray();
            $hosts = array_map(function ($val) {
                return $val->id;
            }, $hosts);
            foreach ($hosts as $host) {
                $rooms = DB::table('rooms')->where('host_id', $host)->get('id')->toArray();
                $services = DB::table('services')->where('user_id', $user)->get('id')->toArray();

                $rooms = array_map(function ($val) {
                    return $val->id;
                }, $rooms);
                $services = array_map(function ($val) {
                    return $val->id;
                }, $services);

                foreach ($rooms as $room) {
                    $_services = array_map(function ($val) use ($room) {
                        return ['room_id' => $room, 'service_id' => $val];
                    }, $services);

                    DB::table('room_service')->where('id', $rooms)->insert($_services);
                }
            }
        }
    }
}
