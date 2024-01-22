import { dataProvider } from '@/data_provider'

export class Game {
    constructor(mode, category) {
        this.answerFilter = 'name'
        if (mode == 'capitals') {
            this.answerFilter = 'capital'
        }
        this.objQuestions = dataProvider(mode, category).map((x) => { x.tips = 0; return x })
        this.arrAnswers = this.objQuestions.map(x => x[this.answerFilter])
        this.arrScore = [0, 0]
        this.gameTime = 0
        this.timerUpdateRate = 100
        this.isTimerRunning = true
        this.startTime = Date.now()
        this.ended = false
        this.difficulty = 2
    }

    get answeredQuestions() {
        return this.arrAnswers.length - this.objQuestions.length
    }

    get questionProgress() {
        return this.answeredQuestions + " / " + this.arrAnswers.length
    }

    scorePercent() {
        if (this.arrScore[1] <= 0 && this.arrScore[0] <= 0) {
            return 0.0
        }
        
        return ((this.arrScore[1] / (this.arrScore[0] + this.arrScore[1])) * 100).toFixed(1)
    }

    nextQuestion() {
        if(this.objQuestions.length <= 0) {
            this.ended = true
            return
        }

        this.currentIndex = this.generateRandomIndex()
        this.objNext = this.objQuestions[this.currentIndex]
    }

    generateRandomIndex() {
        return Math.floor(Math.random() * this.objQuestions.length);
    }

    correctAnswerString() {
        return this.objNext[this.answerFilter]
    }

    checkAnswer(answer, alreadyClicked) {
        if(this.ended) {
            return
        }

        if (answer == this.correctAnswerString()) {
            this.objQuestions.splice(this.currentIndex, 1)
            this.arrScore[1]++
            this.nextQuestion()
            return true
        } else if(!alreadyClicked) {
            this.arrScore[0]++
        }
        return false
    }

    getTip() {
        this.objNext.tips++
        this.arrScore[0]++

        return this.correctAnswerString()
                    .substring(0, this.objNext.tips)
                    .padEnd(this.correctAnswerString().length, "_")
    }

    resetTimer() {
        this.gameTime = 0
        this.startTime = Date.now()

        this.startTimer()
    }

    startTimer() {
        this.isTimerRunning = true

        this.updateGameTime()
    }

    stopTimer() {
        this.isTimerRunning = false
    }

    updateGameTime() {
        this.gameTime = Date.now() - this.startTime

        if(this.isTimerRunning) {
            setTimeout(this.updateGameTime.bind(this), this.timerUpdateRate)
        }
    }
    
    displayGameTime() {
        let totalMilliseconds = Math.floor(this.gameTime)
        let totalSeconds = Math.floor(totalMilliseconds / 1000)
        let totalMinutes = Math.floor(totalSeconds / 60)
        let totalHours = Math.floor(totalMinutes / 60)

        let deciseconds = (totalMilliseconds - totalSeconds * 1000).toString().padStart(3, '0')
        let seconds = (totalSeconds - totalMinutes * 60).toString().padStart(2, '0')
        let minutes = (totalMinutes - totalHours * 60).toString().padStart(2, '0')

        return `${minutes}:${seconds}.${deciseconds}`
    }
}
