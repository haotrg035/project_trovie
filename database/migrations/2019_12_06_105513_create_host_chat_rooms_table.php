<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHostchatroomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('host_chat_rooms', function (Blueprint $table) {
            $table->integer('id')->unsigned();
            $table->string('notice', 250)->default('');
            $table->integer('host_id')->unsigned();
            $table->timestamps();
            $table->index(["host_id"]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('host_chat_rooms');
    }
}

