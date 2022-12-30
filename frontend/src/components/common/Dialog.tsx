import { useEffect } from 'react'

import { createPortal } from 'react-dom'

const DIALOG_ROOT_ID = 'dialog-root'

interface INewDialog {
  children?: JSX.Element | JSX.Element[]
  open: boolean
}

export const Dialog = ({ children, open }: INewDialog) => {
  const DialogRoot = document.createElement('div')
  if (!document.getElementById(DIALOG_ROOT_ID)) {
    DialogRoot.setAttribute('id', DIALOG_ROOT_ID)
    DialogRoot.style.position = 'fixed'
    DialogRoot.style.top = '0'
    DialogRoot.style.width = '100%'
    DialogRoot.style.height = '100%'
    DialogRoot.style.display = 'flex'
    DialogRoot.style.justifyContent = 'center'
    DialogRoot.style.alignItems = 'center'
    DialogRoot.style.backgroundColor = '#00000080'
    document.body.appendChild(DialogRoot)
  }

  useEffect(() => {
    if (!open) {
      document.getElementById(DIALOG_ROOT_ID)?.remove()
    }
  }, [open])

  return createPortal(
    <NewDialog {...{ children, open }} />,
    document.getElementById(DIALOG_ROOT_ID)
  )
}

const NewDialog = ({ children }: INewDialog): JSX.Element => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        width: `30vw`,
        minHeight: `20vh`,
      }}
    >
      {children}
    </div>
  )
}
