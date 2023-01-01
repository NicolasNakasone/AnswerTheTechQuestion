import { StrictMode } from 'react'

import { render } from 'react-dom'
import { App } from 'src/App'
import 'src/index.css'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
