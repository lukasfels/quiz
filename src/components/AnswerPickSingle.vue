<script setup>
import { ref, watch } from 'vue'
import { useQuizStore } from '@/stores/quizStore'

defineProps(['answer'])

const store = useQuizStore()
const wrongAnswer = ref(false)

watch(
    () => store.next.name,
    () => { wrongAnswer.value = false }
)

//Wird ausgeführt um die Antwort für die Frage zu prüfen
function testeAntwort(x) {
    //Prüft, ob das Geschriebene die Antwort ist, einige Länder/Hauptstädte haben Alternative Schreibweisen unter 'altname'
    if (x.toLowerCase() == store.next.name.toLowerCase()) {
        //Richtige Antwort wird aus dem Array entfernt
        store.fragen.splice(store.rand, 1)

        store.nextLand(store.fragen)
    } else {
        wrongAnswer.value = true
    }
}
</script>

<template>
    <div class="answerPickOption" :class="{ wrong: wrongAnswer }" @click="testeAntwort(answer)">
        <p>{{  answer  }}</p>
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