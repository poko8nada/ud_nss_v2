import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    authorized: async ({ request, auth }) => {
      const url = request.nextUrl
      // allow access when visiting root
      if (url.pathname === '/') return true

      return !!auth
    },
  },
  pages: {
    signIn: '/login',
  },
})
