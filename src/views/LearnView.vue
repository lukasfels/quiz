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

startGame()
</script>
    
<template>
    <ConfigView />
    <h1>Lernmodus</h1>
    <div class="learnItems">
        <div class="learnItem" @click="showInfo(index)" v-for="item, index in store.objQuestions">
            <span v-if="store.strMode == 'capitals'">{{item.name}}</span>
            <img v-if="store.strMode == 'flags'" :src="'Flaggen/' + item.code + '.svg'" height="50">
            <img v-if="store.strMode == 'outlines'" :src="'Umrisse/' + item.continent + '/' + item.code + '.svg'"
                height="50">
            <img v-if="store.strMode == 'pokemon'"
                :src="'Pokemon/' + item.generation + 'Generation/' + ('000' + item.id).slice(-3) + '.png'" height="50">
        </div>
    </div>
    <div class="modalView" :class="{showModal: !showModal}" @click="showModal = !showModal">
        <div class="modalInfos">
            <h1>{{store.objNext.name}}</h1>
            <p>Hauptstadt: {{store.objNext.capital}}</p>
            <img :src="'Flaggen/' + store.objNext.code + '.svg'">
            <img :src="'Umrisse/' + store.objNext.continent + '/' + store.objNext.code + '.svg'">
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
    margin: 2px;
    padding: 5px;
}

.modalView {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
}

.modalInfos {
    background-color: #2F2F2F;
    margin: auto;
    width: 80%;
    height: 80%;
    display: flex;
    flex-flow: column;
}

.showModal {
    display: none;
}

.modalInfos img {
    width: 100%;
    max-height: 300px;
}
</style>