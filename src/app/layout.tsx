import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import MainNav from '@/components/mainNav'
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
      </body>
    </html>
  )
}
