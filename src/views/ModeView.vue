<script setup>
import filter from "@/components/filter"
import { useRouter } from "vue-router";
import { useQuizStore } from '@/stores/quizStore'
import ConfigView from './ConfigView.vue'

const store = useQuizStore()
const router = useRouter()

//
if (store.strMode == "") {
    router.push({ name: "home" })
}

//Auswahl zurücksetzen
store.arrSelection = []

//Prüft welche Checkboxen angezeigt werden sollen
var check = "world"
if (store.strMode == "pokemon") {
    check = "pokemon"
} else if (store.strMode == "outlines") {
    check = "outlines"
}  else if (store.strMode == "expert") {
    check = "expert"
}

//Funtkion für Button 'Spielen'
function startGame() {
    store.boolLearn = false
    if(store.arrSelection.length > 0){
        router.push({ name: "quiz" })
    }
}

//Funtkion für Button 'Lernen'
function learnGame() {
    store.boolLearn = true
    if(store.arrSelection.length > 0){
        router.push({ name: "learn" })
    }
}
</script>

<template>
    <div class="mode-view">
        <div>
            <h1 class="m0">Wähle die Themen</h1>
            <filter.continents v-if="['world','outlines','expert'].includes(check)"></filter.continents>
            <filter.special v-if="check == 'world'"></filter.special>
            <filter.pokemon v-if="check == 'pokemon'"></filter.pokemon>
        </div>
    </div>
    <div class="footer-menu">
        <button @click="startGame" class="button">Spielen</button>
        <button @click="learnGame" class="button" v-if="check != 'expert'">Lernen</button>
    </div>
    <ConfigView></ConfigView>
</template>
<style>
.mode-view {
    padding: 60px 0 90px;
}

.footer-menu {
    background-color: #2F2F2F;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
}

.footer-menu .button {
    float: right;
    margin: 10px;
}
</style>