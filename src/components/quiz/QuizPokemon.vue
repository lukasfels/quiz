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
        <img class="pokemonShadow" :src="nextURL">
        <AnswerInput v-if="store.intConfigAnswer != 2"></AnswerInput>
        <AnswerPick v-if="store.intConfigAnswer == 2"></AnswerPick>
    </template>
    
    <style>
    .pokemonShadow {
        border: 1px solid black;
        max-width: 80%;
        margin: 0 10%;
        filter: brightness(0.0)
    }
    </style>