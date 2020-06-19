<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGenaralForeignKey extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('room_guest_user', function (Blueprint $table) {
            $table->foreign('room_id')->references('id')->on('rooms');
            $table->foreign('guest_user_id')->references('id')->on('guest_users');
            $table->foreign('contract_id')->references('id')->on('contracts');
        });
        Schema::table('room_user', function (Blueprint $table) {
            $table->foreign('room_id')->references('id')->on('rooms');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('contract_id')->references('id')->on('contracts');
        });

        Schema::table('contract_parties_details', function (Blueprint $table) {
            $table->foreign('contract_id')->references('id')->on('contracts');
        });

        Schema::table('contract_room_details', function (Blueprint $table) {
            $table->foreign('contract_id')->references('id')->on('contracts');
        });

        Schema::table('room_articles',function (Blueprint $table){
            $table->foreign('room_id')->references('id')->on('rooms');
        });
    }
}
