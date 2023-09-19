import { SetStateAction, useContext } from 'react'

import { Button } from '@chakra-ui/react'
import { GameContext } from 'src/context/GameContext'
import { IQuestion } from 'src/types'

interface INextQuestionButton {
  currentTrivia: IQuestion[]
  selectedAnswerID: string | null
  setSelectedAnswerID: (value: SetStateAction<string | null>) => void
  setTimer: (value: SetStateAction<number>) => void
}

export const NextQuestionButton = ({
  currentTrivia,
  selectedAnswerID,
  setSelectedAnswerID,
  setTimer,
}: INextQuestionButton): JSX.Element => {
  const {
    handleAnsweredIds,
    handleCurrentQuestion,
    handleQuestionIndex,
    questionIndex,
  } = useContext(GameContext)

  const onGoToNextQuestion = () => {
    const newIndex = questionIndex + 1

    handleCurrentQuestion(structuredClone(currentTrivia[newIndex]))
    handleQuestionIndex(newIndex)
    typeof selectedAnswerID === 'string' && handleAnsweredIds(selectedAnswerID)
    setSelectedAnswerID(null)
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
