<script setup>
import { watch } from 'vue'
import { useQuizStore } from '@/stores/quizStore'
import pickSingle from './AnswerPickSingle.vue'
import { reactive } from "@vue/reactivity";

const store = useQuizStore()
const arrPicked = reactive([])
var arrAnswers = store.objQuestions.map(erstellArray)

watch(
    () => store.objNext.name,
    () => { randomAnswers() }
)

function erstellArray(obj) {
    return obj.name
}

//Wird ausgeführt, wenn Antwortmöglichkeiten angezeigt werden sollen
function randomAnswers() {
    arrPicked.length = 0

    //Richtige Antwort pushen
    arrPicked.push(store.objNext.name)

    let rightAnswer = arrAnswers.indexOf(arrPicked[0])
    let i = arrAnswers.length - 1

    let temp = arrAnswers[i]
    arrAnswers[i] = arrAnswers[rightAnswer]
    arrAnswers[rightAnswer] = temp

    let j = 3
    while (j > 0 && i > 0) {
        let r = Math.floor(Math.random() * i)
        arrPicked.push(arrAnswers[r])
        i--

        let temp = arrAnswers[i]
        arrAnswers[i] = arrAnswers[r]
        arrAnswers[r] = temp
        j--
    }

    //Antworten mischen
    shuffle(arrPicked)
}

//Fisher–Yates shuffle
//Zufälliges Element wird an das Ende des Arrays gepackt und die Länge (m) um eins verringert
function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

randomAnswers()
</script>
    
<template>
    <div class="answerPick">
        <pickSingle v-for="i in arrPicked" :key="i" :answer="i"></pickSingle>
    </div>
</template>
    
<style>
.answerPick {
    float: left;
    width: 100%;
}
</style>