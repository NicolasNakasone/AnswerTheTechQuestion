type RouteKeys = 'home' | 'trivia'

type Route = {
  [route in RouteKeys]: string
}

export const routes: Route = {
  home: '/',
  trivia: '/trivia',
}
