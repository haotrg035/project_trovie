<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContractPartiesDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contract_parties_details', function (Blueprint $table) {
            $table->unsignedBigInteger('contract_id')->primary();
            $table->string('a_full_name', 60);
            $table->date('a_birthday');
            $table->tinyInteger('a_gender')->default(0);
            $table->string('a_address', 255);
            $table->string('a_phone', 11);
            $table->string('a_id_card', 13);
            $table->datetime('a_id_card_date');
            $table->string('a_id_card_address',250);
            $table->string('b_full_name', 60);
            $table->date('b_birthday');
            $table->tinyInteger('b_gender')->default(0);
            $table->string('b_address', 255);
            $table->string('b_phone', 11);
            $table->string('b_id_card', 13);
            $table->datetime('b_id_card_date');
            $table->string('b_id_card_address',250);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contract_parties_details');
    }
}
