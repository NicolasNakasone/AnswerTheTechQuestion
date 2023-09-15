import { SetStateAction } from 'react'

import { Button } from '@chakra-ui/react'
import { IQuestion } from 'src/types'

interface INextQuestionButton {
  currentIndex: number
  currentTrivia: IQuestion[]
  setCurrentQuestion: (value: SetStateAction<IQuestion>) => void
  setCurrentIndex: (value: SetStateAction<number>) => void
  setAnsweredIDs: (value: SetStateAction<string[]>) => void
  selectedAnswerID: string | boolean
  setSelectedAnswerID: (value: SetStateAction<string | boolean>) => void
  setTimer: (value: SetStateAction<number>) => void
}

export const NextQuestionButton = ({
  currentIndex,
  currentTrivia,
  setCurrentQuestion,
  setCurrentIndex,
  setAnsweredIDs,
  selectedAnswerID,
  setSelectedAnswerID,
  setTimer,
}: INextQuestionButton): JSX.Element => {
  return (
    <Button
      isDisabled={!selectedAnswerID}
      onClick={() => {
        const newIndex = currentIndex + 1

        setCurrentQuestion(structuredClone(currentTrivia[newIndex]))
        setCurrentIndex(newIndex)
        setAnsweredIDs(prev =>
          structuredClone(
            prev.concat(
              typeof selectedAnswerID === 'string' ? selectedAnswerID : ''
            )
          )
        )
        setSelectedAnswerID(false)
        setTimer(5)
      }}
    >
      {currentIndex < currentTrivia.length - 1 ? `Siguiente` : `Ver resultados`}
    </Button>
  )
}
