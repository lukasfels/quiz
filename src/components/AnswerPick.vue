<script setup>
import { watch } from 'vue'
import PickSingle from '@/components/AnswerPickSingle.vue'
import { reactive } from '@vue/reactivity';

const props = defineProps(['game'])
const possibleAnswers = reactive([])

watch(
    () => props.game.objNext.name,
    () => { generateRandomAnswers() }
)

// Generiert die Antwortmöglichkeiten
function generateRandomAnswers() {
    possibleAnswers.splice(0) // possibleAnswers leeren
    possibleAnswers.push(props.game.correctAnswerString()) // richtige Antwort hinzufügen

    let currentIndex = props.game.arrAnswers.indexOf(props.game.correctAnswerString())
    let randomIndex;
    let randomIndexes = [];
    let numberOfRandomAnswers = Math.min(props.game.arrAnswers.length, 4) - 1

    while(randomIndexes.length < numberOfRandomAnswers) { // Indexe die sich nicht gegenseitig oder mit der richtigen Antwort überschneiden
        do {
            randomIndex = Math.floor(Math.random() * props.game.arrAnswers.length)
        } while(randomIndex == currentIndex || randomIndexes.includes(randomIndex))
        randomIndexes.push(randomIndex)
    }

    randomIndexes.forEach(function(randomIndex) { possibleAnswers.push(props.game.arrAnswers[randomIndex]) })

    shuffle(possibleAnswers) //Antworten mischen
}

//Fisher–Yates shuffle (Zufälliges Element wird an das Ende des Arrays gepackt und die Länge (m) um eins verringert)
function shuffle(array) {
    var m = array.length, t, i;

    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

generateRandomAnswers()
</script>

<template>
    <div class="grid grid-cols-2 gap-2">
        <PickSingle v-for="answer in possibleAnswers" :answer="answer" :game="game" />
    </div>
</template>
