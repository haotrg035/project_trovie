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
            'role' => config('app.role.host.hostOwner'),
            'admin_role' => config('app.role.web.admin'),
        ]);

        $userDetails = [];
        $userInviteTokens = [];
        for ($i = 1; $i <= 20; $i++) {
            $userDetails[] = [
                'user_id' => $i,
                'phone' => '033210488' . $i,
                'id_card' => \App\Helper\TrovieHelper::generateRandomString(12, 1),
                'id_card_date' => date('Y-m-d', time() - (86400 * 30 * 12 * 10)),
                'id_card_address' => $faker->address,
                'address' => $faker->address,
                'career' => $faker->jobTitle,
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis corporis error, eveniet illum ipsam mollitia quibusdam similique. Dolor doloribus eos quae quas! Accusantium deserunt eaque excepturi facilis sint, voluptatem.',
                'created_at' => date(now()),
                'updated_at' => date(now())
            ];

            $token = $i . \App\Helper\TrovieHelper::generateRandomString(config('app.user_invitation_token_length') - strlen($i . ''));
            $userInviteTokens[] = [
                'user_id' => $i,
                'token' => $token,
                'expired_at' => date('Y-m-d H:i:s',
                    time() + \App\Helper\TrovieHelper::getMinuteToTimeStamp(config('app.user_invitation_token_minutes'))),
                'next_generate_at' => date('Y-m-d H:i:s',
                    time() + \App\Helper\TrovieHelper::getMinuteToTimeStamp(3)),
            ];
        }
        DB::table('user_invite_tokens')->insert($userInviteTokens);
        DB::table('user_details')->insert($userDetails);
    }
}
