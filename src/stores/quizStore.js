import { defineStore } from 'pinia'
import { ref } from "vue"

export const useQuizStore = defineStore('quizStore', () => {
    const strMode = ref("")
    const boolNewGame = ref(false)
    const arrSelection = ref([])
    const objQuestions = ref({})
    const arrAnswers = ref([])
    const objNext = ref({})
    const intRandom = ref(0)
    const intConfigOV = ref(0)
    const intConfigAnswer = ref(2)
    const intConfigDelay = ref(0)
    const arrScore = ref([0, 0])
    const strTime = ref("00:00")
    const boolLearn = ref(false)

    function nextQuestion() {
        if (objQuestions.value.length > 0) {
            if (objQuestions.value.length > 10 && !boolLearn.value) {
                let t = Math.floor(Math.random() * objQuestions.value.length)
                while (t == intRandom.value) {
                    t = Math.floor(Math.random() * objQuestions.value.length)
                }
                intRandom.value = t
            } else if (intRandom.value < objQuestions.value.length - 1) {
                intRandom.value++
            } else {
                intRandom.value = 0
            }
            objNext.value = objQuestions.value[intRandom.value];
        }
    }

    return { strMode, boolNewGame, arrSelection, objQuestions, arrAnswers, objNext, intRandom, intConfigOV, intConfigAnswer, intConfigDelay, arrScore, strTime, boolLearn, nextQuestion }
},
    {
        persist: true,
    },
)
