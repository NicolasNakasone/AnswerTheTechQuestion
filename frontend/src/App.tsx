import { useState } from 'react'

import { Dialog } from 'src/components/common/Dialog'

export const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="App">
      <h1>Find The Tech Question</h1>
      <Dialog {...{ open }}>
        <p>hola</p>
        <button onClick={() => setOpen(false)}>x</button>
      </Dialog>

      <button onClick={() => setOpen(!open)}>
        {!open ? 'abrir' : 'cerrar'}
      </button>
    </div>
  )
}
