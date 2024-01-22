<script setup>
import ConfigView from './ConfigView.vue'
import InstallPWA from '@/components/InstallPWA.vue'

//Array mit allen Modi
const modes = {
    "flags": {
        name: "Flaggen",
    },
    "capitals": { 
        name: "Hauptstädte",
    },
    "outlines": { 
        name: "Umrisse",
    },
    "expert": { 
        name: "Expert",
    },
    "pokemon": { 
        name: "Pokemon",
    },
}

let oldGame = false // store.objQuestions.length > 0 ? true : false
</script>

<template>
    <div class="mx-9">
        <div class="text-4xl mt-64 font-sans-bold text-lime-400 mb-5">Quizzes.</div>
        <div v-for="category, mode in modes">
            <hr class="border-neutral-500/20">
            <router-link :to="'/mode/' + mode" class="no-underline text-white block py-5 uppercase">{{ category.name }}</router-link>
        </div>
        <hr class="border-neutral-500/20">
        <router-link v-if="oldGame" to="/quiz" class="no-underline text-white block py-5 uppercase">Continue last game</router-link>
        <hr class="border-neutral-500/20">
    </div>
    <ConfigView />
    <InstallPWA />
</template>
