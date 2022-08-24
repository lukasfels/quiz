<script setup>
import { pokemon } from "../assets/pokemon.js"

const generation = {};

pokemon.forEach(function (x) {
    if (generation["Generation " + x.generation]) {
        generation["Generation " + x.generation]++;
    } else {
        generation["Generation " + x.generation] = 1;
    }
})
</script>

<template>
    <h2>Generationen</h2>
    <form class="formPokemon">
        <label v-for="q, k in generation">
            <input type="checkbox" name="pokemon" :value="k">{{ k }} {{ q }}
        </label>
    </form>
</template>

<style>
.formPokemon {
    width: 100%;
    float: left;
}
</style>