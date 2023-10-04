type RouteKeys = 'home' | 'trivia' | 'featuredTrivia'

type Route = {
  [route in RouteKeys]: string
}

export const routes: Route = {
  home: '/',
  featuredTrivia: '/trivias',
  trivia: '/trivia',
}
