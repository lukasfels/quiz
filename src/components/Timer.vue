<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue'

const timer = ref('00:00:00')
let seconds = 0
let minutes = 0
let hours = 0

function setTime() {
    if ((seconds += 1) >= 60) {
        seconds = 0
        if ((minutes += 1) >= 60) {
            minutes = 0
            hours++
        }
    }
    timer.value = ("" + hours).padStart(2, "0") + ":" + ("" + minutes).padStart(2, "0") + ":" + ("" + seconds).padStart(2, "0")
}

const reset = () => {
    timer.value = '00:00:00'
    seconds = 0
    minutes = 0
    hours = 0
}

defineExpose({ reset })
setInterval(setTime, 1000)
</script>

<template>
    <p> {{  timer  }} </p>
</template>