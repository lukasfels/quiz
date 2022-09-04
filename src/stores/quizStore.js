import { defineStore } from 'pinia'
import { ref } from "vue"

export const useQuizStore = defineStore('quizStore', () => {
    const strMode = ""
    const arrSelection = ref([])
    const objQuestions = ref({})
    const objNext = ref({})
    const intRandom = ref(0)
    const intConfigOV = ref(0)
    const intConfigAnswer = ref(2)
    const intConfigDelay = ref(0)
    const arrScore = ref([0, 0])

    function nextQuestion() {
        if (objQuestions.value.length > 0) {
            intRandom.value = Math.floor(Math.random() * objQuestions.value.length);
            objNext.value = objQuestions.value[intRandom.value];
        }
    }
    return { strMode, arrSelection, objQuestions, objNext, intRandom, intConfigOV, intConfigAnswer, intConfigDelay, arrScore, nextQuestion }
})
