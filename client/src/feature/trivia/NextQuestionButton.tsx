import { SetStateAction, useContext } from 'react'

import { Button } from '@chakra-ui/react'
import { GameContext } from 'src/context/GameContext'

interface INextQuestionButton {
  setTimer: (value: SetStateAction<number>) => void
}

export const NextQuestionButton = ({ setTimer }: INextQuestionButton): JSX.Element => {
  const {
    currentTrivia,
    handleAnsweredIds,
    handleCurrentQuestion,
    handleSelectedAnswerId,
    handleQuestionIndex,
    selectedAnswerId,
    questionIndex,
  } = useContext(GameContext)

  const onGoToNextQuestion = () => {
    const newIndex = questionIndex + 1

    currentTrivia && handleCurrentQuestion(structuredClone(currentTrivia?.questions[newIndex]))
    handleQuestionIndex(newIndex)
    handleAnsweredIds(selectedAnswerId!)
    handleSelectedAnswerId(null)
    setTimer(5)
  }

  return (
    <Button isDisabled={!selectedAnswerId} onClick={onGoToNextQuestion}>
      {questionIndex < (currentTrivia?.questions.length || 0) - 1 ? `Siguiente` : `Ver resultados`}
    </Button>
  )
}
