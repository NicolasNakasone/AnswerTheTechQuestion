import { useContext, useEffect, useState } from 'react'

import { Box, Progress, Text } from '@chakra-ui/react'
import { GameContext } from 'src/context/GameContext'
import { AnswerList } from 'src/feature/trivia/AnswerList'
import { NextQuestionButton } from 'src/feature/trivia/NextQuestionButton'
import { Trivia } from 'src/types'

interface IQuestionCard {
  currentTrivia: Trivia[]
}

const TIMER_DEFAULT_VALUE = 5

export const QuestionCard = ({ currentTrivia }: IQuestionCard): JSX.Element => {
  const {
    currentQuestion,
    handleCurrentQuestion,
    handleSelectedAnswerId,
    selectedAnswerId,
    questionIndex,
  } = useContext(GameContext)
  const [timer, setTimer] = useState(TIMER_DEFAULT_VALUE)

  useEffect(() => {
    handleCurrentQuestion(currentTrivia[0].questions[0])
  }, [])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (timer > 0 && !selectedAnswerId) {
      timeoutId = setTimeout(() => {
        setTimer(timer - 1)
      }, 1000)
    } else if (timer === 0 && !selectedAnswerId) {
      handleSelectedAnswerId(' ')
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [timer, selectedAnswerId])

  return (
    <>
      <Text>{`Pregunta ${questionIndex + 1} de ${
        currentTrivia[0].questions.length
      }`}</Text>
      {Boolean(timer) && <Text>{`Tiempo restante: ${timer} segundos`}</Text>}
      <Box>
        <Text>{`${currentQuestion?.question}`}</Text>
        <AnswerList />
        <NextQuestionButton {...{ currentTrivia, setTimer }} />
      </Box>
      <Progress
        min={0}
        max={currentTrivia[0].questions.length}
        value={questionIndex}
        sx={{
          '& > div': { backgroundColor: 'green.300' },
        }}
      />
    </>
  )
}
