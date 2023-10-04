import { Colors } from 'src/styles'

type ThemeColors = keyof Colors

export const useThemeColors = (color: ThemeColors) => {
  return `var(--chakra-fonts-colors-${color})`
}
