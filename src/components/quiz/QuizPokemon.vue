<script setup>
import { useQuizStore } from '@/stores/quizStore'
import { computed } from '@vue/reactivity'
import AnswerInput from '../AnswerInput.vue'
import AnswerPick from '../AnswerPick.vue'

const store = useQuizStore()
const nextURL = computed(() => new URL(import.meta.env.BASE_URL + "Pokemon/" + store.objNext.generation + "Generation/" + ('000' + store.objNext.id).slice(-3) + ".png", import.meta.url).href)
</script>
    
<template>
    <h1>Pokemonquiz</h1>
    <h3>Wie heißt dieses Pokemon: </h3>
    <div class="pokemonDiv">
        <img class="pokemonShadow" :src="nextURL">
    </div>
    <AnswerInput v-if="store.intConfigAnswer != 2"></AnswerInput>
    <AnswerPick v-if="store.intConfigAnswer == 2"></AnswerPick>
</template>
    
<style>
.pokemonDiv {
    width: fit-content;
    display: flex;
    background-color: white;
    margin: auto;
}

.pokemonShadow {
    width: 300px;
    filter: brightness(0.0);
    padding: 5px;
}
</style>