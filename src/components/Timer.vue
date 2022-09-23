<script setup>
import { useQuizStore } from '@/stores/quizStore'
import { onBeforeUnmount } from 'vue';

const store = useQuizStore()
let seconds = 0
let minutes = 0
let hours = 0
let intervalID = 0

let arrTimer = store.strTime.split(':').reverse()
if (arrTimer[0]) seconds = parseInt(arrTimer[0])
if (arrTimer[1]) minutes = parseInt(arrTimer[1])
if (arrTimer[2]) hours = parseInt(arrTimer[2])

function setTime() {
    console.log(intervalID)
    if ((seconds += 1) >= 60) {
        seconds = 0
        if ((minutes += 1) >= 60) {
            minutes = 0
            hours++
        }
    }
    let tHours = hours != 0 ? ("" + hours).padStart(2, "0") + ":" : ""
    let tMinutes = ("" + minutes).padStart(2, "0") + ":"
    store.strTime = tHours + tMinutes + ("" + seconds).padStart(2, "0")
}

const resetTime = () => {
    store.strTime = "00:00"
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

onBeforeUnmount(() => {
  stopTime()
})

startTime()
defineExpose({ resetTime, startTime, stopTime })
</script>

<template>
    <p>Zeit: {{ store.strTime }} </p>
</template>