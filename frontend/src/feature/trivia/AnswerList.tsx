import { SetStateAction } from 'react'

import { Box, Button } from '@chakra-ui/react'
import { IQuestion } from 'src/types'

interface IAnswerList {
  currentQuestion: IQuestion
  selectedAnswerID: string
  setSelectedAnswerID: (value: SetStateAction<string>) => void
}

export const AnswerList = ({
  currentQuestion,
  selectedAnswerID,
  setSelectedAnswerID,
}: IAnswerList): JSX.Element => {
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
            disabled={Boolean(selectedAnswerID)}
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
