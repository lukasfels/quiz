<script setup>
import { world } from "@/assets/world.js"
import { useQuizStore } from '@/stores/quizStore'

const store = useQuizStore()

//Erstellt ein Objekt mit allen Spezialthemen plus die Anzahl
const special = {};
world.forEach(function (x) {
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
    <h3 class="m1">Spezial</h3>
    <form class="button-grid categories">
        <div v-for="q, k in special">
            <input type="checkbox" :value="k" :id="k" v-model="store.arrSelection">
            <label :for="k">
                <span>{{ q }}</span>
                <span>{{ k }}</span>
            </label>
        </div>
    </form>
</template>
