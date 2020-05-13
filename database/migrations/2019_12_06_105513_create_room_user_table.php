<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoomUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('room_user', function (Blueprint $table) {
            $table->datetime('date_in');
            $table->integer('room_id')->unsigned();
            $table->integer('user_id')->unsigned()->unique();
            $table->boolean('active')->default(true);
            $table->timestamps();
            $table->primary(['room_id', 'user_id','date_in']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('room_user');
    }
}

