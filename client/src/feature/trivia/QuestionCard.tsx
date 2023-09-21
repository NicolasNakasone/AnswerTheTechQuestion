import { useContext, useEffect, useState } from 'react'

import { Box, Progress, Text } from '@chakra-ui/react'
import { GameContext } from 'src/context/GameContext'
import { AnswerList } from 'src/feature/trivia/AnswerList'
import { NextQuestionButton } from 'src/feature/trivia/NextQuestionButton'

const TIMER_DEFAULT_VALUE = 5

export const QuestionCard = (): JSX.Element => {
  const {
    currentTrivia,
    currentQuestion,
    handleCurrentQuestion,
    handleSelectedAnswerId,
    selectedAnswerId,
    questionIndex,
  } = useContext(GameContext)
  const [timer, setTimer] = useState(TIMER_DEFAULT_VALUE)

  useEffect(() => {
    currentTrivia && handleCurrentQuestion(currentTrivia.questions[0])
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
      <Text>{`Pregunta ${questionIndex + 1} de ${currentTrivia?.questions.length || ''}`}</Text>
      {Boolean(timer) && <Text>{`Tiempo restante: ${timer} segundos`}</Text>}
      <Box>
        <Text>{`${currentQuestion?.question}`}</Text>
        <AnswerList />
        <NextQuestionButton {...{ setTimer }} />
      </Box>
      <Progress
        min={0}
        max={currentTrivia?.questions.length}
        value={questionIndex}
        sx={{ '& > div': { backgroundColor: 'green.300' } }}
      />
    </>
  )
}
