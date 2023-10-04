import { StrictMode } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'src/App'
import { theme } from 'src/styles'
import 'src/index.css'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <ChakraProvider {...{ theme }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
)
