import { defineStore } from 'pinia'
import { ref } from "vue"

export const useQuizStore = defineStore('quizStore', () => {
    const modus = ""
    const auswahl = ref([])
    const fragen = ref({})
    const next = ref({})
    const rand = ref(0)
    const configOV = ref(0)
    const configAnswer = ref(2)
    const configDelay = ref(0)
    function nextLand(x) {
        if (x.length > 0) {
            rand.value = Math.floor(Math.random() * x.length);
            next.value = x[rand.value];
        }
    }
    return { modus, auswahl, fragen, next, rand, configOV, configAnswer, configDelay, nextLand }
})
