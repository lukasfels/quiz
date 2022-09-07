<script setup>
import { ref } from "vue"
import { useQuizStore } from '@/stores/quizStore'
import { computed } from "@vue/reactivity";

const props = defineProps({
    attr: {
        type: String,
        default: 'name'
    }
})

const store = useQuizStore()
const strInput = ref('')
var arrAutocomplete = []

//Wird ausgeführt um die Antwort für die Frage zu prüfen
function checkAnswer(answer) {
    strInput.value = answer
    if (arrAutocomplete.some(x => x.toLowerCase() == answer.toLowerCase())) {
        //Prüft, ob das Geschriebene die Antwort ist, einige Länder/Hauptstädte haben Alternative Schreibweisen unter 'altname'
        if (answer.toLowerCase() == store.objNext[props.attr].toLowerCase()) {
            //Input löschen für nächste Frage
            strInput.value = ""

            //Richtige Antwort wird aus dem Array entfernt
            store.objQuestions.splice(store.intRandom, 1)
            store.arrScore[1]++
            //Nächste Frage laden
            store.nextQuestion()
        } else {
            store.arrScore[0]++
        }
    } else {
        console.log('Falsch')
    }

}

//Gibt das Attribut zurück, das abgefragt wird
function getAttribute(obj) {
    return obj.name
}

//Funktion die prüft, ob das einegebene Wort zu einer Antwort passt
function filterAutocomplete(obj) {
    if (strInput.value.length >= 3) {
        return obj.toLowerCase().includes(strInput.value.toLowerCase())
    } else {
        return false
    }
}

//Erstellt ein Array mit dem Attribut, das abgefragt wird
arrAutocomplete = store.objQuestions.map(getAttribute)

//Erstellt eine Referenz zum gefilterten 'arrAutocomplete'
const arrFiltered = computed(() => {
    if (store.intConfigAnswer == 1) {
        return arrAutocomplete.filter(filterAutocomplete)
    }
    else {
        return false
    }
})
</script>

<template>
    <div class="answerInput">
        <p>Antwort:</p>
        <input type="text" class="answerInput" v-model="strInput" @input="checkAnswer($event.target.value)">
        <div class="autocomplete" v-if="arrFiltered.length > 0">
            <div v-for="item in arrFiltered" @click="checkAnswer(item)">{{ item }}</div>
        </div>
    </div>
</template>

<style>
input.answerInput {
    font-size: 1rem;
    font-weight: bold;
    font-family: inherit;
}

input.answerInput:focus {
    border: none;
}

.answerInput {
    width: 100%;
    padding: 20px;
    border: none;
    border-radius: 5px;
}

.autocomplete {
    position: absolute;
    width: 100%;
    z-index: 99;
    background-color: white;
    border: 1px solid black;
    color: black;
}

.autocomplete div {
    cursor: pointer;
    padding: 5px;
}

.autocomplete div:hover {
    background-color: green;
}
</style>