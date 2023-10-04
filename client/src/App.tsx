import { Route, Routes } from 'react-router-dom'
import { routes } from 'src/constants/routes'
import { FeaturedTriviaPage, HomePage, TriviaPage } from 'src/pages'
import { GameProvider } from 'src/providers'

export const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.featuredTrivia} element={<FeaturedTriviaPage />} />
      <Route
        path={routes.trivia}
        element={
          <GameProvider>
            <TriviaPage />
          </GameProvider>
        }
      />
    </Routes>
  )
}
