<script setup>
import { useRoute } from "vue-router"
import { ref } from 'vue'
import Filter from "@/components/Filter.vue"

const route = useRoute()
const mode = ref(route.params.name)
const showDifficultyPanel = ref(false)
const difficulties = ref({ 0: "Schreiben", 1: "Schreiben mit Autocomplete", 2: "Multiple Choice" })
const selectedDifficulty = ref(2)
</script>

<template>
    <div class="mx-9">
        <div class="text-4xl mt-64 font-sans-bold text-lime-400 mb-5">Thema.</div>
        <Filter :mode="mode" :difficulty="selectedDifficulty" />
        <hr class="border-neutral-500/20 mb-20">
    </div>
    <div class="border-2 p-3 top-0 right-0 fixed bg-dark" @click="showDifficultyPanel = !showDifficultyPanel">
        <div>
            <div class="leading-none text-right">
                Schwierigkeit
                <span v-if="showDifficultyPanel">🔼</span>
                <span v-if="!showDifficultyPanel">🔽</span>
            </div>
            <div :class="{ hidden: !showDifficultyPanel }">
                <div v-for="(difficulty, index) in difficulties" class="flex flex-col">
                    <div class="pt-2">
                        <input type="radio" :value="index" :id="'difficulty' + index" v-model="selectedDifficulty" class="hidden peer">
                        <label :for="'difficulty' + index" class="peer-checked:bg-green-600 peer-checked:border-green-600 border-2 border-red-600 p-1 block text-sm">{{ difficulty }}</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
