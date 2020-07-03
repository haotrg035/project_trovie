<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMenuTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menu_tables', function (Blueprint $table) {
            $table->unsignedInteger('id', true);
            $table->string('title', 255);
            $table->unsignedInteger('parent_id')->default(0);
            $table->unsignedInteger('pos');
            $table->string('url')->nullable();
            $table->unsignedTinyInteger('type')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('menu_tables');
    }
}
