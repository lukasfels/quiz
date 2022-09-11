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
}

//Funtkion für Button 'Starten'
function startGame() {
    if(store.arrSelection.length > 0){
        router.push({ name: "quiz" })
    } else {
        //alert("Themen wählen")
    }
}
</script>

<template>
    <div class="mode-view">
        <div>
            <h1 class="m0">Wähle die Themen</h1>
            <filter.continents v-if="check == 'world' || check == 'outlines'"></filter.continents>
            <filter.special v-if="check == 'world'"></filter.special>
            <filter.pokemon v-if="check == 'pokemon'"></filter.pokemon>
        </div>
    </div>
    <div class="footer-menu">
        <button @click="startGame" class="button">Starten</button>
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