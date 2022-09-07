<script setup>
import quiz from '@/components/quiz'
import timer from '@/components/Timer.vue'
import counter from '@/components/Counter.vue'
import score from '@/components/ScorePercent.vue'
import { useQuizStore } from '@/stores/quizStore'
import { world } from "@/assets/world.js"
import { pokemon } from "@/assets/pokemon.js"
import ConfigView from './ConfigView.vue'
import router from '../router'
import { ref } from 'vue'

const store = useQuizStore()
const refTimer = ref(null)

//Wenn die Seite neugeladen wird oder die Auswahl leer ist
if (store.arrSelection.length == 0) {
    router.push({ name: "mode" })
}

//Filter Funktion für die Weltdaten
function filterWorld(x) {
    if ((x.uno && store.arrSelection.includes(x.continent))
        || (x.special && store.arrSelection.includes(x.special))) {
        return true
    }
}

function winGame() {
    console.log("Win")
}

//Zum starten und neustarten des Spiels
function startGame() {
    //Filter der Daten nach Auswahl
    if (store.strMode == "pokemon") {
        store.objQuestions = pokemon.filter(x => store.arrSelection.includes(x.generation))
    } else {
        store.objQuestions = world.filter(filterWorld)
    }
    store.nextQuestion()

    //Setzt den Timer zurück
    if(refTimer.value != null){
        refTimer.value.reset()
    }

    //Setzt die Prozentanzeige zurück
    store.arrScore = [0, 0]
}

startGame()
</script>

<template>
    <ConfigView />
    <div class="view">
        <div>
            <component :is="quiz[store.strMode]" />
            <br />
            <div class="buttons">
                <button @click="store.nextQuestion" class="button">Skip</button>
                <button @click="startGame" class="button">Restart</button>
            </div>
            <counter />
            <timer ref="refTimer" />
            <score />
        </div>
    </div>
</template>