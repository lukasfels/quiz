<script setup>
import kontinente from "../components/FilterKontinent.vue"
import special from "../components/FilterSpecial.vue"
import pokemon from "../components/FilterPokemon.vue"
import { useRoute } from "vue-router";

const props = defineProps({ item: String })

const route = useRoute();
console.log(route.fullPath)
console.log(props.item)
console.log(route.params)

const checkedKontinent = []

function starteSpiel() {
    console.log("Starte Spiel")
    console.log(checkedKontinent)
}
</script>

<template>
    <h1>Wähle die Gebiete</h1>
    <kontinente></kontinente>
    <special></special>
    <pokemon></pokemon>
    <button @click="starteSpiel">Starten</button>
</template>