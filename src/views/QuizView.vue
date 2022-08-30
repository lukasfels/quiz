<script setup>
import quiz from '@/components/quiz'
import { useQuizStore } from '@/stores/quizStore'
import { world } from "@/assets/world.js"
import { pokemon } from "@/assets/pokemon.js"
import ConfigView from './ConfigView.vue'
import router from '../router'

const store = useQuizStore()

//Wenn die Seite neugeladen wird oder die Auswahl leer ist
if (store.arrSelection.length == 0) {
    router.push({ name: "mode" })
}

//Filter Funktion für die Weltdaten
function filterWorld(x) {
    if ((x.uno && store.arrSelection.includes(x.kontinent))
        || (x.special && store.arrSelection.includes(x.special))) {
        return true
    }
}

function winGame() {
    console.log("Win")
}

//Filter der Daten nach Auswahl
if (store.strMode == "Pokemon") {
    store.objQuestions = pokemon.filter(x => store.arrSelection.includes(x.generation))
} else {
    store.objQuestions = world.filter(filterWorld)
}

store.nextQuestion(store.objQuestions)
</script>

<template>
    <ConfigView></ConfigView>
    <quiz.flags v-if="store.strMode == 'Flaggen'"></quiz.flags>
    <button @click="store.nextQuestion(store.objQuestions)">Skip</button>
</template>