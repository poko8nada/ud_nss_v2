import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import MainNav from '@/components/main-nav'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const notoSans = Noto_Sans_JP({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'next-shadcn-supabase',
  description: 'next-shadcn-supabase',
  viewport: 'width=device-width, initial-scale=1',
  // icons: {
  //   icon: '/favicon.ico',
  // },
  // openGraph: {
  //   title: 'next-shadcn-supabase',
  //   description: 'next-shadcn-supabase',
  //   url: 'https://next-shadcn-supabase.vercel.app',
  //   siteName: 'next-shadcn-supabase',
  //   images: [
  //     {
  //       url: 'https://next-shadcn-supabase.vercel.app/og.png',
  //       width: 800,
  //       height: 600,
  //     },
  //   ],
  //   locale: 'ja_JP',
  //   type: 'website',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'next-shadcn-supabase',
  //   description: 'next-shadcn-supabase',
  //   creator: '@biomejs',
  //   }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          notoSans.variable,
        )}
      >
        <header className='h-20 p-6'>
          <nav className='flex items-center justify-between'>
            <MainNav />
            <Link
              href='/login'
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'sm' }),
              )}
            >
              ログイン
            </Link>
          </nav>
        </header>
        {children}
        <footer className='my-12 flex items-center justify-center p-4'>
          <p className='text-muted-foreground text-sm'>
            &copy; {`${new Date().getFullYear()} next-shadcn-supabase`}
          </p>
        </footer>
      </body>
    </html>
  )
}
