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
//            $table->string('announcement', 255)->nullable();
//            $table->boolean('notice')->default(false);
//            $table->unsignedTinyInteger('state')->default(1);
//            $table->unsignedTinyInteger('type')->default('0');
            $table->string('desc', 500)->nullable();
//            $table->timestamps();
            $table->index(["host_id"]);
            $table->softDeletes();

            $table->foreign('host_id')->references('id')->on('hosts');
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

