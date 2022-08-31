<script setup>
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/quizStore'
import ConfigView from './ConfigView.vue'

//Array mit allen Modi
const modes = {"flags": "Flaggen", "capitals": "Hauptstädte", "outlines": "Umrisse", "expert": "Expert", "pokemon": "Pokemon"}

const router = useRouter()
const store = useQuizStore()

//Ruft den ModusView auf und übergibt den Modus als Parameter
function routeMode(x) {
    store.strMode = x
    router.push({ name: "mode" })
}
</script>

<template>
    <h1>Wähle einen Modus</h1>
    <br>
    <ul class="modes">
        <a v-for="name, mode in modes" @click="routeMode(mode)">
            <li class="mode">{{ name }}</li>
        </a>
    </ul>
    <ConfigView></ConfigView>
</template>

<style>
.modes {
    list-style-type: none;
    padding: 0;
}

.mode {
    font-size: 16px;
    border: 1px solid black;
    margin: -1px 0 0 -1px;
    float: left;
    width: 50%;
    padding: 25px 0;
    text-align: center;
}
</style>