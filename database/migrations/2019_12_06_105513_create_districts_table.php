

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDistrictsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('districts', function (Blueprint $table) {
            $table->unsignedInteger('id')->unique();
            $table->string('name', 120);
            $table->string('type', 20);
            $table->boolean('active')->default(true);
            $table->string('avatar')->nullable();
            $table->unsignedInteger('city_id');
            $table->foreign('city_id')->references('id')->on('cities')->onUpdate('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('districts');
    }
}

