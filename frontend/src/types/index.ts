export interface IAnswer {
  option: string
  optionID: string
  isCorrect: boolean
}

export interface IQuestion {
  question: string
  questionID: string
  answers: IAnswer[]
  correctID: string
}
