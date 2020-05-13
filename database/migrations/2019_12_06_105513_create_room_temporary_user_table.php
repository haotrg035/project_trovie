

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoomtemporaryuserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('room_temporary_user', function (Blueprint $table) {
            $table->datetime('date_in');
            $table->integer('room_id')->unsigned();
            $table->timestamps();
            $table->index(["room_id"]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('room_temporary_user');
    }
}

