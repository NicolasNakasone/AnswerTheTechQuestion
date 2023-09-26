interface RangeSVG {
  isDisabled: boolean
}

export const BasicSVG = ({ isDisabled }: RangeSVG): JSX.Element => {
  return (
    <svg height="16" viewBox="0 0 16 16" fill={!isDisabled ? '#6EC671' : '#E2E8F0'}>
      <rect width="4" height="8" x="0" y="8" />
      <rect width="4" height="12" x="6" y="4" />
      <rect width="4" height="16" x="12" y="0" />
    </svg>
  )
}

export const IntermediateSVG = ({ isDisabled }: RangeSVG): JSX.Element => {
  return (
    <svg height="32" viewBox="0 0 24 32" fill={!isDisabled ? '#FFA741' : '#E2E8F0'}>
      <rect width="4" height="20" x="2" y="12" />
      <rect width="4" height="24" x="8" y="8" />
      <rect width="4" height="28" x="14" y="4" />
      <rect width="4" height="32" x="20" y="0" />
    </svg>
  )
}

export const AdvancedSVG = ({ isDisabled }: RangeSVG): JSX.Element => {
  return (
    <svg height="52" viewBox="0 0 30 52" fill={!isDisabled ? '#FF7777' : '#E2E8F0'}>
      <rect width="4" height="36" x="2" y="16" />
      <rect width="4" height="40" x="8" y="12" />
      <rect width="4" height="44" x="14" y="8" />
      <rect width="4" height="48" x="20" y="4" />
      <rect width="4" height="52" x="26" y="0" />
    </svg>
  )
}
