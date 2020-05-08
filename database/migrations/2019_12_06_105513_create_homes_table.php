

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHomesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('homes', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->string('name', 120);
            $table->string('desc', 350)->default('');
            $table->string('announcement', 250)->default('');
            $table->boolean('notice')->default(false);
            $table->integer('district_id')->unsigned()->default(0);
            $table->string('address', 250)->default('');
            $table->tinyInteger('type')->unsigned()->default('0');
            $table->tinyInteger('rating')->default('0');
            $table->tinyInteger('date_payment')->default(1);
            $table->tinyInteger('floors')->unsigned()->default('1');
            $table->timestamps();
            $table->index(["user_id"]);
            $table->index(["district_id"]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('homes');
    }
}

