<script setup>
import { useQuizStore } from '@/stores/quizStore'

const store = useQuizStore()
var count = store.objQuestions.length
</script>

<template>
    <p>Noch {{  store.objQuestions.length  }} übrig von insgesamt {{  count  }}</p>
</template>