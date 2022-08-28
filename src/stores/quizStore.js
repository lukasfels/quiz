import { defineStore } from 'pinia'
import { ref } from "vue"

export const useQuizStore = defineStore('quizStore', () => {
    const modus = ""
    const auswahl = ref([])
    //const frage = ref({})
    const next = ref({})
    const rand = ref(0)
    function nextLand(x) {
        if (x.length > 0) {
            rand.value = Math.floor(Math.random() * x.length);
            next.value = x[rand.value];
        }
    }
    return { modus, auswahl, frage, next, nextLand }
})
