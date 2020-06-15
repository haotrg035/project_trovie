<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoomGuestUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('room_guest_user', function (Blueprint $table) {
            $table->unsignedInteger('room_id');
            $table->unsignedInteger('guest_user_id');
            $table->date('date_in');
            $table->unsignedBigInteger('contract_id');
            $table->unsignedTinyInteger('active')->default(1);

            $table->primary(['room_id', 'guest_user_id', 'date_in']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('room_guest_user');
    }
}

