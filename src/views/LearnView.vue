<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { dataProvider, assetUrl } from '@/data_provider'

const modalClosed = ref(true)
const route = useRoute()
const currentMode = route.params.mode
const currentCategory = route.params.category
const itemList = dataProvider(currentMode, currentCategory)
const currentItemIndex = ref(0)
const currentItem = computed(() => { return itemList[currentItemIndex.value] })

function changeIndex(relativeIndex, absoluteIndex = null) {
    let newIndex = (absoluteIndex || currentItemIndex.value) + relativeIndex

    if(newIndex < 0) {
        newIndex = itemList.length - 1;
    } else if(newIndex >= itemList.length) {
        newIndex = 0;
    }

    currentItemIndex.value = newIndex
}

function showModal(index) {
    changeIndex(0, index)
    modalClosed.value = false
}

function closeOnOutsideClick(event) {
    if(event.target.id === "modal") {
        modalClosed.value = true
    }
}

window.addEventListener('keyup', function(keyEvent) {
    if(modalClosed.value)
        return

    switch(keyEvent.code) {
        case "ArrowLeft": changeIndex(-1); break
        case "ArrowRight": changeIndex(+1); break
        case "Escape": modalClosed.value = true; break
    }
})
</script>
    
<template>
    <div class="mx-9 my-64">
        <div class="text-4xl font-sans-bold text-lime-400 mb-5">Lernen.</div>
        <div class="grid gap-2 lg:grid-cols-4" :class="currentMode == 'capitals' ? 'grid-cols-2' : 'grid-cols-4'">
            <div @click="showModal(index)" v-for="item, index in itemList">
                <div v-if="currentMode == 'capitals'" class="text-lg bg-neutral-700 px-4 py-2 text-center overflow-hidden">{{ item.name }}</div>
                <img v-else :src="assetUrl(currentMode, item)" height="50">
            </div>
        </div>
        <div class="bg-black/50 h-full w-full top-0 left-0 flex" :class="modalClosed ? 'hidden': 'fixed'" id="modal" @click="closeOnOutsideClick">
            <div class="m-auto bg-neutral-800 p-4">
                <div class="flex justify-between text-xl">
                    <div @click="changeIndex(-1)" class="cursor-pointer">⬅️</div>
                    <div class="font-bold">{{ currentItem ? currentItem.name : 'NA' }}</div>
                    <div @click="changeIndex(+1)" class="cursor-pointer">➡️</div>
                </div>
                <div v-if="currentMode != 'pokemon'">
                    <p><span class="text-neutral-300">Hauptstadt:</span> {{ currentItem ? currentItem.capital : 'NA' }}</p>
                    <img class="max-h-72" :src="assetUrl('flags', currentItem)">
                    <img class="mt1 hidden" v-if="currentMode == 'outlines'" :src="assetUrl('outlines', currentItem)" @load="$event.target.style.display='block'">
                </div>
                <div class="m-auto bg-neutral-800 p-4" v-else>
                    <div class="flex gap-2 justify-center my-2">
                        <img v-for="pokemonType in currentItem.typeList" :src="assetUrl('pokemon_type', pokemonType)" class="h-12">
                    </div>
                    <img class="max-h-72" :src="assetUrl('pokemon', currentItem)">
                </div>
            </div>
        </div>
    </div>
</template>
