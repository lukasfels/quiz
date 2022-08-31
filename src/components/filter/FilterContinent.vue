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
    <h3>Kontinente</h3>
    <form class="button-grid categories">
        <div v-for="q, k in continent">
            <input type="checkbox" :value="k" :id="k" v-model="store.arrSelection">
            <label :for="k">
                <span>{{ q }}</span>
                <span>{{ k }}</span>
            </label>
        </div>
    </form>
</template>
