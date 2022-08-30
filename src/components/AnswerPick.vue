<script setup>
import { watch } from 'vue'
import { useQuizStore } from '@/stores/quizStore'
import pickSingle from './AnswerPickSingle.vue'
import { reactive } from "@vue/reactivity";

const store = useQuizStore()
const picked = reactive([])
var arr = store.fragen.map(erstellArray)

watch(
    () => store.next.name,
    () => { randomAnswers() }
)

function erstellArray(obj) {
    return obj.name
}

//Wird ausgeführt, wenn Antwortmöglichkeiten angezeigt werden sollen
function randomAnswers() {
    picked.length = 0

    //Richtige Antwort pushen
    picked.push(store.next.name)

    let rightAnswer = arr.indexOf(picked[0])
    let i = arr.length - 1

    let temp = arr[i]
    arr[i] = arr[rightAnswer]
    arr[rightAnswer] = temp

    let j = 3
    while (j > 0 && i > 0) {
        let r = Math.floor(Math.random() * i)
        picked.push(arr[r])
        i--

        let temp = arr[i]
        arr[i] = arr[r]
        arr[r] = temp
        j--
    }

    //Antworten mischen
    shuffle(picked)
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
        <pickSingle v-for="i in picked" :key="i" :answer="i"></pickSingle>
    </div>
</template>
    
<style>
.answerPick {
    float: left;
    width: 100%;
}
</style>