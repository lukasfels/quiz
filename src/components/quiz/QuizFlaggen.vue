<script setup>
import { useQuizStore } from '@/stores/quizStore'
import { computed } from '@vue/reactivity'
import AnswerInput from '../AnswerInput.vue'

const store = useQuizStore()
const next = computed(() => './src/assets/Flaggen/' + store.next.code + '.svg')
</script>

<template>
    <h1>Flaggenquiz</h1>
    <h3>Zu welchem Land gehört diese Flagge: </h3>
    <img id="flagge" class="flagMax" :src="next">
    <AnswerInput></AnswerInput>
</template>

<style>
.flagMax {
    border: 1px solid black;
    max-width: 80%;
    margin: 0 10%;
}
</style>