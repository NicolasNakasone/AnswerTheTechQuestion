import { Badge, Box, Button, Text } from '@chakra-ui/react'
import { AdvancedSVG, BasicSVG, IntermediateSVG } from 'src/assets/svg/common/RangeSVG'
import { shuffledTrivia } from 'src/mocks/trivias.mock'
import { Trivia, UserLevel } from 'src/types'

export const FeaturedTriviaPage = (): JSX.Element => {
  return (
    <MainContainer>
      {shuffledTrivia.map(trivia => {
        return <TriviaCard key={trivia.id} trivia={trivia} />
      })}
    </MainContainer>
  )
}

const TriviaCard = ({ trivia }: { trivia: Trivia }): JSX.Element => {
  return (
    <Box
      key={trivia.id}
      sx={{
        minWidth: '50%',
        padding: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '96px',
        borderWidth: 1,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Text>{trivia.title}</Text>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {trivia.categories.map(category => {
            return (
              <Badge
                key={category.id}
                background={category.bg_color}
                textColor={category.text_color}
              >
                {category.label}
              </Badge>
            )
          })}
        </Box>
        <Text sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {`Creada por: `}
          {/* Reemplazar por imagen del usuario */}
          <span
            style={{
              width: '36px',
              height: '36px',
              backgroundColor: '#E2E8F0',
              borderRadius: '50%',
            }}
          />
        </Text>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Button>{`Jugar`}</Button>
        <RangeWrapper levels={trivia.levels} />
      </Box>
    </Box>
  )
}

const MainContainer = ({ children }: { children: JSX.Element[] }): JSX.Element => {
  return (
    <Box
      sx={{
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        borderWidth: 1,
      }}
    >
      {children}
    </Box>
  )
}

type LevelDisable = {
  [level in UserLevel]: boolean
}

const RangeWrapper = ({ levels }: { levels: UserLevel[] }): JSX.Element => {
  const isLevelDisabled: LevelDisable = {
    [UserLevel.BASIC]: !levels.find(level => level === UserLevel.BASIC),
    [UserLevel.INTERMEDIATE]: !levels.find(level => level === UserLevel.INTERMEDIATE),
    [UserLevel.ADVANCED]: !levels.find(level => level === UserLevel.ADVANCED),
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <BasicSVG isDisabled={isLevelDisabled.BASIC} />
      <IntermediateSVG isDisabled={isLevelDisabled.INTERMEDIATE} />
      <AdvancedSVG isDisabled={isLevelDisabled.ADVANCED} />
    </Box>
  )
}
