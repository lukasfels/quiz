<script setup>
import kontinente from "../components/FilterKontinent.vue"
import special from "../components/FilterSpecial.vue"
import pokemon from "../components/FilterPokemon.vue"

function starteSpiel() {
    console.log("Starte Spiel")
}
</script>

<template>
    <h1>Wähle die Gebiete</h1>
    <kontinente></kontinente>
    <special></special>
    <pokemon></pokemon>
    <button @click="starteSpiel">Starten</button>
</template>