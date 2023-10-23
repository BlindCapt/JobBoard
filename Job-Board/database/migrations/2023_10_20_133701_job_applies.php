<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('job__applies', function (Blueprint $table) {
            //ID
            $table->id();

            //FK
            $table->unsignedBigInteger('id_offre');
            $table->foreign('id_offre')->references('id')->on('offers'); //Foreign Key

            //Datas
            $table->string('name');
            $table->string('email');
            $table->string('adress');
            $table->text('message');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_apply');
    }
};
