import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'

import { cn } from '@/lib/utils'

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
      <body className={cn('bg-background antialiased', notoSans.variable)}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
