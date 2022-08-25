<script setup>
import { useRouter } from 'vue-router';

const modi = ["Flaggen", "Hauptstädte", "Umrisse", "Expert", "Pokemon"]

const router = useRouter()

function goMode(x) {
    console.log(x)
    router.push({ name: "modus", query: { name: x }, params: { item: 'Bitte'} })
}
</script>

<template>
    <h1>Wähle einen Modus</h1>
    <br>
    <ul class="modi">
        <a v-for="modus in modi" @click="goMode(modus)">
            <li class="modus">{{ modus }}</li>
        </a>
    </ul>
</template>

<style>
.modi {
    list-style-type: none;
    padding: 0;
}

.modus {
    font-size: 16px;
    border: 1px solid black;
    margin: -1px 0 0 -1px;
    float: left;
    width: 50%;
    padding: 25px 0;
    text-align: center;
}
</style>