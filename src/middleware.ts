import { auth } from '@/auth'

export default auth(req => {
  const auth = req.auth
  const path = req.nextUrl.pathname

  if (!auth && path !== '/login' && path !== '/register' && path !== '/') {
    const newUrl = new URL('/login', req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})

export const config = {
  matcher: ['/((?!^$|api|_next/static|_next/image|favicon.ico).*)'],
}

export { auth as middleware } from '@/auth'
