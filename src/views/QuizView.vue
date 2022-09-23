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
    router.push({ name: "home" })
}

//Filter Funktion für die Weltdaten
function filterWorld(x) {
    if ((x.uno && store.arrSelection.includes(x.continent))
        || (x.special && store.arrSelection.includes(x.special))) {
        return true
    }
}

function restartGame() {
    store.objQuestions = {}
    store.arrAnswers = []
    //Filter der Daten nach Auswahl
    if (store.strMode == "pokemon") {
        store.objQuestions = pokemon.filter(x => store.arrSelection.includes(x.generation)).map((x) => { x.tip = ['', 0]; return x })
    } else {
        store.objQuestions = world.filter(filterWorld).map((x) => { x.tip = ['', 0]; return x })
    }

    //Setzt den Timer zurück und startet den Timer
    store.strTime = "00:00"
    if (refTimer.value != null) {
        refTimer.value.resetTime()
    }

    //Setzt die Prozentanzeige zurück
    store.arrScore = [0, 0]

    //Schliesst das Fenster für das Ergbnis
    showModal.value = false

    startGame()
}

//Zum starten und neustarten des Spiels
function startGame() {
    store.boolNewGame = false
    store.nextQuestion()

    //Startet den Timer
    if (refTimer.value != null) {
        refTimer.value.startTime()
    }
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

if (store.boolNewGame) {
    restartGame()
} else {
    startGame()
}
</script>

<template>
    <ConfigView />
    <div>
        <div>
            <component :is="quiz[store.strMode]" />
            <br />
            <div class="buttons">
                <button class="button" @click="store.nextQuestion">Nächste</button>
                <button class="button" @click="restartGame">Neustart</button>
                <button class="button" @click="endGame">Ende</button>
            </div>
            <counter ref="refCounter" />
            <timer ref="refTimer" />
            <score ref="refScore" />
        </div>
    </div>
    <div class="modalWin" :class="{showModal: !showModal}">
        <div class="modalStats">
            <h1>Ergebnis</h1>
            <p>Fragen: {{refCounter != null ? refCounter.strCount : '0'}}</p>
            <p>Zeit: {{ store.strTime }}</p>
            <p>Punktzahl: {{refScore != null ? refScore.strScore : '0'}}%</p>
            <button class="button" @click="restartGame">Neustart</button>
            <button class="button" @click="routeHome">Home</button>
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
    background-color: #2F2F2F;
    margin: auto;
    width: 80vw;
    height: 50vh;
    padding: 25px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.showModal {
    display: none;
}
</style>
