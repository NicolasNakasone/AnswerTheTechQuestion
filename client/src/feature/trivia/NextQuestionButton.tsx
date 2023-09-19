import { SetStateAction, useContext } from 'react'

import { Button } from '@chakra-ui/react'
import { GameContext } from 'src/context/GameContext'
import { IQuestion } from 'src/types'

interface INextQuestionButton {
  currentTrivia: IQuestion[]
  setCurrentQuestion: (value: SetStateAction<IQuestion>) => void
  selectedAnswerID: string | boolean
  setSelectedAnswerID: (value: SetStateAction<string | boolean>) => void
  setTimer: (value: SetStateAction<number>) => void
}

export const NextQuestionButton = ({
  currentTrivia,
  setCurrentQuestion,
  selectedAnswerID,
  setSelectedAnswerID,
  setTimer,
}: INextQuestionButton): JSX.Element => {
  const { handleAnsweredIds, handleQuestionIndex, questionIndex } =
    useContext(GameContext)

  const onGoToNextQuestion = () => {
    const newIndex = questionIndex + 1

    setCurrentQuestion(structuredClone(currentTrivia[newIndex]))
    handleQuestionIndex(newIndex)
    typeof selectedAnswerID === 'string' && handleAnsweredIds(selectedAnswerID)
    setSelectedAnswerID(false)
    setTimer(5)
  }

  return (
    <Button isDisabled={!selectedAnswerID} onClick={onGoToNextQuestion}>
      {questionIndex < currentTrivia.length - 1
        ? `Siguiente`
        : `Ver resultados`}
    </Button>
  )
}
