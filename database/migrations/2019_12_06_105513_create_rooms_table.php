

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rooms', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('home_id')->unsigned();
            $table->string('name', 60);
            $table->string('announcement', 250)->default('');
            $table->boolean('notice')->default(false);
            $table->tinyInteger('state');
            $table->tinyInteger('type')->unsigned()->default('0');
            $table->string('desc', 250);
            $table->timestamps();
            $table->index(["home_id"]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rooms');
    }
}

