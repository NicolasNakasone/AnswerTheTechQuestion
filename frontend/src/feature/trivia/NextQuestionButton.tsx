import { SetStateAction } from 'react'

import { Button } from '@chakra-ui/react'
import { IQuestion } from 'src/types'

interface INextQuestionButton {
  currentIndex: number
  currentTrivia: IQuestion[]
  setCurrentQuestion: (value: SetStateAction<IQuestion>) => void
  setCurrentIndex: (value: SetStateAction<number>) => void
  setAnsweredIDs: (value: SetStateAction<string[]>) => void
  selectedAnswerID: string
  setSelectedAnswerID: (value: SetStateAction<string>) => void
}

export const NextQuestionButton = ({
  currentIndex,
  currentTrivia,
  setCurrentQuestion,
  setCurrentIndex,
  setAnsweredIDs,
  selectedAnswerID,
  setSelectedAnswerID,
}: INextQuestionButton): JSX.Element => {
  return (
    <Button
      disabled={!selectedAnswerID}
      onClick={() => {
        const newIndex = currentIndex + 1

        setCurrentQuestion(structuredClone(currentTrivia[newIndex]))
        setCurrentIndex(newIndex)
        setSelectedAnswerID('')
        setAnsweredIDs(prev => structuredClone(prev.concat(selectedAnswerID)))
      }}
    >
      {currentIndex < currentTrivia.length - 1 ? `Siguiente` : `Ver resultados`}
    </Button>
  )
}
