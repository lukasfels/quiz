<script setup>
import { welt } from "../assets/welt.js"

const kontinent = {};

welt.forEach(function (x) {
    if (x.uno) {
        if (kontinent[x.kontinent]) {
            kontinent[x.kontinent]++;
        } else {
            kontinent[x.kontinent] = 1;
        }
    }
})
</script>

<template>
    <h2>Kontinente</h2>
    <form class="formKontinente">
        <label v-for="q, k in kontinent">
            <input type="checkbox" name="special" :value="k">{{ k }} {{ q }}
        </label>
    </form>
</template>

<style>
.formKontinente {
    width: 100%;
    float: left;
}
</style>