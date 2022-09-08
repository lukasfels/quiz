<script setup>
import { useQuizStore } from '@/stores/quizStore'
import { computed } from '@vue/reactivity'
import AnswerInput from '../AnswerInput.vue'
import AnswerPick from '../AnswerPick.vue'

const store = useQuizStore()
const nextURL = computed(() => new URL(import.meta.env.BASE_URL + "Umrisse/" + store.objNext.continent + "/" + store.objNext.code + ".svg", import.meta.url).href)
</script>

<template>
    <h1>Umrissquiz</h1>
    <h3>Zu welchem Land gehört dieser Umriss: </h3>
    <img class="umrissMax" :src="nextURL">
    <AnswerInput v-if="store.intConfigAnswer != 2"></AnswerInput>
    <AnswerPick v-if="store.intConfigAnswer == 2"></AnswerPick>
</template>

<style>
.umrissMax {
    border: 1px solid black;
    max-width: 80%;
    margin: 0 10%;
}
</style>