import { SetStateAction, useState } from 'react'

import { Box, Progress, Text } from '@chakra-ui/react'
import { AnswerList } from 'src/feature/trivia/AnswerList'
import { NextQuestionButton } from 'src/feature/trivia/NextQuestionButton'
import { IQuestion } from 'src/types'

interface IQuestionCard {
  currentIndex: number
  setCurrentIndex: (value: SetStateAction<number>) => void
  currentTrivia: IQuestion[]
  setAnsweredIDs: (value: SetStateAction<string[]>) => void
}

export const QuestionCard = ({
  currentTrivia,
  currentIndex,
  setCurrentIndex,
  setAnsweredIDs,
}: IQuestionCard): JSX.Element => {
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion>(
    currentTrivia[0]
  )

  const [selectedAnswerID, setSelectedAnswerID] = useState('')

  return (
    <>
      <Text>{`Pregunta ${currentIndex + 1} de ${currentTrivia.length}`}</Text>
      <Box>
        <Text>{`${currentQuestion?.question}`}</Text>
        <AnswerList
          {...{
            currentQuestion,
            selectedAnswerID,
            setSelectedAnswerID,
          }}
        />
        {(currentIndex < currentTrivia.length - 1 ||
          Boolean(selectedAnswerID)) && (
          <NextQuestionButton
            {...{
              currentIndex,
              currentTrivia,
              setCurrentQuestion,
              setCurrentIndex,
              setAnsweredIDs,
              selectedAnswerID,
              setSelectedAnswerID,
            }}
          />
        )}
      </Box>
      <Progress
        min={0}
        max={currentTrivia.length}
        value={currentIndex}
        sx={{
          '& > div': { backgroundColor: 'green.300' },
        }}
      />
    </>
  )
}
