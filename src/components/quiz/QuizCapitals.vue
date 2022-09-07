<script setup>
import { useQuizStore } from '@/stores/quizStore'
import { computed } from '@vue/reactivity'
import AnswerInput from '../AnswerInput.vue'
import AnswerPick from '../AnswerPick.vue'

const store = useQuizStore()
const nextCapital = computed(() => store.objNext.name)
</script>
    
<template>
    <h1>Hauptstadtquiz</h1>
    <h3>Wie heißt die Hauptstadt von</h3>
    <p class="capital">{{  nextCapital  }}</p>
    <AnswerInput v-if="store.intConfigAnswer != 2" attr="capital"></AnswerInput>
    <AnswerPick v-if="store.intConfigAnswer == 2" attr="capital"></AnswerPick>
</template>

<style>
.capital {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    color: #1FFFA9;
}
</style>