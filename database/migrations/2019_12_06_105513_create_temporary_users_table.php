

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTemporaryusersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('temporary_users', function (Blueprint $table) {
            $table->increments('id');
            $table->date('birthday');
            $table->string('fullname', 60);
            $table->tinyInteger('gender')->default('0');
            $table->string('avatar', 255);
            $table->string('address', 255);
            $table->string('email', 255);
            $table->string('phone', 11);
            $table->string('indentify_card', 13);
            $table->datetime('date_id');
            $table->string('career', 60);
            $table->string('note');
            $table->integer('home_id')->unsigned();
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
        Schema::dropIfExists('temporary_users');
    }
}

