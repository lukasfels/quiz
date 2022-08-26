<script setup>
import { welt } from "../assets/welt.js"
import { ref } from "vue"

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

const checkedKontinent = ref([])
</script>

<template>
    <h2>Kontinente</h2>
    <div>{{checkedKontinent}}</div>
    <form class="formKontinente">
        <label v-for="q, k in kontinent">
            <input type="checkbox" v-model="checkedKontinent" :value="k">{{ k }} {{ q }}
        </label>
    </form>
</template>

<style>
.formKontinente {
    width: 100%;
    float: left;
}
</style>