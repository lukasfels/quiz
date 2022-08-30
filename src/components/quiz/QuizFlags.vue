<script setup>
import { useQuizStore } from '@/stores/quizStore'
import { computed } from '@vue/reactivity'
import AnswerInput from '../AnswerInput.vue'
import AnswerPick from '../AnswerPick.vue'

const store = useQuizStore()
const nextURL = computed(() => './src/assets/Flaggen/' + store.objNext.code + '.svg')
</script>

<template>
    <h1>Flaggenquiz</h1>
    <h3>Zu welchem Land gehört diese Flagge: </h3>
    <img id="flagge" class="flagMax" :src="nextURL">
    <AnswerInput v-if="store.intConfigAnswer != 2"></AnswerInput>
    <AnswerPick v-if="store.intConfigAnswer == 2"></AnswerPick>
</template>

<style>
.flagMax {
    border: 1px solid black;
    max-width: 80%;
    margin: 0 10%;
}
</style>