import { Category, CategoryLabel } from 'src/types'
import { v4 as uuidv4 } from 'uuid'

type MockCategories = {
  [label in CategoryLabel]: Category
}

export const mockCategory: MockCategories = {
  HTML: { id: uuidv4(), label: CategoryLabel.HTML, bg_color: '#E44D26', text_color: '#FFFFFB' },
  CSS: { id: uuidv4(), label: CategoryLabel.CSS, bg_color: '#264DE4', text_color: '#FFFFFB' },
  JAVASCRIPT: {
    id: uuidv4(),
    label: CategoryLabel.JAVASCRIPT,
    bg_color: '#F0DB4F',
    text_color: '#1A202C',
  },
  TYPESCRIPT: {
    id: uuidv4(),
    label: CategoryLabel.TYPESCRIPT,
    bg_color: '#3178C6',
    text_color: '#FFFFFB',
  },
  REACT: { id: uuidv4(), label: CategoryLabel.REACT, bg_color: '#61DAFB', text_color: '#1A202C' },
  NEXTJS: { id: uuidv4(), label: CategoryLabel.NEXTJS, bg_color: '#000000', text_color: '#FFFFFB' },
  ANGULAR: {
    id: uuidv4(),
    label: CategoryLabel.ANGULAR,
    bg_color: '#B52E31',
    text_color: '#FFFFFB',
  },
  VUE: { id: uuidv4(), label: CategoryLabel.VUE, bg_color: '#4FC08D', text_color: '#1A202C' },
  NODEJS: { id: uuidv4(), label: CategoryLabel.NODEJS, bg_color: '#339933', text_color: '#FFFFFB' },
  EXPRESS: {
    id: uuidv4(),
    label: CategoryLabel.EXPRESS,
    bg_color: '#000000',
    text_color: '#FFFFFB',
  },
  MONGODB: {
    id: uuidv4(),
    label: CategoryLabel.MONGODB,
    bg_color: '#47A248',
    text_color: '#FFFFFB',
  },
  SQL: { id: uuidv4(), label: CategoryLabel.SQL, bg_color: '#007ACC', text_color: '#FFFFFB' },
  GIT: { id: uuidv4(), label: CategoryLabel.GIT, bg_color: '#F05032', text_color: '#FFFFFB' },
  SASS: { id: uuidv4(), label: CategoryLabel.SASS, bg_color: '#CC6699', text_color: '#1A202C' },
  LESS: { id: uuidv4(), label: CategoryLabel.LESS, bg_color: '#1D365D', text_color: '#FFFFFB' },
  REDUX: { id: uuidv4(), label: CategoryLabel.REDUX, bg_color: '#764ABC', text_color: '#FFFFFB' },
  GRAPHQL: {
    id: uuidv4(),
    label: CategoryLabel.GRAPHQL,
    bg_color: '#E10098',
    text_color: '#FFFFFB',
  },
  WEBPACK: {
    id: uuidv4(),
    label: CategoryLabel.WEBPACK,
    bg_color: '#8DD6F9',
    text_color: '#1A202C',
  },
  JEST: { id: uuidv4(), label: CategoryLabel.JEST, bg_color: '#C21325', text_color: '#FFFFFB' },
  CYPRESS: {
    id: uuidv4(),
    label: CategoryLabel.CYPRESS,
    bg_color: '#17202C',
    text_color: '#FFFFFB',
  },
}
