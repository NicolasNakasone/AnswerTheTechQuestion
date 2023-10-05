import { Box, Button, Text, useColorMode } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { routes } from 'src/constants/routes'
import { useThemeColors } from 'src/util'

export const Navbar = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      sx={{
        minHeight: '80px',
        padding: '16px',
        backgroundColor: useThemeColors('primaryDark'),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Link to={routes.home}>
        <Text
          sx={{
            fontSize: '24px',
            fontWeight: '700',
            fontStyle: 'italic',
            color: useThemeColors('textLight'),
            letterSpacing: '-0.025em',
          }}
        >
          AnswerTheTechQuestion
        </Text>
      </Link>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}
      >
        <NavLink route={routes.trivia}>Jugar</NavLink>
        <NavLink route={'#'}>Crear trivia</NavLink>
        <NavLink route={routes.featuredTrivia}>Trivias destacadas</NavLink>
        <Button onClick={toggleColorMode}>{`Tema ${
          colorMode === 'light' ? 'oscuro' : 'claro'
        }`}</Button>
        <Box
          sx={{
            width: '60px',
            height: '60px',
          }}
        >
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocKPDxoUYAZTRSNiu-6UUzp6qq0rm1uQUH7PrlbAn1P3Vpk=s576-c-no"
            alt="Profile picture"
            style={{ borderRadius: '4px' }}
          />
        </Box>
      </Box>
    </Box>
  )
}

interface INavLink {
  children: string
  route: string
}

const NavLink = ({ children, route }: INavLink): JSX.Element => {
  return (
    <Link
      to={route}
      style={{
        padding: '4px 12px',
        fontWeight: '700',
        color: useThemeColors('textLight'),
      }}
    >
      {children}
    </Link>
  )
}
