import { Box, Button, List, ListItem, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { routes } from 'src/constants/routes'
import { IQuestion } from 'src/types'

interface ITriviaResult {
  answeredIDs: string[]
  currentTrivia: IQuestion[]
}

export const TriviaResult = ({
  answeredIDs,
  currentTrivia,
}: ITriviaResult): JSX.Element => {
  const navigate = useNavigate()

  return (
    <Box>
      <Text>{`Respuestas:`}</Text>
      <List>
        {answeredIDs.map((answeredID, i) => {
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
