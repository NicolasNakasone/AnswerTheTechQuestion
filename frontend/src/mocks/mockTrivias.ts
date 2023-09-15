import { IAnswer, IQuestion } from 'src/types'
import { v4 as uuidv4 } from 'uuid'

const mockAnswers: IAnswer[] = [
  { option: 'Document Object Model', optionID: uuidv4(), isCorrect: true },
  { option: 'Document Oriented Model', optionID: uuidv4(), isCorrect: false },
  { option: 'Document Object Module', optionID: uuidv4(), isCorrect: false },
  { option: 'Document Oriented Module', optionID: uuidv4(), isCorrect: false },
]

const mockAnswers2: IAnswer[] = [
  { option: 'true', optionID: uuidv4(), isCorrect: true },
  { option: 'false', optionID: uuidv4(), isCorrect: false },
  { option: '1', optionID: uuidv4(), isCorrect: false },
  {
    option: '"1"',
    optionID: uuidv4(),
    isCorrect: false,
  },
]

const mockAnswers3: IAnswer[] = [
  { option: '"33"', optionID: uuidv4(), isCorrect: true },
  { option: '6', optionID: uuidv4(), isCorrect: false },
  { option: 'NaN', optionID: uuidv4(), isCorrect: false },
  {
    option: '0',
    optionID: uuidv4(),
    isCorrect: false,
  },
]

const mockQuestion: IQuestion = {
  question: '¿Qué significa DOM en JavaScript?',
  questionID: uuidv4(),
  answers: mockAnswers,
  correctID: mockAnswers[0].optionID,
}

const mockQuestion2: IQuestion = {
  question: '¿Qué retorna la siguiente expresión de JavaScript? 1 == "1"',
  questionID: uuidv4(),
  answers: mockAnswers2,
  correctID: mockAnswers2[0].optionID,
}

const mockQuestion3: IQuestion = {
  question: '¿Cuál es el resultado de esta expresión? 3 + "3"',
  questionID: uuidv4(),
  answers: mockAnswers3,
  correctID: mockAnswers3[0].optionID,
}

const mockTrivia: IQuestion[] = [mockQuestion, mockQuestion2, mockQuestion3]

const shuffleAnswers = (trivia: IQuestion[]): IQuestion[] => {
  const shuffledTrivia = Array.from(trivia)

  shuffledTrivia.forEach(({ answers }) => {
    const shuffledIndexes = Array.from({ length: answers.length }, (_, i) => i)

    for (let i = shuffledIndexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledIndexes[i], shuffledIndexes[j]] = [
        shuffledIndexes[j],
        shuffledIndexes[i],
      ]
    }

    const optionIdToShuffledIndex: { [key: string]: number } = {}

    shuffledIndexes.forEach((index, shuffledIndex) => {
      const optionID = answers[index].optionID
      optionIdToShuffledIndex[optionID] = shuffledIndex
    })

    answers.sort(
      (a, b) =>
        optionIdToShuffledIndex[a.optionID] -
        optionIdToShuffledIndex[b.optionID]
    )
  })

  return shuffledTrivia
}

export const shuffledTrivia = shuffleAnswers(mockTrivia)
