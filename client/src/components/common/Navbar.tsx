import { Box, Button, Text, useColorMode } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
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
        justifyContent: 'center',
        alignItems: 'center',
        gap: '128px',
        position: 'sticky',
        top: '0',
        zIndex: '10',
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
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}
      >
        <NavLink route={routes.home}>Inicio</NavLink>
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
            margin: '0 24px',
            flexShrink: 0,
          }}
        >
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocKPDxoUYAZTRSNiu-6UUzp6qq0rm1uQUH7PrlbAn1P3Vpk=s576-c-no"
            alt="Profile picture"
            style={{ width: '100%', height: '100%', borderRadius: '4px' }}
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
  const { pathname } = useLocation()

  return (
    <Link
      to={route}
      style={{
        width: 'max-content',
        padding: '4px 12px',
        fontSize: '14px',
        fontWeight: '700',
        textAlign: 'center',
        backgroundColor: pathname === route ? useThemeColors('primary') : '',
        borderRadius: '4px',
        color: useThemeColors('textLight'),
      }}
    >
      {children}
    </Link>
  )
}
