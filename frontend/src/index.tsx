import { StrictMode } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import { App } from 'src/App'
import 'src/index.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
)
