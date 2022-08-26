<script setup>
import { welt } from "../assets/welt.js"

const special = {};

welt.forEach(function (x) {
    if (x.special) {
        if (special[x.special]) {
            special[x.special]++;
        } else {
            special[x.special] = 1;
        }
    }
})
</script>

<template>
    <h2>Spezial</h2>
    <form class="formSpecial">
        <label v-for="q, k in special">
            <input type="checkbox" name="special" :value="k">{{ k }} {{ q }}
        </label>
    </form>
</template>

<style>
.formSpecial {
    width: 100%;
    float: left;
}
</style>