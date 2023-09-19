import { useContext, useEffect, useState } from 'react'

import { Box, Progress, Text } from '@chakra-ui/react'
import { GameContext } from 'src/context/GameContext'
import { AnswerList } from 'src/feature/trivia/AnswerList'
import { NextQuestionButton } from 'src/feature/trivia/NextQuestionButton'
import { IQuestion } from 'src/types'

interface IQuestionCard {
  currentTrivia: IQuestion[]
}

const TIMER_DEFAULT_VALUE = 5

export const QuestionCard = ({ currentTrivia }: IQuestionCard): JSX.Element => {
  const { questionIndex } = useContext(GameContext)
  const [timer, setTimer] = useState(TIMER_DEFAULT_VALUE)

  const [currentQuestion, setCurrentQuestion] = useState<IQuestion>(
    currentTrivia[0]
  )

  const [selectedAnswerID, setSelectedAnswerID] = useState<string | boolean>(
    false
  )

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (timer > 0 && !selectedAnswerID) {
      timeoutId = setTimeout(() => {
        setTimer(timer - 1)
      }, 1000)
    } else if (timer === 0 && !selectedAnswerID) {
      setSelectedAnswerID(true)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [timer, selectedAnswerID])

  return (
    <>
      <Text>{`Pregunta ${questionIndex + 1} de ${currentTrivia.length}`}</Text>
      {Boolean(timer) && <Text>{`Tiempo restante: ${timer} segundos`}</Text>}
      <Box>
        <Text>{`${currentQuestion?.question}`}</Text>
        <AnswerList
          {...{
            currentQuestion,
            selectedAnswerID,
            setSelectedAnswerID,
          }}
        />
        <NextQuestionButton
          {...{
            currentTrivia,
            setCurrentQuestion,
            selectedAnswerID,
            setSelectedAnswerID,
            setTimer,
          }}
        />
      </Box>
      <Progress
        min={0}
        max={currentTrivia.length}
        value={questionIndex}
        sx={{
          '& > div': { backgroundColor: 'green.300' },
        }}
      />
    </>
  )
}
