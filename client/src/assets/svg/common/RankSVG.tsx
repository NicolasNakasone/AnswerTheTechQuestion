interface RankSVG {
  isDisabled: boolean
}

export const BasicSVG = ({ isDisabled }: RankSVG): JSX.Element => {
  return (
    <svg height="16" viewBox="0 0 16 16" fill={!isDisabled ? '#6EC671' : '#E2E8F0'}>
      <rect width="4" height="8" x="0" y="8" />
      <rect width="4" height="12" x="6" y="4" />
      <rect width="4" height="16" x="12" y="0" />
    </svg>
  )
}

export const IntermediateSVG = ({ isDisabled }: RankSVG): JSX.Element => {
  return (
    <svg height="28" viewBox="0 0 18 28" fill={!isDisabled ? '#FFA741' : '#E2E8F0'}>
      <rect width="4" height="20" x="2" y="8" />
      <rect width="4" height="24" x="8" y="4" />
      <rect width="4" height="28" x="14" y="0" />
    </svg>
  )
}

export const AdvancedSVG = ({ isDisabled }: RankSVG): JSX.Element => {
  return (
    <svg height="40" viewBox="0 0 18 40" fill={!isDisabled ? '#FF7777' : '#E2E8F0'}>
      <rect width="4" height="32" x="2" y="8" />
      <rect width="4" height="36" x="8" y="4" />
      <rect width="4" height="40" x="14" y="0" />
    </svg>
  )
}
