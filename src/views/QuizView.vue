<script setup>
import quiz from '@/components/quiz'
import { useQuizStore } from '@/stores/quizStore'
import { welt } from "@/assets/welt.js"
import { pokemon } from "@/assets/pokemon.js"
import router from '../router'

const store = useQuizStore()

//Wenn die Seite neugeladen wird oder die Auswahl leer ist
if (store.auswahl.length == 0) {
    router.push({ name: "modus" })
}

//Array, das die zu beantwortenden Objekte beinhaltet
var filterFragen = []

//Funktion für die Weltdaten
function filterWelt(x) {
    if ((x.uno && store.auswahl.includes(x.kontinent))
        || (x.special && store.auswahl.includes(x.special))) {
        return true
    }
}

function winGame() {
    console.log("Win")
}

//Filter der Daten nach Auswahl
if (store.modus == "Pokemon") {
    filterFragen = pokemon.filter(x => store.auswahl.includes(x.generation))
} else {
    filterFragen = welt.filter(filterWelt)
}

store.nextLand(filterFragen)
</script>

<template>
    <button @click="store.nextLand(filterFragen)">Next</button>
    <quiz.flaggen v-if="store.modus == 'Flaggen'"></quiz.flaggen>
</template>