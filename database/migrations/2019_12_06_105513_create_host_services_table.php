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
            $table->unsignedTinyInteger('unit_id');
            $table->integer('host_id')->unsigned();
            $table->string('name', 60);
            $table->unsignedInteger('cost')->unsigned();
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

