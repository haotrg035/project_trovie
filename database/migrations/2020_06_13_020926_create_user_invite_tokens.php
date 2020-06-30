<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserInviteTokens extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_invite_tokens', function (Blueprint $table) {
            $table->string('token', config('app.user_invitation_token_length'));
            $table->unsignedInteger('user_id');
            $table->dateTime('expired_at');
            $table->dateTime('next_generate_at');
            $table->primary('token');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_invite_tokens');
    }
}
