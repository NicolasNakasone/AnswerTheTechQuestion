import { useContext } from 'react'

import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { GameContext } from 'src/context/GameContext'
import { QuestionCard } from 'src/feature/trivia/QuestionCard'
import { TriviaResult } from 'src/feature/trivia/TriviaResult'

export const TriviaPage = () => {
  const { currentTrivia, questionIndex } = useContext(GameContext)

  if (!currentTrivia) {
    return <div />
  }

  return (
    <MainWrapper>
      {questionIndex !== currentTrivia.questions.length ? <QuestionCard /> : <TriviaResult />}
    </MainWrapper>
  )
}

const MainWrapper = styled(Box)({
  width: `max-content`,
  height: `100vh`,
  margin: `0 auto`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
})
