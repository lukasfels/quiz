<script setup>
import { ref, watch } from 'vue'
import { useQuizStore } from '@/stores/quizStore'

const props = defineProps({
    answer: String,
    attr: {
        type: String,
        default: 'name'
    }
})

const store = useQuizStore()
const boolWrong = ref(false)

watch(
    () => store.objNext.name,
    () => { boolWrong.value = false }
)

//Wird ausgeführt um die Antwort zu prüfen
function checkAnswer(x) {
    //Prüft, ob das Geschriebene die Antwort ist, einige Länder/Hauptstädte haben Alternative Schreibweisen unter 'altname'
    if (x.toLowerCase() == store.objNext[props.attr].toLowerCase()) {
        //Richtige Antwort wird aus dem Array entfernt
        store.objQuestions.splice(store.intRandom, 1)
        store.arrScore[1]++
        store.nextQuestion()
    } else if(!boolWrong.value) {
        boolWrong.value = true
        store.arrScore[0]++
    }
}
</script>

<template>
    <div class="answerPickOption" :class="{ wrong: boolWrong }" @click="checkAnswer(answer)">{{ answer }}</div>
</template>

<style>
.answerPickOption {
    font-size: 1.3rem;
    padding: 12px 0 12px 0;
    text-align: center;
    background-color: #969696;
    border-radius: 5px;
    cursor: pointer;
}

.wrong {
    background-color: red;
    cursor: not-allowed;
}
</style>