<script setup>
import { useQuizStore } from '@/stores/quizStore'
import { computed } from '@vue/reactivity'
import AnswerInput from '../AnswerInput.vue'
import AnswerPick from '../AnswerPick.vue'

const store = useQuizStore()
const nextURL = computed(() => new URL(import.meta.env.BASE_URL + "Flaggen/" + store.objNext.code + ".svg", import.meta.url).href)
</script>

<template>
    <h1>Flaggenquiz</h1>
    <div class="flagMax">
        <img :src="nextURL">
    </div>
    <AnswerInput v-if="store.intConfigAnswer != 2"></AnswerInput>
    <AnswerPick v-if="store.intConfigAnswer == 2"></AnswerPick>
</template>

<style>
.flagMax {
    height: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    aspect-ratio: 1 / 1;
}
.flagMax img {
    width: 100%;
}
</style>