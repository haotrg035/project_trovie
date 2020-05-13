

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoomarticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('room_articles', function (Blueprint $table) {
            $table->integer('id')->unsigned();
            $table->string('title', 60);
            $table->datetime('date_post');
            $table->integer('host_id')->unsigned();
            $table->integer('room_id')->unsigned();
            $table->timestamps();
            $table->index(["host_id"]);
            $table->index(["room_id"]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('room_articles');
    }
}

