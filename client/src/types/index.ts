export interface Answer {
  option: string
  option_id: string
  is_correct: boolean
}

export interface Question {
  question: string
  question_id: string
  answers: Answer[]
  correct_id: string
}

export interface Trivia {
  id: string
  created_at: string
  updated_at: string
  title: string
  description: string | null
  user_id: string
  categories: Category[]
  levels: UserLevel[]
  questions: Question[]
  total_votes: number
}

export enum Category {
  HTML = 'HTML',
  CSS = 'CSS',
  JAVASCRIPT = 'JAVASCRIPT',
  TYPESCRIPT = 'TYPESCRIPT',
  REACT = 'REACT',
  NEXTJS = 'NEXTJS',
  ANGULAR = 'ANGULAR',
  VUE = 'VUE',
  NODEJS = 'NODEJS',
  EXPRESS = 'EXPRESS',
  MONGODB = 'MONGODB',
  SQL = 'SQL',
  GIT = 'GIT',
  SASS = 'SASS',
  LESS = 'LESS',
  REDUX = 'REDUX',
  GRAPHQL = 'GRAPHQL',
  WEBPACK = 'WEBPACK',
  JEST = 'JEST',
  CYPRESS = 'CYPRESS',
}

export enum UserLevel {
  BASIC = 'BASIC',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
}
