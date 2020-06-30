<?php

use Illuminate\Database\Seeder;

class HostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\Host::class,3)->create();
    }
}
