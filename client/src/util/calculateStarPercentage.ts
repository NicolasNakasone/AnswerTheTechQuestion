export const calculateStarPercentage = (index: number, score: number): number => {
  let percentage = 0

  const roundedScore = Math.ceil(score)
  const currentIndex = index + 1

  if (!roundedScore) return percentage

  if (currentIndex < roundedScore) {
    percentage = 100
  } else if (currentIndex === roundedScore) {
    const decimalPart = score % 1
    percentage = decimalPart ? Math.round(decimalPart * 100) : 100
  }

  return percentage
}
