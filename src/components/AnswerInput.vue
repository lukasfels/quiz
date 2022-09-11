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
//Index wo der Fokus gerade ist
const intFocus = ref(0)
//Bool ob der Input für die Antwort im Fokus ist
const boolFocus = ref(false)

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

//Funktion um einen Tipp anzuzeigen
function getTip() {
    let tempAns = store.objNext[props.attr].split(' ')
    let tempTip = store.objNext.tip
    switch (tempTip[1]) {
        case 0:
            store.objNext.tip[0] = tempAns.join(' ').replace(/\S/g, '_')
            tempTip[1]++
            store.arrScore[0]++
            break
        case 1:
            for (let i = 0; i < tempAns.length; i++) {
                tempAns[i] = tempAns[i].charAt(0) + tempAns[i].substring(1).replace(/\S/g, '_')
            }
            store.objNext.tip[0] = tempAns.join(' ')
            tempTip[1]++
            store.arrScore[0]++
            break
        case 2:
            for (let i = 0; i < tempAns.length; i++) {
                tempAns[i] = tempAns[i].substring(0, 2) + tempAns[i].substring(2).replace(/\S/g, '_')
            }
            store.objNext.tip[0] = tempAns.join(' ')
            tempTip[1]++
            store.arrScore[0]++
            break
        case 3:
            store.objNext.tip[0] = tempAns.join(' ')
            tempTip[1]++
            store.arrScore[0]++
            break
    }
}

//Funktion für die Autocomplete Liste
function adjustFocus(event) {
    //Wenn es Einträge in der Liste gibt
    if (arrFiltered.value.length > 0) {
        //Pfeiltaste oben zum 'scrollen'
        if (event.key == "ArrowUp") {
            if (intFocus.value > 0) {
                intFocus.value--
            } else {
                intFocus.value = arrFiltered.value.length - 1
            }
        }
        //Pfeiltaste unten zum 'scrollen'
        else if (event.key == "ArrowDown") {
            if (intFocus.value < arrFiltered.value.length - 1) {
                intFocus.value++
            } else {
                intFocus.value = 0
            }
        }
        //Taste enter zum Bestätigen
        else if (event.key == "Enter") {
            checkAnswer(arrFiltered.value[intFocus.value])
        }
    } else {
        intFocus.value = 0
    }
}

//Gibt das Attribut zurück, das abgefragt wird
function getAttribute(obj) {
    return obj[props.attr]
}

//Funktion die prüft, ob das einegebene Wort zu einer Antwort passt
function filterAutocomplete(obj) {
    if (strInput.value.length >= 3 && boolFocus.value) {
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

const strTip = computed(() => store.objNext.tip[0])
</script>

<template>
    <div class="answerDiv">
        <div class="tipp">
            <button class="button" @click="getTip">Tipp</button>
            <span>{{ strTip }}</span>
        </div>
        <p>Antwort:</p>
        <input type="text" class="answerInput" spellcheck="false" v-model="strInput" @keyup="adjustFocus"
            @input="checkAnswer($event.target.value)" @focus="boolFocus = true" @blur="boolFocus = false">
        <div class="autocompleteWrapper">
            <div class="autocomplete" v-if="arrFiltered.length > 0">
                <div v-for="(item, index) in arrFiltered" @click="checkAnswer(item)"
                    :class="[intFocus == index ? 'focus' : '']">{{ item }}</div>
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