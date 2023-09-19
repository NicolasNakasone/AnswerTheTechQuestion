import { useContext } from 'react'

import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { GameContext } from 'src/context/GameContext'
import { QuestionCard } from 'src/feature/trivia/QuestionCard'
import { TriviaResult } from 'src/feature/trivia/TriviaResult'
import { shuffledTrivia } from 'src/mocks/trivias.mock'

export const Trivia = () => {
  const { questionIndex } = useContext(GameContext)

  return (
    <MainWrapper>
      {questionIndex !== shuffledTrivia.length ? (
        <QuestionCard
          {...{
            currentTrivia: shuffledTrivia,
          }}
        />
      ) : (
        <TriviaResult {...{ currentTrivia: shuffledTrivia }} />
      )}
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
