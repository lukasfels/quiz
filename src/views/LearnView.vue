<script setup>
import { useQuizStore } from '@/stores/quizStore'
import { world } from "@/assets/world.js"
import { pokemon } from "@/assets/pokemon.js"
import ConfigView from './ConfigView.vue'
import router from '../router'
import { ref } from 'vue'

const store = useQuizStore()
const showModal = ref(false)

//Wenn die Seite neugeladen wird oder die Auswahl leer ist
if (store.arrSelection.length == 0) {
    router.push({ name: "home" })
}

//Filter Funktion für die Weltdaten
function filterWorld(x) {
    if ((x.uno && store.arrSelection.includes(x.continent))
        || (x.special && store.arrSelection.includes(x.special))) {
        return true
    }
}

//Zum starten und neustarten des Spiels
function startGame() {
    store.objQuestions = {}
    //Filter der Daten nach Auswahl
    if (store.strMode == "pokemon") {
        store.objQuestions = pokemon.filter(x => store.arrSelection.includes(x.generation))
    } else {
        store.objQuestions = world.filter(filterWorld)
    }
    store.nextQuestion()

    //Schliesst das Fenster für das Ergbnis
    showModal.value = false
}

function showInfo(index) {
    store.objNext = store.objQuestions[index];
    showModal.value = true
}

function getURL(mode, item) {
    if (mode == 'flags') {
        return new URL(import.meta.env.BASE_URL + "Flaggen/" + item.code + ".svg", import.meta.url).href
    } else if (mode == 'outlines') {
        return new URL(import.meta.env.BASE_URL + "Umrisse/" + item.continent + "/" + item.code + ".svg", import.meta.url).href
    } else if (mode == 'pokemon') {
        return new URL(import.meta.env.BASE_URL + "Pokemon/" + item.generation + "Generation/" + ('000' + item.id).slice(-3) + ".png", import.meta.url).href
    } else if (mode == 'pokemon_type') {
        return new URL(import.meta.env.BASE_URL + "Pokemon/Types/" + item.toLowerCase() + ".svg", import.meta.url).href
    }
}

startGame()
</script>
    
<template>
    <ConfigView />
    <h1>Lernmodus</h1>
    <div class="learnItems">
        <div class="learnItem" @click="showInfo(index)" v-for="item, index in store.objQuestions">
            <span class="capital" v-if="store.strMode == 'capitals'">{{item.name}}</span>
            <img v-if="store.strMode == 'flags'" :src="getURL('flags',item)" height="50">
            <img v-if="store.strMode == 'outlines'" :src="getURL('outlines',item)" height="100">
            <img v-if="store.strMode == 'pokemon'" :src="getURL('pokemon',item)" height="50">
        </div>
    </div>
    <div class="modalView" :class="{showModal: !showModal}" @click="showModal = !showModal" v-if="showModal">
        <div class="modalInfos" @click="showModal = true" v-if="store.strMode != 'pokemon'">
            <h1>{{store.objNext.name}}</h1>
            <p>Hauptstadt: {{store.objNext.capital}}</p>
            <img class="main-img" :src="getURL('flags',store.objNext)">
            <img class="main-img mt1 hide" :src="getURL('outlines',store.objNext)" @load="$event.target.style.display='block'">
        </div>
        <div class="modalInfos" @click="showModal = true" v-if="store.strMode == 'pokemon'">
            <h1>{{store.objNext.name}}</h1>
            <div class="types">
                <img v-for="ptype in store.objNext.typeList" :src="getURL('pokemon_type', ptype)">
            </div>
            <img class="main-img" :src="getURL('pokemon',store.objNext)">
        </div>
    </div>
</template>
    
<style>
.learnItems {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
}

.learnItem {
    margin: 4px;
}

.learnItem .capital {
    display: inline-block;
    font-size: 1.3rem;
    font-weight: 400;
    background-color: #494949;
    padding: 10px 15px;
    border-radius: 5px;
}

.modalView {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 98;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
}

.modalInfos {
    background-color: #2F2F2F;
    z-index: 99;
    margin: auto;
    padding: 20px;
    border-radius: 5px;
    max-width: 90%;
}

.modalInfos h1 {
    color: #1FFFA9;
    font-size: 3rem;
    padding: 10px;
    margin: 0;
    background-color: #494949;
    border-radius: 5px;
}

.modalInfos p {
    color: white;
    font-size: 1.5rem;
    text-align: center;
    margin: 10px;
}

.modalInfos .types {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.types img {
    height: 50px;
    width: 50px;
    margin: 10px;
}

.showModal, .hide {
    display: none;
}

.modalInfos .main-img {
    width: 100%;
    max-height: 300px;
    padding: 20px;
    background-color: #494949;
    border-radius: 5px;
}
</style>