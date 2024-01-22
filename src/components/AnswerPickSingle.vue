<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['answer', 'game'])
const hasBeenClicked = ref(false)

watch(
    () => props.answer,
    () => { hasBeenClicked.value = false }
)

function checkAnswer(clickedAnswer) {
    hasBeenClicked.value = !props.game.checkAnswer(clickedAnswer, hasBeenClicked.value)
}
</script>

<template>
    <div class="border border-white h-16 relative" :class="{ 'bg-red-500': hasBeenClicked }" @click="checkAnswer(answer)">
        <div class="absolute top-1/2 -translate-y-1/2 mx-2 lg:mx-5">
            {{ answer }}
        </div>
    </div>
</template>
