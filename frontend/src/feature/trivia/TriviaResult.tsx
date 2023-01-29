import { Box, List, ListItem, Text } from '@chakra-ui/react'
import { IQuestion } from 'src/types'

interface ITriviaResult {
  answeredIDs: string[]
  currentTrivia: IQuestion[]
}

export const TriviaResult = ({
  answeredIDs,
  currentTrivia,
}: ITriviaResult): JSX.Element => {
  return (
    <Box>
      <Text>{`Respuestas:`}</Text>
      <List>
        {answeredIDs.map((answeredID, i) => {
          const isCorrect = currentTrivia[i].correctID === answeredID
          return (
            <ListItem key={answeredID}>
              {`${currentTrivia[i].question} ${
                isCorrect ? `Correcta` : `Incorrecta`
              }`}
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}
