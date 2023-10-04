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
  user: {
    id: string
    full_name: string
    profile_image: string
  }
  categories: Category[]
  levels: UserLevel[]
  questions: Question[]
  average_score: number
  total_votes: number
}

export interface Category {
  id: string
  label: CategoryLabel
  bg_color: string
  text_color: string
}

export enum CategoryLabel {
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
