<script setup>
import { useQuizStore } from '@/stores/quizStore'
import { computed } from '@vue/reactivity'
import AnswerInput from '../AnswerInput.vue'
import AnswerPick from '../AnswerPick.vue'

const store = useQuizStore()
const nextURL = computed(() => "./src/assets/Flaggen/" + store.objNext.code + ".svg")
</script>

<template>
    <h1>Flaggenquiz</h1>
    <h3>Zu welchem Land gehört diese Flagge: </h3>
    <div class="flagMax">
        <img :src="nextURL">
    </div>
    <AnswerInput v-if="store.intConfigAnswer != 2"></AnswerInput>
    <AnswerPick v-if="store.intConfigAnswer == 2"></AnswerPick>
</template>

<style>
.flagMax {
    height: 30vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    aspect-ratio: 1 / 1;
}
.flagMax img {
    width: 100%;
}
</style>