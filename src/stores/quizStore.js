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
    const boolLearn = ref(false)

    function nextQuestion() {
        if (objQuestions.value.length > 0) {
            if(objQuestions.value.length > 10 && !boolLearn) {
                let t = Math.floor(Math.random() * objQuestions.value.length)
                while(t == intRandom.value) {
                    t = Math.floor(Math.random() * objQuestions.value.length)
                }
                intRandom.value = t
            } else if (intRandom.value < objQuestions.value.length-1){
                intRandom.value++
            } else {
                intRandom.value = 0
            }
            objNext.value = objQuestions.value[intRandom.value];
        }
    }

    return { strMode, arrSelection, objQuestions, objNext, intRandom, intConfigOV, intConfigAnswer, intConfigDelay, arrScore, boolLearn, nextQuestion }
})
