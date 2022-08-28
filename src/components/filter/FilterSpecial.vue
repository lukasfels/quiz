<script setup>
import { welt } from "@/assets/welt.js"
import { useQuizStore } from '@/stores/quizStore'

const store = useQuizStore()

//Erstellt ein Objekt mit allen Spezialthemen plus die Anzahl
const special = {};
welt.forEach(function (x) {
    if (x.special) {
        if (special[x.special]) {
            special[x.special]++;
        } else {
            special[x.special] = 1;
        }
    }
})
</script>

<template>
    <h2>Spezial</h2>
    <form class="formSpecial">
        <label v-for="q, k in special">
            <input type="checkbox" :value="k" v-model="store.auswahl">{{ k }} {{ q }}
        </label>
    </form>
</template>

<style>
.formSpecial {
    width: 100%;
    float: left;
}
</style>