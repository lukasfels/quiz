<script setup>
import { ref } from 'vue'
import { useQuizStore } from '@/stores/quizStore'

const store = useQuizStore()
const hide = ref(true)

const overview = ref(["Keine Übersicht", "Übersicht anzeigen"])
const answer = ref(["Selbst Schreiben", "Schreiben (Autocomplete)", "Antworten vorgeben"])
const delay = ref(["Antwort nicht zeigen", "Antwort kurz zeigen"])

function toggleHide() {
    hide.value = !hide.value
}
</script>

<template>
    <div class="options">
        <div :class="{ hideConfig: !hide }" @click="toggleHide">
            Optionen
        </div>
        <div class="optionTab" :class="{ hideConfig: hide }">
            <h3>Optionen</h3>
            <label>
                <p>{{  overview[store.intConfigOV] }}</p>
                <input type="range" min="0" max="1" v-model="store.intConfigOV">
            </label><br>
            <label>
                <p>{{  answer[store.intConfigAnswer] }}</p>
                <input type="range" min="0" max="2" v-model="store.intConfigAnswer">
            </label><br>
            <label>
                <p>{{  delay[store.intConfigDelay] }}</p>
                <input type="range" min="0" max="1" v-model="store.intConfigDelay">
            </label>
            <br>
            <button class="button" @click="toggleHide">Speichern</button>
        </div>
    </div>
</template>

<style>
.options {
    position: absolute;
    z-index: 99;
    top: 0;
    right: 0;
    background-color: darkcyan;
    padding: 10px;
    border-bottom-left-radius: 5px;
}

.optionTab {
    width: 300px;
}

.hideConfig {
    display: none;
}
</style>