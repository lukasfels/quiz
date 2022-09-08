<script setup>
import { useQuizStore } from '@/stores/quizStore'
import { computed } from '@vue/reactivity';

const store = useQuizStore()
const strScore = computed(() => {
    if (store.arrScore[1] > 0 || store.arrScore[0] > 0) {
        return ((store.arrScore[1] / (store.arrScore[0] + store.arrScore[1])) * 100).toFixed(1)
    } else {
        return "0.0"
    }
})

defineExpose({ strScore })
</script>

<template>
    <p>Bisher richtig: {{ strScore }}%</p>
</template>