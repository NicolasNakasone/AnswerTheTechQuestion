import { SetStateAction, useContext } from 'react'

import { Box, Button } from '@chakra-ui/react'
import { GameContext } from 'src/context/GameContext'

interface IAnswerList {
  selectedAnswerID: string | boolean
  setSelectedAnswerID: (value: SetStateAction<string | boolean>) => void
}

export const AnswerList = ({
  selectedAnswerID,
  setSelectedAnswerID,
}: IAnswerList): JSX.Element => {
  const { currentQuestion } = useContext(GameContext)

  return (
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
            isDisabled={Boolean(selectedAnswerID)}
            sx={{
              backgroundColor:
                selectedAnswerID === answer.optionID
                  ? answer.isCorrect
                    ? 'green.100 !important'
                    : 'red.100 !important'
                  : '',
              opacity:
                !selectedAnswerID || selectedAnswerID === answer.optionID
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
    </Box>
  )
}
