<script setup>
import unoLaender from "../components/FilterWelt.vue"
console.log(unoLaender)

function starteSpiel() {
    console.log("Starte Spiel")
}
</script>

<template>
    <h1>Wähle die Gebiete</h1>
    <button @click="starteSpiel">Starten</button>
</template>