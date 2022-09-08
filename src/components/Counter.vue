<script setup>
import { useQuizStore } from '@/stores/quizStore'
import { computed } from '@vue/reactivity';

const store = useQuizStore()
let count = store.objQuestions.length

const strCount = computed(() => {
    if (store.objQuestions.length == 0) {
        return "Alle beantwortet"
    } else {
        let temp = count - store.objQuestions.length
        return temp + " von " + count + " beantwortet"
    }
})

defineExpose({ strCount })
</script>

<template>
    <p>{{strCount}}</p>
</template>