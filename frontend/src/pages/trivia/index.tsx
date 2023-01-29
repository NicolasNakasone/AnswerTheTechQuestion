import { useState } from 'react'

import { Box, Button, List, ListItem, Progress, Text } from '@chakra-ui/react'
import { shuffledTrivia } from 'src/mocks/mockTrivias'
import { IQuestion } from 'src/types'

export const Trivia = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion>(
    shuffledTrivia[0]
  )

  const [selectedAnswerID, setSelectedAnswerID] = useState('')

  const [answeredIDs, setAnsweredIDs] = useState([])

  return (
    <Box
      sx={{
        width: `max-content`,
        height: `100vh`,
        margin: `0 auto`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {currentIndex !== shuffledTrivia.length ? (
        <>
          <Text>{`Pregunta ${currentIndex + 1} de ${
            shuffledTrivia.length
          }`}</Text>
          <Box key={currentQuestion?.questionID}>
            <Text>{`${currentQuestion?.question}`}</Text>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {currentQuestion?.answers.map(answer => {
                return (
                  <Button
                    key={answer.optionID}
                    disabled={Boolean(selectedAnswerID)}
                    sx={{
                      backgroundColor:
                        selectedAnswerID === answer.optionID
                          ? answer.isCorrect
                            ? 'green.100 !important'
                            : 'red.100 !important'
                          : '',
                      opacity:
                        !selectedAnswerID ||
                        selectedAnswerID === answer.optionID
                          ? `1 !important`
                          : 0.4,
                    }}
                    onClick={() => {
                      setSelectedAnswerID(answer.optionID)
                    }}
                  >
                    {answer?.option}
                  </Button>
                )
              })}
              {(currentIndex < shuffledTrivia.length - 1 ||
                Boolean(selectedAnswerID)) && (
                <Button
                  disabled={!selectedAnswerID}
                  onClick={() => {
                    const newIndex = currentIndex + 1

                    setCurrentQuestion(
                      structuredClone(shuffledTrivia[newIndex])
                    )
                    setCurrentIndex(newIndex)
                    setSelectedAnswerID('')
                    setAnsweredIDs(prev =>
                      structuredClone(prev.concat(selectedAnswerID))
                    )
                  }}
                >
                  {currentIndex < shuffledTrivia.length - 1
                    ? `Siguiente`
                    : `Ver resultados`}
                </Button>
              )}
            </Box>
          </Box>
          <Progress
            min={0}
            max={shuffledTrivia.length}
            value={currentIndex}
            sx={{
              '& > div': { backgroundColor: 'green.300' },
            }}
          />
        </>
      ) : (
        <Box>
          <Text>{`Respuestas:`}</Text>
          <List>
            {answeredIDs.map((answeredID, i) => {
              const isCorrect = shuffledTrivia[i].correctID === answeredID
              return (
                <ListItem key={answeredID}>
                  {`${shuffledTrivia[i].question} ${
                    isCorrect ? `Correcta` : `Incorrecta`
                  }`}
                </ListItem>
              )
            })}
          </List>
        </Box>
      )}
    </Box>
  )
}
