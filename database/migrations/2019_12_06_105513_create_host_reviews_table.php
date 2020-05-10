

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHostreviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('host_reviews', function (Blueprint $table) {
            $table->increments('id');
            $table->tinyInteger('rating')->default('5');
            $table->string('content', 250);
            $table->datetime('datetime');
            $table->integer('host_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->timestamps();
            $table->index(["host_id"]);
            $table->index(["user_id"]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('host_reviews');
    }
}

