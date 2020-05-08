<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHomeservicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('home_services', function (Blueprint $table) {
            $table->increments('id');
            $table->tinyInteger('unit_id')->unsigned();
            $table->integer('home_id')->unsigned();
            $table->string('name', 60);
            $table->integer('cost')->unsigned();
            $table->tinyInteger('type')->default('1');
            $table->timestamps();
            $table->index(["home_id"]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('home_services');
    }
}

