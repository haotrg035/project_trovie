<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoomarticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('room_articles', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255);
            $table->string('content', 600)->default('');
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
        Schema::dropIfExists('room_articles');
    }
}

