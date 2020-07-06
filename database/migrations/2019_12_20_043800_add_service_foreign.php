<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddServiceForeign extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('services', function (Blueprint $table) {
            $table->foreign('unit_id')->references('id')->on('service_units');
            $table->foreign('user_id')->references('id')->on('users');
        });
        Schema::table('service_units', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users');
        });
    }
}
