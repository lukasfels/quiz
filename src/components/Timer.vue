<script setup>
import { ref } from 'vue'

const strTimer = ref('00:00')
let seconds = 0
let minutes = 0
let hours = 0
let intervalID = 0

function setTime() {
    if ((seconds += 1) >= 60) {
        seconds = 0
        if ((minutes += 1) >= 60) {
            minutes = 0
            hours++
        }
    }
    let tHours = hours != 0 ? ("" + hours).padStart(2, "0") + ":" : ""
    let tMinutes = ("" + minutes).padStart(2, "0") + ":"
    strTimer.value = tHours + tMinutes + ("" + seconds).padStart(2, "0")
}

const getTime = () => {
    return strTimer.value
}

const resetTime = () => {
    strTimer.value = '00:00'
    seconds = 0
    minutes = 0
    hours = 0
}

const startTime = () => {
    if (intervalID == 0) {
        intervalID = setInterval(setTime, 1000)
    }
}

const stopTime = () => {
    clearInterval(intervalID)
    intervalID = 0
}

startTime()
defineExpose({ resetTime, getTime, startTime, stopTime, strTimer })
</script>

<template>
    <p>Zeit: {{ strTimer }} </p>
</template>