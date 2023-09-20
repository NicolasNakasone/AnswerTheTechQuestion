import { useContext } from 'react'

import { Box, Button, List, ListItem, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { routes } from 'src/constants/routes'
import { GameContext } from 'src/context/GameContext'
import { Trivia } from 'src/types'

interface ITriviaResult {
  currentTrivia: Trivia[]
}

export const TriviaResult = ({ currentTrivia }: ITriviaResult): JSX.Element => {
  const { answeredIds } = useContext(GameContext)
  const navigate = useNavigate()

  return (
    <Box>
      <Text>{`Respuestas:`}</Text>
      <List>
        {answeredIds.map((answeredId, i) => {
          const isCorrect =
            currentTrivia[0].questions[i].correct_id === answeredId
          return (
            <ListItem key={`${answeredId}${i}`}>
              {`${currentTrivia[0].questions[i].question} ${
                isCorrect ? `Correcta` : `Incorrecta`
              }`}
            </ListItem>
          )
        })}
      </List>
      <Button onClick={() => navigate(routes.home)}>
        Volver a la lista de trivias
      </Button>
    </Box>
  )
}
