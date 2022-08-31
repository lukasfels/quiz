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

        store.nextQuestion(store.objQuestions)
    } else {
        boolWrong.value = true
    }
}
</script>

<template>
    <div class="answerPickOption" :class="{ wrong: boolWrong }" @click="checkAnswer(answer)">
        <p>{{ answer }}</p>
    </div>
</template>

<style>
.answerPickOption {
    float: left;
    margin: 2px;
    font-weight: bold;
    width: 45%;
    border: 2px solid black;
    border-radius: 3px;
}

.answerPickOption * {
    float: left;
    margin: 0;
    padding: 15px 10px;
}

.answerPickOption p {
    font-size: 16px;
    height: 58px;
    width: 70%;
    line-break: auto;
    padding: 0;
    text-overflow: ellipsis;
    overflow: hidden;
}

.wrong {
    background-color: red;
}
</style>