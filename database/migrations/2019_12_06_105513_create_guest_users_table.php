<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGuestusersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('guest_users', function (Blueprint $table) {
            $table->increments('id');
            $table->date('birthday');
            $table->string('full_name', 60);
            $table->tinyInteger('gender')->default('0');
            $table->string('avatar', 255)->nullable();
            $table->string('address', 255);
            $table->string('email', 255);
            $table->string('phone', 11);
            $table->string('id_card', 13);
            $table->datetime('id_card_date');
            $table->string('career', 60);
            $table->string('note');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('guest_users');
    }
}

