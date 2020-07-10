<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hosts', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->string('name', 120);
            $table->string('desc', 500)->default('');
            $table->string('announcement', 250)->default('');
            $table->string('image')->nullable();
            $table->boolean('notice')->default(false);
            $table->string('address', 250)->default('');
            $table->string('phone', 11)->nullable();
            $table->unsignedInteger('district_id')->default(0);
            $table->unsignedInteger('city_id')->default(0);
            $table->double('latitude')->nullable();
            $table->double('longitude')->nullable();
//            $table->tinyInteger('type')->unsigned()->default('0');
//            $table->tinyInteger('rating')->default('0');
            $table->tinyInteger('date_payment')->default(1);
            $table->tinyInteger('date_note_electric')->default(1);
            $table->unsignedInteger('cost_electric');
            $table->tinyInteger('date_note_water')->default(1);
            $table->unsignedInteger('cost_water');
            $table->tinyInteger('floors')->unsigned()->default('1');
//            $table->timestamps();
            $table->index(["user_id"]);
            $table->softDeletes();
//            $table->index(["district_id"]);
            $table->foreign('city_id')->references('id')->on('cities');
            $table->foreign('district_id')->references('id')->on('districts');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hosts');
    }
}

