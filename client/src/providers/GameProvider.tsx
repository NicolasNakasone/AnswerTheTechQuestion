import { useEffect, useState } from 'react'

import { GameContext } from 'src/context/GameContext'
import { shuffledTrivia } from 'src/mocks/trivias.mock'
import { Question, Trivia } from 'src/types'
import { BaseProvider } from 'src/types/provider'

export const GameProvider = ({ children }: BaseProvider): JSX.Element => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answeredIds, setAnsweredIds] = useState<string[]>([])
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null)
  const [currentTrivia, setCurrentTrivia] = useState<Trivia | null>(null)

  const handleQuestionIndex = (index: number) => setQuestionIndex(index)

  const handleAnsweredIds = (id: string) => setAnsweredIds(prev => structuredClone(prev.concat(id)))

  const handleCurrentQuestion = (question: Question) => setCurrentQuestion(question)

  const handleSelectedAnswerId = (value: string | null) => setSelectedAnswerId(value)

  const handleCurrentTrivia = (id: string) => {
    const response = shuffledTrivia.find(trivia => trivia.id === id) || null
    response && setCurrentTrivia(response)
    return response
  }

  useEffect(() => {
    handleCurrentTrivia(shuffledTrivia[0].id)
  }, [])

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
        currentTrivia,
        handleCurrentTrivia,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
