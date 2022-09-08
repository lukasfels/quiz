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
import { ref, watch } from 'vue'

const store = useQuizStore()
const refTimer = ref(null)
const refScore = ref(null)
const refCounter = ref(null)
const showModal = ref(false)

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

//Zum starten und neustarten des Spiels
function startGame() {
    //Filter der Daten nach Auswahl
    if (store.strMode == "pokemon") {
        store.objQuestions = pokemon.filter(x => store.arrSelection.includes(x.generation))
    } else {
        store.objQuestions = world.filter(filterWorld)
    }
    store.nextQuestion()

    //Setzt den Timer zurück und startet den Timer
    if (refTimer.value != null) {
        refTimer.value.resetTime()
        refTimer.value.startTime()
    }

    //Setzt die Prozentanzeige zurück
    store.arrScore = [0, 0]

    //Schliesst das Fenster für das Ergbnis
    showModal.value = false
}

function endGame() {
    refTimer.value.stopTime()
    showModal.value = true
}

function routeHome() {
    router.push({ name: "home" })
}

//Beobachten, ob das Spiel gewonnen wurde
watch(() => store.objQuestions.length, (newLength, oldLength) => {
    if (oldLength == 1 && newLength == 0) {
        refTimer.value.stopTime()
        showModal.value = true
    }
})

startGame()
</script>

<template>
    <ConfigView />
    <component :is="quiz[store.strMode]" />
    <br />
    <button @click="store.nextQuestion">Nächste</button>
    <button @click="startGame">Neustart</button>
    <button @click="endGame">Ende</button>
    <counter ref="refCounter" />
    <timer ref="refTimer" />
    <score ref="refScore" />
    <div class="modalWin" :class="{showModal: !showModal}">
        <div class="modalStats">
            <h1>Ergebnis</h1>
            <p>Fragen: {{refCounter != null ? refCounter.strCount : '0'}}</p>
            <p>Zeit: {{refTimer != null ? refTimer.strTimer : '0'}}</p>
            <p>Punktzahl: {{refScore != null ? refScore.strScore : '0'}}%</p>
            <button @click="startGame">Neustart</button>
            <button @click="routeHome">Home</button>
        </div>
    </div>
</template>

<style>
.modalWin {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
}

.modalStats {
    background-color: yellow;
    margin: auto;
    width: 250px;
    height: 250px;
}

.showModal {
    display: none;
}
</style>