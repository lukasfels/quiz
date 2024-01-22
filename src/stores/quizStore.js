import { defineStore } from 'pinia'
import { ref } from "vue"

export const useQuizStore = defineStore('quizStore', () => {
    const objQuestions = ref({})
    const arrAnswers = ref([])
    const objNext = ref({})
    const currentIndex = ref(0)
    const difficulty = ref(2)
    const arrScore = ref([0, 0])
    const gameTime = ref(0)
    const answerFilter = ref(null)

    return {
        objQuestions,
        gameTime,
        arrAnswers,
        objNext,
        currentIndex,
        difficulty,
        arrScore,
        answerFilter
    }
},
    {
        persist: true,
    },
)
