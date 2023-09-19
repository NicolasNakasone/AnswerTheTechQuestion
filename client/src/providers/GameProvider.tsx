import { useState } from 'react'

import { GameContext } from 'src/context/GameContext'
import { BaseProvider } from 'src/types/provider'

export const GameProvider = ({ children }: BaseProvider): JSX.Element => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answeredIds, setAnsweredIds] = useState<string[]>([])

  const handleQuestionIndex = (index: number) => setQuestionIndex(index)
  const handleAnsweredIds = (id: string) =>
    setAnsweredIds(prev => structuredClone(prev.concat(id)))

  return (
    <GameContext.Provider
      value={{
        questionIndex,
        handleQuestionIndex,
        answeredIds,
        handleAnsweredIds,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
