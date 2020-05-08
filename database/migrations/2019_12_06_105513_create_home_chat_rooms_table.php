

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHomechatroomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('home_chat_rooms', function (Blueprint $table) {
            $table->integer('id')->unsigned();
            $table->string('noti', 250)->default('');
            $table->integer('homes_id')->unsigned();
            $table->timestamps();
            $table->index(["homes_id"]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('home_chat_rooms');
    }
}

