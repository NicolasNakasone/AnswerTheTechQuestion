import { Badge, Box } from '@chakra-ui/react'
import { Category } from 'src/types'

interface IListCategories {
  categories: Category[]
}

export const ListCategories = ({ categories }: IListCategories): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {categories.map(category => {
        return (
          <Badge key={category.id} background={category.bg_color} textColor={category.text_color}>
            {category.label}
          </Badge>
        )
      })}
    </Box>
  )
}
