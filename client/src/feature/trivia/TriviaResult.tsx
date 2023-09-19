import { useContext } from 'react'

import { Box, Button, List, ListItem, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { routes } from 'src/constants/routes'
import { GameContext } from 'src/context/GameContext'
import { IQuestion } from 'src/types'

interface ITriviaResult {
  currentTrivia: IQuestion[]
}

export const TriviaResult = ({ currentTrivia }: ITriviaResult): JSX.Element => {
  const { answeredIds } = useContext(GameContext)
  const navigate = useNavigate()

  return (
    <Box>
      <Text>{`Respuestas:`}</Text>
      <List>
        {answeredIds.map((answeredID, i) => {
          const isCorrect = currentTrivia[i].correctID === answeredID
          return (
            <ListItem key={`${answeredID}${i}`}>
              {`${currentTrivia[i].question} ${
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
