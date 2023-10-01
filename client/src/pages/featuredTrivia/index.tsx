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
        <Text sx={{ fontSize: '24px', fontWeight: '600' }}>{trivia.title}</Text>
        <ListCategories categories={trivia.categories} />
        <Text
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '18px',
            fontWeight: '500',
          }}
        >
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
        <Button sx={{ paddingX: '24px', fontSize: '18px' }}>{`¡Jugar!`}</Button>
        <Text
          sx={{ fontSize: '18px', textAlign: 'right', fontWeight: '500' }}
        >{`${trivia.questions.length} preguntas`}</Text>
        <TriviaRank levels={trivia.levels} />
      </Box>
    </CardWrapper>
  )
}

const MainContainer = ({ children }: { children: JSX.Element[] }): JSX.Element => {
  return (
    <Box
      sx={{
        paddingY: '24px',
        paddingX: '20%',
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
        width: '100%',
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
