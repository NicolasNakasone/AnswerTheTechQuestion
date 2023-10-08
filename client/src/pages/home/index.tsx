import { Button, Stack, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { routes } from 'src/constants/routes'

export const HomePage = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <Stack
      sx={{
        padding: '10% 4%',
        textAlign: 'center',
        gap: '32px',
      }}
    >
      <Text>
        {`La aplicación que te permitirá aumentar tus habilidades técnicas de
        manera entretenida`}
      </Text>
      <Button onClick={() => navigate(routes.featuredTrivia)}>{`Trivias destacadas`}</Button>
      <Button onClick={() => navigate(routes.trivia)}>{`Ir a trivia de prueba`}</Button>
    </Stack>
  )
}
