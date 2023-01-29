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

/* 
  1- Barajar los indices
  [2, 3, 1, 0]
  2- Usar estos indices para hacer el cambio
  a[2] = a[0] <-> a[0] = a[2]
  3- Luego quitar con .pop() el elemento actual de la lista de indices barajados
  4- Volver al paso 1 hasta terminar con la lista
*/

/* 
  Hacer un diccionario de indices usados para hacer el paso 1, sino no va a funcionar
*/

const shuffleAnswers = (trivia: IQuestion[]): IQuestion[] => {
  const shuffledTrivia: IQuestion[] = [...trivia]

  shuffledTrivia.forEach(({ answers }) => {
    const usedIndexs = {}
    let randomIndex

    for (let i = 0; i < answers.length; i++) {
      randomIndex = Math.floor(Math.random() * answers.length)

      usedIndexs[randomIndex] = randomIndex

      if (i !== 0) {
        while (usedIndexs[randomIndex]) {
          randomIndex = Math.floor(Math.random() * answers.length)
        }
      }

      const auxOption = answers[i]
      answers[i] = answers[randomIndex]
      answers[randomIndex] = auxOption
    }

    // eslint-disable-next-line no-console
    // console.log(usedIndexs)
  })
  // console.table(shuffledTrivia)
  // console.log(shuffledTrivia.map(t => console.table(t.answers)))

  return shuffledTrivia
}

export const shuffledTrivia = shuffleAnswers(mockTrivia)
