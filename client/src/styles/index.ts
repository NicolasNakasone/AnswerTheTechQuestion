import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export interface Colors {
  primary: string
  primaryLight: string
  primaryDark: string
  textLight: string
  textDark: string
  backgroundLight: string
  backgroundDark: string
  disabled: string
  shadows: string
}

const colors = {
  primary: '#A991AE',
  primaryLight: '#EBB9DF',
  primaryDark: '#4D3B56',
  textLight: '#F8F4E3',
  textDark: '#330C2F',
  backgroundLight: '#F6F3F6',
  backgroundDark: '#2D232F',
  disabled: '#EDE8EE',
  shadows: '#67697C',
}

export const theme = extendTheme({
  fonts: {
    body: 'Kanit, Montserrat, sans-serif',
    colors,
  },
  styles: {
    global: (props: any) => ({
      body: {
        color: mode(colors.textDark, colors.textLight)(props),
        bg: mode(colors.backgroundLight, colors.backgroundDark)(props),
      },
    }),
  },
})
