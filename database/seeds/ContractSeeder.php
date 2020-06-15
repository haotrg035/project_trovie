<?php

use Illuminate\Database\Seeder;

class ContractSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $parties = [];
        $rooms = [];
        $room_user = [];
        $hostUser = DB::table('users')->where('id', 1)->first();
        $hostUser->detail = DB::table('user_details')->where('user_id', $hostUser->id)->first();
        $roomIds = \App\Helper\TrovieHelper::convertAssocIdArrayToValueIdArray(
            DB::table('rooms')->get('id')->toArray(),
            'id'
        );
        factory(\App\Models\Contract::class, 14)->create();

        for ($i = 2; $i <= 15; $i++) {
            $b_party = DB::table('users')->where('id', $i)->first();
            $b_party->detail = DB::table('user_details')->where('user_id', $b_party->id)->first();
            $parties[] = [
                'contract_id' => $i - 1,
                'a_full_name' => $hostUser->full_name,
                'a_birthday' => $hostUser->birthday,
                'a_gender' => $hostUser->gender,
                'a_address' => $hostUser->detail->address,
                'a_phone' => $hostUser->detail->phone,
                'a_id_card' => $hostUser->detail->id_card,
                'a_id_card_date' => $hostUser->detail->id_card_date,
                'a_id_card_address' => $hostUser->detail->id_card_address,
                'b_full_name' => $b_party->full_name,
                'b_birthday' => $b_party->birthday,
                'b_gender' => $b_party->gender,
                'b_address' => $b_party->detail->address,
                'b_phone' => $b_party->detail->phone,
                'b_id_card' => $b_party->detail->id_card,
                'b_id_card_date' => $b_party->detail->id_card_date,
                'b_id_card_address' => $b_party->detail->id_card_address,
            ];
            $room = DB::table('rooms')->where('id', $roomIds[array_rand($roomIds)])->first();
            $host = DB::table('hosts')->where('id', $room->host_id)->first();
            $rooms[] = [
                'contract_id' => $i - 1,
                'price' => $room->price,
                'cost_water' => $host->cost_water,
                'cost_electric' => $host->cost_electric,
                'date_payment' => $host->date_payment,
                'address' => $host->address
            ];

            $room_user[] = [
                'room_id' => $room->id,
                'user_id' => $i,
                'date_in' => date('y-m-d', time() - (84600 * 30 - random_int(1, 12))),
                'contract_id' => $i - 1,
            ];
        }
        DB::table('contract_parties_details')->insert($parties);
        DB::table('contract_room_details')->insert($rooms);
        DB::table('room_user')->insert($room_user);
    }
}
