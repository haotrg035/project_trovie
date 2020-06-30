<?php

use Illuminate\Database\Seeder;

class InvoiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\Invoice::class, 30)->create();
        $faker = \Faker\Factory::create();
        for ($i = 1; $i <= 30; $i++) {
            $invoiceDetail = [];
            for ($j = 1; $j < random_int(3, 4); $j++) {
                DB::table('invoice_details')->insert([
                    'invoice_id' => $i,
                    'service' => $faker->word,
                    'quantity' => random_int(1, 3),
                    'price' => random_int(1, 5) * 100000,
                    'unit' => $faker->word
                ]);
            }
        }
    }
}
