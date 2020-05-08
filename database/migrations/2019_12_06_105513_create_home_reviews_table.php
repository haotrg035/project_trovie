

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHomereviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('home_reviews', function (Blueprint $table) {
            $table->increments('id');
            $table->tinyInteger('rating')->default('5');
            $table->string('content', 250);
            $table->datetime('datetime');
            $table->integer('home_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->timestamps();
            $table->index(["home_id"]);
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
        Schema::dropIfExists('home_reviews');
    }
}

