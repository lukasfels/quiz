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
const focus = ref(2)

//Wird ausgeführt um die Antwort für die Frage zu prüfen
function checkAnswer(answer) {
    strInput.value = answer
    //Prüft, ob das Geschriebene die Antwort ist, einige Länder/Hauptstädte haben Alternative Schreibweisen unter 'altname'
    if (answer.toLowerCase() == store.objNext[props.attr].toLowerCase()
        || (store.objNext['alt' + props.attr] && answer.toLowerCase() == store.objNext['alt' + props.attr].toLowerCase())) {
        //Input löschen für nächste Frage
        strInput.value = ""

        //Richtige Antwort wird aus dem Array entfernt
        store.objQuestions.splice(store.intRandom, 1)
        store.arrScore[1]++
        //Nächste Frage laden
        store.nextQuestion()
    } else if (arrAutocomplete.some(x => x.toLowerCase() == answer.toLowerCase())) {
        store.arrScore[0]++
    } else {
        //console.log('Falsch')
    }
}

function adjustFocus(event) {
    if (arrFiltered.value.length > 0) {
        if (event.key == "ArrowUp") {
            if (focus.value > 0) {
                focus.value--
            } else {
                focus.value = arrFiltered.value.length - 1
            }
        } else if (event.key == "ArrowDown") {
            if (focus.value < arrFiltered.value.length - 1) {
                focus.value++
            } else {
                focus.value = 0
            }
        } else if (event.key == "Enter") {
            checkAnswer(arrFiltered.value[focus.value])
        }
    } else {
        focus.value = 0
    }
}

//Gibt das Attribut zurück, das abgefragt wird
function getAttribute(obj) {
    return obj[props.attr]
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
    <div class="answerDiv">
        <p>Antwort:</p>
        <input type="text" class="answerInput" spellcheck="false" v-model="strInput" @keyup="adjustFocus"
            @input="checkAnswer($event.target.value)">
        <div class="autocompleteWrapper">
            <div class="autocomplete" v-if="arrFiltered.length > 0">
                <div v-for="(item, index) in arrFiltered" @click="checkAnswer(item)"
                    :class="[focus == index ? 'focus' : '']">{{ item }}</div>
            </div>
        </div>
    </div>
</template>

<style>
.answerDiv {
    display: flex;
    flex-direction: column;
}

.answerDiv p {
    margin: auto;
    width: 75%;
    padding: 10px 5px;
}

.answerInput {
    font-size: 1rem;
    font-family: inherit;
    margin: auto;
    width: 75%;
    padding: 10px 5px;
    border: none;
    border-radius: 5px;
}

.answerInput:focus {
    border: none;
}

.autocompleteWrapper {
    width: 75%;
    margin: auto;
}

.autocomplete {
    position: absolute;
    width: 75%;
    z-index: 99;
    background-color: white;
    border: 1px solid black;
    color: black;
}

.autocomplete div {
    cursor: pointer;
    padding: 5px;
    border-bottom: 1px solid black;
}

.autocomplete div:hover {
    background-color: green;
}

.focus {
    background-color: aqua;
}
</style>