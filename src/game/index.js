import { dataProvider, assetUrl } from '@/data_provider'

export class Game {
    constructor(mode, category, difficulty) {
        this.answerFilter = 'name'
        if (mode == 'capitals') {
            this.answerFilter = 'capital'
        }
        this.objQuestions = dataProvider(mode, category).map((question) => {
            question.tips = 0
            question.assetUrl = assetUrl(mode, question)
            return question
        })
        this.arrAnswers = this.objQuestions.map(x => x[this.answerFilter])
        this.correctAnswers = 0
        this.wrongAnswers = 0
        this.gameTime = 0
        this.timerUpdateRate = 100
        this.isTimerRunning = true
        this.startTime = Date.now()
        this.ended = false
        this.difficulty = difficulty
        this.mode = mode
        this.category = category
        this.nextQuestion()
    }

    get answeredQuestions() {
        return this.arrAnswers.length - this.objQuestions.length
    }

    get questionProgress() {
        return this.answeredQuestions + " / " + this.arrAnswers.length
    }

    get saveSate() {
        return {
            playtime: this.gameTime,
            // alreadyAnsweredQuestionIds": [],
            difficulty: this.difficulty,
            category: this.category,
            mode: this.mode,
            score: [this.correctAnswers, this.wrongAnswers],
        }
    }

    scorePercent() {
        if (this.correctAnswers <= 0 && this.wrongAnswers <= 0) {
            return 0
        }
        
        return ((this.correctAnswers / (this.wrongAnswers + this.correctAnswers)) * 100)
    }

    nextQuestion() {
        if(this.objQuestions.length <= 0) {
            this.ended = true
            this.stopTimer()
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

    checkAnswer(answer, alreadyClicked = false) {
        if(this.ended) {
            return
        }

        if (answer == this.correctAnswerString()) {
            this.objQuestions.splice(this.currentIndex, 1)
            this.correctAnswers++
            this.nextQuestion()
            return true
        }

        if(!alreadyClicked) {
            this.wrongAnswers++
        }

        return false
    }

    checkTypedAnswer(answer) {
        if (answer.toLowerCase() == this.correctAnswerString().toLowerCase() || (this.objNext['alt' + this.answerFilter] && answer.toLowerCase() == this.objNext['alt' + this.answerFilter].toLowerCase())) {
            this.objQuestions.splice(this.currentIndex, 1)
            this.correctAnswers++
            this.nextQuestion()
            return true
        } else if (this.arrAnswers.some(x => x.toLowerCase() == answer.toLowerCase())) {
            this.wrongAnswers++
        }
    }

    getTip() {
        this.objNext.tips++
        this.wrongAnswers++

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

    cancelGame() {
        this.ended = true
        this.stopTimer()
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

    saveToCookie() {

    }
}
