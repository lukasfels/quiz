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
        <div :class="{ hide: !hide }" @click="toggleHide">
            Optionen
        </div>
        <div class="optionTab" :class="{ hide: hide }">
            <h3>Optionen</h3>
            <label>
                <p>{{  overview[store.configOV] }}</p>
                <input type="range" min="0" max="1" v-model="store.configOV">
            </label><br>
            <label>
                <p>{{  answer[store.configAnswer] }}</p>
                <input type="range" min="0" max="2" v-model="store.configAnswer">
            </label><br>
            <label>
                <p>{{  delay[store.configDelay] }}</p>
                <input type="range" min="0" max="1" v-model="store.configDelay">
            </label>
            <br>
            <button @click="toggleHide">Speichern</button>
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
    padding: 5px;
}

.optionTab {
    width: 300px;
}

.hide {
    display: none;
}
</style>