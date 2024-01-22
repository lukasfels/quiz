<script setup>
import { useRoute } from "vue-router";
import { ref } from 'vue'
import Filter from "@/components/Filter.vue"
import ConfigView from '@/views/ConfigView.vue'

const route = useRoute()
const mode = ref(route.params.name)
</script>

<template>
    <div class="mx-9">
        <div class="text-4xl mt-64 font-sans-bold text-lime-400 mb-5">Thema.</div>
        <Filter :mode="mode" />
        <hr class="border-neutral-500/20 mb-20">
    </div>
    <ConfigView></ConfigView>
</template>
