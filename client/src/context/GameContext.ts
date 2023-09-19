import { createContext } from 'react'

import { IQuestion } from 'src/types'

interface GameContextProps {
  questionIndex: number
  handleQuestionIndex: (index: number) => void
  answeredIds: string[]
  handleAnsweredIds: (id: string) => void
  currentQuestion: IQuestion | null
  handleCurrentQuestion: (question: IQuestion) => void
  selectedAnswerId: string | null
  handleSelectedAnswerId: (value: string | null) => void
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
})
