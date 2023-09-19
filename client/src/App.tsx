import { Route, Routes } from 'react-router-dom'
import { routes } from 'src/constants/routes'
import { Home, Trivia } from 'src/pages'
import { GameProvider } from 'src/providers'

export const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route
        path={routes.trivia}
        element={
          <GameProvider>
            <Trivia />
          </GameProvider>
        }
      />
    </Routes>
  )
}
