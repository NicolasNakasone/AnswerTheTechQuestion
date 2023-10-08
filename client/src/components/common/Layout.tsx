import { Outlet } from 'react-router-dom'
import { Navbar } from 'src/components/common/Navbar'

export const Layout = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
