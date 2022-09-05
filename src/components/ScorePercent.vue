<script setup>
import { useQuizStore } from '@/stores/quizStore'
import { computed } from '@vue/reactivity';

const store = useQuizStore()
const score = computed(() => {
    if (store.arrScore[1] > 0 || store.arrScore[0] > 0) {
        return ((store.arrScore[1] / (store.arrScore[0] + store.arrScore[1])) * 100).toFixed(1)
    } else {
        return "100.0"
    }

})
</script>

<template>
    <p>Bisher richtig: {{  score  }}%</p>
</template>