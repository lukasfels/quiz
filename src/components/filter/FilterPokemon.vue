<script setup>
import { pokemon } from "@/assets/pokemon.js"
import { useQuizStore } from '@/stores/quizStore'

const store = useQuizStore()

//Erstellt ein Objekt mit allen Generationen plus die Anzahl
const generation = {};
pokemon.forEach(function (x) {
    if (generation[x.generation]) {
        generation[x.generation]++;
    } else {
        generation[x.generation] = 1;
    }
})
</script>

<template>
    <h2>Generationen</h2>
    <form class="formPokemon">
        <label v-for="value, key in generation">
            <input type="checkbox" :value="parseInt(key)" v-model="store.arrSelection">Generation {{ key }} {{ value }}
        </label>
    </form>
</template>

<style>
.formPokemon {
    width: 100%;
    float: left;
}
</style>