<script setup>
import filter from "@/components/filter"
import { useRouter } from "vue-router";
import { ref } from "vue"
import { useQuizStore } from '@/stores/quizStore'
import ConfigView from './ConfigView.vue'

const store = useQuizStore()
const router = useRouter()

//
if (store.modus == "") {
    router.push({ name: "home" })
}

//Auswahl zurücksetzen
store.auswahl = []

//Prüft welche Checkboxen angezeigt werden sollen
var check = "welt"
if (store.modus == "Pokemon") {
    check = "pokemon"
}

//Funtkion für Button 'Starten'
function starteSpiel() {
    router.push({ name: "quiz" })
}
</script>

<template>
    <h1>Wähle die Themen</h1>
    <filter.kontinente v-if="check == 'welt'"></filter.kontinente>
    <filter.special v-if="check == 'welt'"></filter.special>
    <filter.pokemon v-if="check == 'pokemon'"></filter.pokemon>
    <button @click="starteSpiel">Starten</button>
    <ConfigView></ConfigView>
</template>