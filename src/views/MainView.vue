<script setup>
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/quizStore'
import ConfigView from './ConfigView.vue'

//Array mit allen Modi
const modes = {"flags": "Flaggen", "capitals": "Hauptstädte", "outlines": "Umrisse", "expert": "Expert", "pokemon": "Pokemon"}

const router = useRouter()
const store = useQuizStore()

//Ruft den ModusView auf und übergibt den Modus als Parameter
function routeMode(x) {
    store.strMode = x
    router.push({ name: "mode" })
}
</script>

<template>
    <div class="view">
        <div>
            <h1>Wähle einen Modus</h1>
            <div class="button-grid modes">
                <a v-for="name, mode in modes" @click="routeMode(mode)">{{ name }}</a>
            </div>
        </div>
    </div>
    <ConfigView />
</template>
