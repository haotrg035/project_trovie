<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\User::class, 20)->create();

        $faker = Faker\Factory::create();

        DB::table('users')->where('id', 1)->update([
            'username' => 'haotrg035',
            'role' => 1
        ]);

        $userDetails = [];
        for ($i = 1; $i <= 20; $i++) {
            $userDetails[] = [
                'user_id' => $i,
                'phone' => '033210488' . $i,
                'id_card' => \App\Helper\TrovieHelper::generateRandomString(13, 1),
                'id_card_date' => date('y-m-d', time() - (86400 * 30 * 12 * 10)),
                'id_card_address' => $faker->address,
                'address' => $faker->address,
                'career' => $faker->jobTitle,
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis corporis error, eveniet illum ipsam mollitia quibusdam similique. Dolor doloribus eos quae quas! Accusantium deserunt eaque excepturi facilis sint, voluptatem.',
                'created_at' => date(now()),
                'updated_at' => date(now())
            ];
        }
        DB::table('user_details')->insert($userDetails);
    }
}
