import { Answer, Category, Question, Trivia, UserLevel } from 'src/types'
import { v4 as uuidv4 } from 'uuid'

const mockAnswers: Answer[] = [
  { option: 'Document Object Model', option_id: uuidv4(), is_correct: true },
  { option: 'Document Oriented Model', option_id: uuidv4(), is_correct: false },
  { option: 'Document Object Module', option_id: uuidv4(), is_correct: false },
  { option: 'Document Oriented Module', option_id: uuidv4(), is_correct: false },
]

const mockAnswers2: Answer[] = [
  { option: 'true', option_id: uuidv4(), is_correct: true },
  { option: 'false', option_id: uuidv4(), is_correct: false },
  { option: '1', option_id: uuidv4(), is_correct: false },
  { option: '"1"', option_id: uuidv4(), is_correct: false },
]

const mockAnswers3: Answer[] = [
  { option: '"33"', option_id: uuidv4(), is_correct: true },
  { option: '6', option_id: uuidv4(), is_correct: false },
  { option: 'NaN', option_id: uuidv4(), is_correct: false },
  { option: '0', option_id: uuidv4(), is_correct: false },
]

const mockQuestion: Question = {
  question: '¿Qué significa DOM en JavaScript?',
  question_id: uuidv4(),
  answers: mockAnswers,
  correct_id: mockAnswers[0].option_id,
}

const mockQuestion2: Question = {
  question: '¿Qué retorna la siguiente expresión de JavaScript? 1 == "1"',
  question_id: uuidv4(),
  answers: mockAnswers2,
  correct_id: mockAnswers2[0].option_id,
}

const mockQuestion3: Question = {
  question: '¿Cuál es el resultado de esta expresión? 3 + "3"',
  question_id: uuidv4(),
  answers: mockAnswers3,
  correct_id: mockAnswers3[0].option_id,
}

const mockQuestionList: Question[] = [mockQuestion, mockQuestion2, mockQuestion3]

const mockTrivia: Trivia[] = [
  {
    id: uuidv4(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    title: 'Preguntas de JavaScript',
    description: 'Algunas preguntas de JavaScript',
    user_id: uuidv4(),
    categories: [Category.JAVASCRIPT],
    levels: [UserLevel.BASIC],
    questions: mockQuestionList,
    total_votes: 5000,
  },
  {
    id: uuidv4(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    title: 'Preguntas de JavaScript',
    description: 'Algunas preguntas de JavaScript',
    user_id: uuidv4(),
    categories: [Category.JAVASCRIPT],
    levels: [UserLevel.BASIC],
    questions: mockQuestionList,
    total_votes: 5000,
  },
  {
    id: uuidv4(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    title: 'Preguntas de JavaScript',
    description: 'Algunas preguntas de JavaScript',
    user_id: uuidv4(),
    categories: [Category.JAVASCRIPT],
    levels: [UserLevel.BASIC],
    questions: mockQuestionList,
    total_votes: 5000,
  },
]

const shuffleAnswers = (trivia: Trivia[]): Trivia[] => {
  const shuffledTrivia = Array.from(trivia)

  shuffledTrivia.forEach(({ questions }) => {
    questions.forEach(({ answers }) => {
      const shuffledIndexes = Array.from({ length: answers.length }, (_, i) => i)

      for (let i = shuffledIndexes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffledIndexes[i], shuffledIndexes[j]] = [shuffledIndexes[j], shuffledIndexes[i]]
      }

      const optionIdToShuffledIndex: { [key: string]: number } = {}

      shuffledIndexes.forEach((index, shuffledIndex) => {
        const option_id = answers[index].option_id
        optionIdToShuffledIndex[option_id] = shuffledIndex
      })

      answers.sort(
        (a, b) => optionIdToShuffledIndex[a.option_id] - optionIdToShuffledIndex[b.option_id]
      )
    })
  })

  return shuffledTrivia
}

export const shuffledTrivia = shuffleAnswers(mockTrivia)
