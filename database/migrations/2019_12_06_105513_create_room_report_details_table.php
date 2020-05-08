<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoomreportdetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('room_report_details', function (Blueprint $table) {
            $table->bigInteger('room_report_id')->unsigned();
            $table->string('service');
            $table->tinyInteger('amount')->unsigned()->default('0');
            $table->double('value')->default('0');
            $table->timestamps();
            $table->index(["room_report_id"]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('room_report_details');
    }
}

