<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rooms', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('host_id')->unsigned();
            $table->string('name', 60);
            $table->unsignedInteger('price');
            $table->unsignedTinyInteger('acreage');
            $table->unsignedTinyInteger('members')->default(1);
            $table->unsignedTinyInteger('floor')->default(1);
            $table->string('announcement', 250)->default('');
            $table->boolean('notice')->default(false);
            $table->tinyInteger('state');
            $table->tinyInteger('type')->unsigned()->default('0');
            $table->string('desc', 500);
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
        Schema::dropIfExists('rooms');
    }
}

