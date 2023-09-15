import { Route, Routes } from 'react-router-dom'
import { routes } from 'src/constants/routes'
import { Home, Trivia } from 'src/pages'

export const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.trivia} element={<Trivia />} />
    </Routes>
  )
}
