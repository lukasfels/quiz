<script setup>
    import { useRoute } from 'vue-router'
    import { ref } from 'vue'
    import { Game } from '@/game'
    import AnswerInput from '@/components/AnswerInput.vue'
    import AnswerPick from '@/components/AnswerPick.vue'

    const route = useRoute()
    const game = ref()
    const currentMode = route.params.mode

    function restartGame() {
        game.value = new Game(currentMode, route.params.category, route.params.difficulty)
        game.value.startTimer()
    }

    const headlines = {
        'flags': "Flaggenquiz",
        'outlines': "Umrissquiz",
        'pokemon': "Pokemonquiz",
        'capitals': "Hauptstadtquiz",
    }

    const quizMode = {
        "imageMode": ['flags', 'outlines', 'pokemon'],
        "textMode": ['capitals']
    }

    restartGame()
</script>

<template>
    <div class="grid grid-cols-3 gap-2 text-center py-4">
        <div class="w-full">Progress<br>{{ game.questionProgress }}</div>
        <div>
            <div>Timer</div>
            <div class="w-full font-mono">{{ game.displayGameTime() }}</div>
        </div>
        <div class="w-full">Score<br>{{ game.scorePercent().toFixed(1) }}%</div>
    </div>
    <h1 class="text-center text-xl font-sans-bold">{{ headlines[currentMode] }}</h1>
    <div v-if="quizMode['imageMode'].includes(currentMode)" class="w-full">
        <img class="mx-auto my-4 border max-h-52 md:max-h-72" :src="game.objNext.assetUrl">
    </div>
    <p v-if="quizMode['textMode'].includes(currentMode)" class="text-center font-sans-bold text-2xl my-4">
        <span class="text-teal-300">{{ game.objNext.name }}</span>
    </p>
    <AnswerInput v-if="game.difficulty != 2" :game="game" />
    <AnswerPick v-if="game.difficulty == 2" :game="game" />
    <div class="grid grid-cols-3 gap-2 text-center my-5">
        <div class="w-full cursor-pointer border border-white py-4" @click="game.nextQuestion">Nächste</div>
        <div class="w-full cursor-pointer border border-white py-4" @click="restartGame">Neustart</div>
        <div class="w-full cursor-pointer border border-white py-4" @click="game.cancelGame">Ende</div>
    </div>
    <div :class="{ hidden: !game.ended }" class="fixed top-0 left-0 bg-dark/70 w-full h-full">
        <div class="align-middle table-cell w-screen h-screen">
            <div class="ml-auto mr-auto w-64 bg-dark/70 border border-white flex flex-col gap-1 px-4 py-2">
                <div class="text-xl text-center pb-2">Ergebnis</div>
                <div>Fragen: {{ game.questionProgress }}</div>
                <div>Zeit: {{ game.displayGameTime() }}</div>
                <div>Score: {{ game.scorePercent().toFixed(1) }}%</div>
                <div class="flex justify-between mt-2">
                    <div @click="restartGame" class="py-1 px-2 border border-white">Neustart</div>
                    <router-link to="/" class="py-1 px-2 border border-white">Hauptmenü</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
