<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSavedArticleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('saved_article', function (Blueprint $table) {
            $table->unsignedInteger('user_id');
            $table->unsignedBigInteger('room_article_id');
            $table->primary(['user_id', 'room_article_id']);
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('room_article_id')->references('id')->on('room_articles');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('saved_article');
    }
}
