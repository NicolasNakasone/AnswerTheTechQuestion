type RouteKeys = 'home' | 'trivia' | 'featuredTrivia'

type Route = {
  [route in RouteKeys]: string
}

export const routes: Route = {
  home: '/',
  featuredTrivia: '/trivias',
  // Puede que esta pagina se quite, ya que fue mas un TOC que una pagina
  trivia: '/trivia',
}
