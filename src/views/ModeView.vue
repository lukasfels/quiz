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
    <h1>Wähle die Themen</h1>
    <filter.continents v-if="check == 'world'"></filter.continents>
    <filter.special v-if="check == 'world'"></filter.special>
    <filter.pokemon v-if="check == 'pokemon'"></filter.pokemon>
    <button @click="startGame">Starten</button>
    <ConfigView></ConfigView>
</template>