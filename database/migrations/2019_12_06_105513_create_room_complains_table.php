

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoomcomplainsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('room_complains', function (Blueprint $table) {
            $table->increments('id');
            $table->string('content', 250);
            $table->datetime('time');
            $table->tinyInteger('state')->default('0');
            $table->integer('host_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->timestamps();
            $table->index(["host_id"]);
            $table->index(["user_id"]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('room_complains');
    }
}

