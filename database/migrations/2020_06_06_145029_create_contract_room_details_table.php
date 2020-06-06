<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContractRoomDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contract_room_details', function (Blueprint $table) {
            $table->unsignedBigInteger('contract_id')->primary();
            $table->unsignedInteger('price');
            $table->unsignedInteger('cost_water');
            $table->unsignedInteger('cost_electric');
            $table->tinyInteger('date_payment')->default(1);
            $table->string('address', 250)->default('');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contract_room_details');
    }
}
