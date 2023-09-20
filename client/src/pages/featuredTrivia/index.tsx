import { Box } from '@chakra-ui/react'
import { shuffledTrivia } from 'src/mocks/trivias.mock'

export const FeaturedTriviaPage = (): JSX.Element => {
  return (
    <Box>
      {shuffledTrivia.map(trivia => {
        return <Box key={trivia.id}>{`${trivia.title} - ${trivia.id}`}</Box>
      })}
    </Box>
  )
}
