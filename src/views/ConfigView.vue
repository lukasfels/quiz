<script setup>
import { ref } from 'vue'
import { useQuizStore } from '@/stores/quizStore'

const store = useQuizStore()
const hide = ref(true)

const answer = ref({ 0: "Selbst Schreiben", 1: "Schreiben (Autocomplete)", 2: "Antworten vorgeben" })
</script>

<template>
    <div class="options border p-2 top-0 right-0 absolute" @click="hide = !hide">
        <div>
            <div>Schwierigkeit</div>
            <div :class="{ hidden: hide }">
                <div v-for="(k, index) in answer">
                    <input type="radio" :value="index" :id="'difficulty' + index" v-model="store.difficulty" class="hidden peer">
                    <label :for="'difficulty' + index" class="peer-checked:bg-green-600 p-1 inline-block text-sm" @click="hide = !hide">{{ k }}</label>
                </div>
            </div>
        </div>
    </div>
</template>
