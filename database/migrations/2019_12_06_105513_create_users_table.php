<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->string('username', 191)->unique();
            $table->string('password', 255);
            $table->string('full_name', 60);
            $table->string('email',191)->unique()->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->tinyInteger('gender')->unsigned()->default('0');
            $table->datetime('birthday')->nullable();
            $table->tinyInteger('role')->unsigned()->default('0');
            $table->integer('state')->unsigned()->default('0');
            $table->string('invite_key', 50)->unique()->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}

