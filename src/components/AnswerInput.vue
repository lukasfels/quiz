<script setup>
import { ref } from "vue"
import { computed } from "@vue/reactivity"

const strInput = ref('')
const props = defineProps(['attr', 'game'])
const answerKey = props.attr != 'capitals' ? 'name' : 'capital'
const currentTip = ref('')

//Index wo der Fokus gerade ist
const focusIndex = ref(0)

//Wird ausgeführt um die Antwort für die Frage zu prüfen
function checkAnswer(answer) {
    strInput.value = props.game.checkTypedAnswer(answer) ? "" : answer
}

//Funktion für die Autocomplete Liste
function adjustFocus(event) {
    if (props.game.difficulty == 0) {
        focusIndex.value = 0
    }

    switch(event.key) {
        //Pfeiltaste oben zum 'scrollen'
        case "ArrowUp":
            if (focusIndex.value > 0) {
                focusIndex.value--
            } else {
                focusIndex.value = arrFiltered.value.length - 1
            }
            break
        //Pfeiltaste unten zum 'scrollen'
        case "ArrowDown":
            if (focusIndex.value < arrFiltered.value.length - 1) {
                focusIndex.value++
            } else {
                focusIndex.value = 0
            }
            break
        //Taste enter zum Bestätigen
        case "Enter":
            checkAnswer(arrFiltered.value[focusIndex.value])
            break
    }
}

//Filtert die Antworten
const arrFiltered = computed(() => {
    if (props.game.difficulty == 1 && strInput.value.length >= 3) {
        return props.game.arrAnswers.filter(answer => answer.toLowerCase().includes(strInput.value.toLowerCase()))
    }
    
    return []
})
</script>

<template>
    <div>
        <div class="flex gap-2 mb-2">
            <div class="cursor-pointer px-3 py-2 border border-white mr-2" @click="currentTip = props.game.getTip()">Tipp</div>
            <div class="py-2 font-mono text-lg" style="letter-spacing: 2px;">{{ currentTip }}</div>
        </div>
        <input placeholder="Antwort" type="text" class="text-black px-3 py-2 w-full" spellcheck="false" v-model="strInput" @keyup="adjustFocus"
            @input="checkAnswer($event.target.value)">
        <div>
            <div class="z-25 w-full absolute bg-white border border-black text-black" v-if="props.game.difficulty == 1">
                <div
                    v-for="(item, index) in arrFiltered"
                    @click="checkAnswer(item)"
                    :class="{ 'bg-teal-300': focusIndex == index }"
                    class="hover:bg-yellow-400 cursor-pointer px-3 py-2 border-b border-black"
                >
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>
