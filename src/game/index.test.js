import { expect, test } from 'vitest'
import { Game } from './'

test('answeredQuestions: new game has 0 answered questions', () => {
  let game = initializeGame()

  expect(game.answeredQuestions).toBe(0)
})

test('game.ended: game ends when all questions are answered', () => {
  let game = initializeGame()

  game.checkAnswer(game.correctAnswerString(), false)
  game.checkAnswer(game.correctAnswerString(), false)

  expect(game.ended).toBe(true)
})

test('scorePercent: new game has 0% score percent', () => {
  let game = initializeGame()

  expect(game.scorePercent()).toBe(0)
})

test('scorePercent: new game with three wrong and two correct answers has 40% score percent', () => {
  let game = initializeGame()
  
  game.checkAnswer('wrong answer', false)
  game.checkAnswer('wrong answer', false)
  game.checkAnswer('wrong answer', false)
  game.checkAnswer(game.correctAnswerString(), false)
  game.checkAnswer(game.correctAnswerString(), false)

  expect(game.scorePercent()).toBe(40)
})

test('checkAnswer: correct answer progresses the game', () => {
  let game = initializeGame()
  
  game.checkAnswer(game.correctAnswerString(), false)
  
  expect(game.answeredQuestions).toBe(1)
})

test('checkAnswer: wrong answer does not progress the game', () => {
  let game = initializeGame()
  
  game.checkAnswer('wrong answer', false)
  
  expect(game.answeredQuestions).toBe(0)
})

test('checkTypedAnswer: correct answer progresses the game', () => {
  let game = initializeGame()

  game.checkTypedAnswer(game.correctAnswerString())

  expect(game.answeredQuestions).toBe(1)
})

test('checkTypedAnswer: wrong answer does not progress the game', () => {
  let game = initializeGame()

  game.checkTypedAnswer("wrong answer")

  expect(game.answeredQuestions).toBe(0)
})

function initializeGame()
{
  return new Game('flags', 'Nordamerika')
}
