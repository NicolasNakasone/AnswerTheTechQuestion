import { Badge, Box } from '@chakra-ui/react'
import { Category } from 'src/types'

interface IListCategories {
  categories: Category[]
}

export const ListCategories = ({ categories }: IListCategories): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      {categories.map(category => {
        return (
          <Badge
            key={category.id}
            background={category.bg_color}
            textColor={category.text_color}
            sx={{
              padding: '4px 16px',
              fontSize: '12px',
              textTransform: 'none',
            }}
          >
            {category.label}
          </Badge>
        )
      })}
    </Box>
  )
}
