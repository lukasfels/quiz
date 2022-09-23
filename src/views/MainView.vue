<script setup>
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/quizStore'
import ConfigView from './ConfigView.vue'
import InstallPWA from '@/components/InstallPWA.vue'

//Array mit allen Modi
const modes = { "flags": "Flaggen", "capitals": "Hauptstädte", "outlines": "Umrisse", "expert": "Expert", "pokemon": "Pokemon" }
const router = useRouter()
const store = useQuizStore()

let oldGame = store.objQuestions.length > 0 ? true : false

//Ruft den ModusView auf und übergibt den Modus als Parameter
function routeMode(x) {
    store.strMode = x
    router.push({ name: "mode" })
}

function resumeGame() {
    console.log('test')
    router.push({ name: "quiz" })
}
</script>

<template>
    <div class="view">
        <div>
            <h1>Wähle deinen Modus</h1>
            <div class="button-grid modes">
                <a v-for="name, mode in modes" @click="routeMode(mode)">{{ name }}</a>
            </div>
            <button class="button" v-if="oldGame" @click="resumeGame">Resume</button>
        </div>
    </div>
    <ConfigView />
    <InstallPWA />
</template>
