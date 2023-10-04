interface IStarSVG {
  percentage: number
}

export const StarSVG = ({ percentage = 0 }: IStarSVG): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M12 2l2.4 7.2H22l-6.8 4.8 2.4 7.2L12 17.6 5.2 21l2.4-7.2L2 9.2h6.6z"
        fill="none"
        stroke="#000"
        strokeWidth="0.5"
      />
      <rect x="0" y="0" width={`${percentage}%`} height="24" fill="#FFD700" mask="url(#starMask)" />
      <mask id="starMask" x="0" y="0" width="24" height="24">
        <path
          d="M12 2l2.4 7.2H22l-6.8 4.8 2.4 7.2L12 17.6 5.2 21l2.4-7.2L2 9.2h6.6z"
          fill="white"
          stroke="#000"
          strokeWidth="0.5"
        />
      </mask>
    </svg>
  )
}
