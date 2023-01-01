import { StrictMode } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { render } from 'react-dom'
import { App } from 'src/App'
import 'src/index.css'

render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
)
