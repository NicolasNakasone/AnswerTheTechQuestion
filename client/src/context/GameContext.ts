import { createContext } from 'react'

import { Question, Trivia } from 'src/types'

interface GameContextProps {
  questionIndex: number
  handleQuestionIndex: (index: number) => void
  answeredIds: string[]
  handleAnsweredIds: (id: string) => void
  currentQuestion: Question | null
  handleCurrentQuestion: (question: Question) => void
  selectedAnswerId: string | null
  handleSelectedAnswerId: (value: string | null) => void
  currentTrivia: Trivia | null
  handleCurrentTrivia: (id: string) => Trivia | null
}

export const GameContext = createContext<GameContextProps>({
  questionIndex: 0,
  handleQuestionIndex: () => null,
  answeredIds: [],
  handleAnsweredIds: () => null,
  currentQuestion: null,
  handleCurrentQuestion: () => null,
  selectedAnswerId: null,
  handleSelectedAnswerId: () => null,
  currentTrivia: null,
  handleCurrentTrivia: () => null,
})
