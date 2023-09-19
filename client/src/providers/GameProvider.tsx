import { useState } from 'react'

import { GameContext } from 'src/context/GameContext'
import { IQuestion } from 'src/types'
import { BaseProvider } from 'src/types/provider'

export const GameProvider = ({ children }: BaseProvider): JSX.Element => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answeredIds, setAnsweredIds] = useState<string[]>([])
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion | null>(null)
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null)

  const handleQuestionIndex = (index: number) => setQuestionIndex(index)

  const handleAnsweredIds = (id: string) =>
    setAnsweredIds(prev => structuredClone(prev.concat(id)))

  const handleCurrentQuestion = (question: IQuestion) =>
    setCurrentQuestion(question)

  const handleSelectedAnswerId = (value: string | null) =>
    setSelectedAnswerId(value)

  return (
    <GameContext.Provider
      value={{
        questionIndex,
        handleQuestionIndex,
        answeredIds,
        handleAnsweredIds,
        currentQuestion,
        handleCurrentQuestion,
        selectedAnswerId,
        handleSelectedAnswerId,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
