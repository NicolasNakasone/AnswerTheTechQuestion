import { useState } from 'react'

import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { QuestionCard } from 'src/feature/trivia/QuestionCard'
import { TriviaResult } from 'src/feature/trivia/TriviaResult'
import { shuffledTrivia } from 'src/mocks/trivias.mock'

export const Trivia = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const [answeredIDs, setAnsweredIDs] = useState<string[]>([])

  return (
    <MainWrapper>
      {currentIndex !== shuffledTrivia.length ? (
        <QuestionCard
          {...{
            currentIndex,
            currentTrivia: shuffledTrivia,
            setCurrentIndex,
            setAnsweredIDs,
          }}
        />
      ) : (
        <TriviaResult {...{ answeredIDs, currentTrivia: shuffledTrivia }} />
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
