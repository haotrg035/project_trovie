

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLocalitychatroomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('locality_chat_rooms', function (Blueprint $table) {
            $table->increments('id');
            $table->string('noti', 250)->default('');
            $table->integer('city_id')->unsigned();
            $table->timestamps();
            $table->index(["city_id"]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('locality_chat_rooms');
    }
}

