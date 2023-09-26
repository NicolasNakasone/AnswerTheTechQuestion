import { mockCategory } from 'src/mocks/common.mock'
import { Answer, Question, Trivia, UserLevel } from 'src/types'
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
    title: 'Fundamentos de React - I',
    description: 'Una serie de trivias de React, con las mejores preguntas de la libreria ReactJS',
    user: { id: uuidv4(), full_name: 'Nicolás Nakasone', profile_image: '' },
    categories: [mockCategory.REACT],
    levels: [UserLevel.BASIC],
    questions: mockQuestionList,
    average_score: 4.75,
    total_votes: 2000,
  },
  {
    id: uuidv4(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    title: 'Preguntas de JavaScript / TypeScript',
    description: 'Algunas preguntas de JavaScript y TypeScript',
    user: { id: uuidv4(), full_name: 'Nicolás Nakasone', profile_image: '' },
    categories: [mockCategory.JAVASCRIPT, mockCategory.TYPESCRIPT],
    levels: [UserLevel.BASIC, UserLevel.ADVANCED],
    questions: mockQuestionList,
    average_score: 3.17,
    total_votes: 510,
  },
  {
    id: uuidv4(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    title: 'Preguntas de Frontend (HTML, CSS, JS)',
    description: 'Preguntas de Frontend, que abarcan todo tipo conceptos de HTML, CSS y JavaScript',
    user: { id: uuidv4(), full_name: 'Nicolás Nakasone', profile_image: '' },
    categories: [mockCategory.HTML, mockCategory.CSS, mockCategory.JAVASCRIPT],
    levels: [UserLevel.BASIC, UserLevel.INTERMEDIATE, UserLevel.ADVANCED],
    questions: mockQuestionList,
    average_score: 2.49,
    total_votes: 40,
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
