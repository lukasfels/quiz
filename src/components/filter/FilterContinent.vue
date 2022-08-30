<script setup>
import { world } from "@/assets/world.js"
import { useQuizStore } from '@/stores/quizStore'

const store = useQuizStore()

//Erstellt ein Objekt mit allen Kontinenten plus die Anzahl
const kontinent = {};
world.forEach(function (x) {
    if (x.uno) {
        if (kontinent[x.kontinent]) {
            kontinent[x.kontinent]++;
        } else {
            kontinent[x.kontinent] = 1;
        }
    }
})
</script>

<template>
    <h2>Kontinente</h2>
    <form class="formKontinente">
        <label v-for="q, k in kontinent">
            <input type="checkbox" :value="k" v-model="store.arrSelection">{{ k }} {{ q }}
        </label>
    </form>
</template>

<style>
.formKontinente {
    width: 100%;
    float: left;
}
</style>