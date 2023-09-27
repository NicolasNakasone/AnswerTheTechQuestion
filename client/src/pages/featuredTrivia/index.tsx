import { Box, Button, Text } from '@chakra-ui/react'
import { ListCategories, TriviaRank } from 'src/feature/featuredTrivia'
import { shuffledTrivia } from 'src/mocks/trivias.mock'
import { Trivia } from 'src/types'

export const FeaturedTriviaPage = (): JSX.Element => {
  return (
    <MainContainer>
      {shuffledTrivia.map(trivia => {
        return <TriviaCard key={trivia.id} trivia={trivia} />
      })}
    </MainContainer>
  )
}

const TriviaCard = ({ trivia }: { trivia: Trivia }): JSX.Element => {
  return (
    <CardWrapper>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Text>{trivia.title}</Text>
        <ListCategories categories={trivia.categories} />
        <Text sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {`Creada por: `}
          {/* Reemplazar por imagen del usuario */}
          <span
            style={{
              width: '36px',
              height: '36px',
              backgroundColor: '#E2E8F0',
              borderRadius: '50%',
            }}
          />
        </Text>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Button>{`Jugar`}</Button>
        <TriviaRank levels={trivia.levels} />
      </Box>
    </CardWrapper>
  )
}

const MainContainer = ({ children }: { children: JSX.Element[] }): JSX.Element => {
  return (
    <Box
      sx={{
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        borderWidth: 1,
      }}
    >
      {children}
    </Box>
  )
}

const CardWrapper = ({ children }: { children: JSX.Element[] }): JSX.Element => {
  return (
    <Box
      sx={{
        minWidth: '50%',
        padding: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '96px',
        borderWidth: 1,
      }}
    >
      {children}
    </Box>
  )
}
