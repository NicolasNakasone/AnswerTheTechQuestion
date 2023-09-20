import { SetStateAction, useContext } from 'react'

import { Button } from '@chakra-ui/react'
import { GameContext } from 'src/context/GameContext'
import { Trivia } from 'src/types'

interface INextQuestionButton {
  currentTrivia: Trivia[]
  setTimer: (value: SetStateAction<number>) => void
}

export const NextQuestionButton = ({
  currentTrivia,
  setTimer,
}: INextQuestionButton): JSX.Element => {
  const {
    handleAnsweredIds,
    handleCurrentQuestion,
    handleSelectedAnswerId,
    handleQuestionIndex,
    selectedAnswerId,
    questionIndex,
  } = useContext(GameContext)

  const onGoToNextQuestion = () => {
    const newIndex = questionIndex + 1

    handleCurrentQuestion(structuredClone(currentTrivia[0].questions[newIndex]))
    handleQuestionIndex(newIndex)
    handleAnsweredIds(selectedAnswerId!)
    handleSelectedAnswerId(null)
    setTimer(5)
  }

  return (
    <Button isDisabled={!selectedAnswerId} onClick={onGoToNextQuestion}>
      {questionIndex < currentTrivia[0].questions.length - 1
        ? `Siguiente`
        : `Ver resultados`}
    </Button>
  )
}
