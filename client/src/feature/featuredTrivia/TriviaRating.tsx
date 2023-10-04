import { Box } from '@chakra-ui/react'
import { StarSVG } from 'src/assets/svg/common/StarSVG'
import { calculateStarPercentage } from 'src/util'

interface ITriviaRating {
  score: number
}

export const TriviaRating = ({ score }: ITriviaRating): JSX.Element => {
  const starList = Array.from({ length: 5 })

  return (
    <Box sx={{ display: 'flex', gap: '8px' }}>
      {starList.map((_, i) => {
        const percentage = calculateStarPercentage(i, score)

        return <StarSVG key={i} {...{ percentage }} />
      })}
    </Box>
  )
}
