import { useContext } from 'react'

import { Box, Button, List, ListItem, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { routes } from 'src/constants/routes'
import { GameContext } from 'src/context/GameContext'

export const TriviaResult = (): JSX.Element => {
  const { answeredIds, currentTrivia } = useContext(GameContext)
  const navigate = useNavigate()

  return (
    <Box>
      <Text>{`Respuestas:`}</Text>
      <List>
        {answeredIds.map((answeredId, i) => {
          const isCorrect = currentTrivia?.questions[i].correct_id === answeredId
          return (
            <ListItem key={`${answeredId}${i}`}>
              {`${currentTrivia?.questions[i].question || ''} ${
                isCorrect ? `Correcta` : `Incorrecta`
              }`}
            </ListItem>
          )
        })}
      </List>
      <Button onClick={() => navigate(routes.featuredTrivia)}>Volver a la lista de trivias</Button>
    </Box>
  )
}
