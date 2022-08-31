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
    <h3>Generationen</h3>
    <form class="button-grid categories">
        <div v-for="value, key in generation">
            <input type="checkbox" :value="parseInt(key)" :id="key" v-model="store.arrSelection">
            <label :for="key">
                <span>{{ value }}</span>
                <span>Generation {{ k }}</span>
            </label>
        </div>
    </form>
</template>
