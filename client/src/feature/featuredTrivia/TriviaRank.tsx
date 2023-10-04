import { Box } from '@chakra-ui/react'
import { AdvancedSVG, BasicSVG, IntermediateSVG } from 'src/assets/svg/common/RankSVG'
import { UserLevel } from 'src/types'

interface ITriviaRank {
  levels: UserLevel[]
}

type LevelDisableKeys = {
  [level in UserLevel]: boolean
}

export const TriviaRank = ({ levels }: ITriviaRank): JSX.Element => {
  const isLevelDisabled: LevelDisableKeys = {
    [UserLevel.BASIC]: !levels.find(level => level === UserLevel.BASIC),
    [UserLevel.INTERMEDIATE]: !levels.find(level => level === UserLevel.INTERMEDIATE),
    [UserLevel.ADVANCED]: !levels.find(level => level === UserLevel.ADVANCED),
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}
    >
      <BasicSVG isDisabled={isLevelDisabled.BASIC} />
      <IntermediateSVG isDisabled={isLevelDisabled.INTERMEDIATE} />
      <AdvancedSVG isDisabled={isLevelDisabled.ADVANCED} />
    </Box>
  )
}
