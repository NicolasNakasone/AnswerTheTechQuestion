import { createContext } from 'react'

interface GameContextProps {
  questionIndex: number
  handleQuestionIndex: (index: number) => void
  answeredIds: string[]
  handleAnsweredIds: (id: string) => void
}

export const GameContext = createContext<GameContextProps>({
  questionIndex: 0,
  handleQuestionIndex: () => null,
  answeredIds: [],
  handleAnsweredIds: () => null,
})
