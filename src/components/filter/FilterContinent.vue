<script setup>
import { world } from "@/assets/world.js"
import { useQuizStore } from '@/stores/quizStore'

const store = useQuizStore()

//Erstellt ein Objekt mit allen Kontinenten plus die Anzahl
const continent = {};
world.forEach(function (x) {
    if (x.uno) {
        if (continent[x.continent]) {
            continent[x.continent]++;
        } else {
            continent[x.continent] = 1;
        }
    }
})
</script>

<template>
    <h2>Kontinente</h2>
    <form class="formContinents">
        <label v-for="q, k in continent">
            <input type="checkbox" :value="k" v-model="store.arrSelection">{{ k }} {{ q }}
        </label>
    </form>
</template>

<style>
.formContinents {
    width: 100%;
    float: left;
}
</style>