<script setup>
import { ref } from "vue"
import { useQuizStore } from '@/stores/quizStore'
import { computed } from "@vue/reactivity";

const store = useQuizStore()
const input = ref('')
var autocomplete = []

//Wird ausgeführt um die Antwort für die Frage zu prüfen
function testeAntwort(x) {
    input.value = x
    //Prüft, ob das Geschriebene die Antwort ist, einige Länder/Hauptstädte haben Alternative Schreibweisen unter 'altname'
    if (x.toLowerCase() == store.next.name.toLowerCase()) {
        //Input löschen für nächste Frage
        input.value = ""

        //Richtige Antwort wird aus dem Array entfernt
        store.fragen.splice(store.rand, 1)

        store.nextLand(store.fragen)
    }
}

function erstellAutocomplete(obj) {
    return obj.name
}

function filterAuto(obj) {
    if (input.value.length >= 3) {
        return obj.toLowerCase().includes(input.value)
    } else {
        return false
    }
}

autocomplete = store.fragen.map(erstellAutocomplete)
const filterAutocomplete = computed(() => {
    return autocomplete.filter(filterAuto)
})
</script>

<template>
    <div class="answerInput">
        <p>Antwort:</p>
        <input type="text" class="answerInput" v-model="input" @input="testeAntwort($event.target.value)">
        <div class="autocomplete" v-if="filterAutocomplete.length > 0">
            <div v-for="item in filterAutocomplete" @click="testeAntwort(item)">{{ item }}</div>
        </div>
    </div>
</template>

<style>
.answerInput {
    width: 300px;
}

.autocomplete {
    position: absolute;
    width: 100%;
    z-index: 99;
    background-color: white;
    border: 1px solid black;
}

.autocomplete div {
    cursor: pointer;
    border-bottom: 1px solid black;
    padding: 5px;
}

.autocomplete div:hover {
    background-color: green;
}
</style>