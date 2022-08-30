<script setup>
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/quizStore'
import ConfigView from './ConfigView.vue'

//Array mit allen Modi
const modi = ["Flaggen", "Hauptstädte", "Umrisse", "Expert", "Pokemon"]

const router = useRouter()
const store = useQuizStore()

//Ruft den ModusView auf und übergibt den Modus als Parameter
function goMode(x) {
    store.modus = x
    router.push({ name: "modus" })
}
</script>

<template>
    <h1>Wähle einen Modus</h1>
    <br>
    <ul class="modi">
        <a v-for="modus in modi" @click="goMode(modus)">
            <li class="modus">{{ modus }}</li>
        </a>
    </ul>
    <ConfigView></ConfigView>
</template>

<style>
.modi {
    list-style-type: none;
    padding: 0;
}

.modus {
    font-size: 16px;
    border: 1px solid black;
    margin: -1px 0 0 -1px;
    float: left;
    width: 50%;
    padding: 25px 0;
    text-align: center;
}
</style>