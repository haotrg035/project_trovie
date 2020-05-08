<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserdetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_details', function (Blueprint $table) {
            $table->integer('user_id')->unsigned();
            $table->string('avatar', 255)->nullable();
            $table->string('address', 255)->nullable();
            $table->string('phone', 10)->unique()->nullable();
            $table->string('id_card', 13)->nullable();
            $table->datetime('id_card_date')->nullable();
            $table->string('career', 60)->nullable();
            $table->string('desc', 250)->nullable();
            $table->timestamps();

            $table->primary('user_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_details');
    }
}

