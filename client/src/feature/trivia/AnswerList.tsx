import { useContext } from 'react'

import { Box, Button } from '@chakra-ui/react'
import { GameContext } from 'src/context/GameContext'

export const AnswerList = (): JSX.Element => {
  const { currentQuestion, handleSelectedAnswerId, selectedAnswerId } =
    useContext(GameContext)

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
            key={answer.option_id}
            isDisabled={Boolean(selectedAnswerId)}
            sx={{
              backgroundColor:
                selectedAnswerId === answer.option_id
                  ? answer.is_correct
                    ? 'green.100 !important'
                    : 'red.100 !important'
                  : '',
              opacity:
                !selectedAnswerId || selectedAnswerId === answer.option_id
                  ? `1 !important`
                  : 0.4,
            }}
            onClick={() => {
              handleSelectedAnswerId(answer.option_id)
            }}
          >
            {answer?.option}
          </Button>
        )
      })}
    </Box>
  )
}
