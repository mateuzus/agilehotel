<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReservationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->dateTime('begin');
            $table->dateTime('end');
            $table->dateTime('checkin')->nullable();
            $table->dateTime('checkout')->nullable();
            $table->enum('state', ['Ativa', 'Cancelada', 'Checkin', 'Checkout'])->default('Ativa');
            $table->dateTime('canceled_at')->nullable();
            $table->text('observation')->nullable();

            $table->bigInteger('person_id')->unsigned();

            $table->foreign('person_id')
                ->references('id')
                ->on('people')
                ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservations');
    }
}
