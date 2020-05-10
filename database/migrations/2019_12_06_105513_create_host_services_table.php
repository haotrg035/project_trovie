<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHostservicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('host_services', function (Blueprint $table) {
            $table->increments('id');
            $table->tinyInteger('unit_id')->unsigned();
            $table->integer('host_id')->unsigned();
            $table->string('name', 60);
            $table->integer('cost')->unsigned();
            $table->tinyInteger('type')->default('1');
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
        Schema::dropIfExists('host_services');
    }
}

