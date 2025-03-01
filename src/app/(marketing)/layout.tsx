import MainNav from '@/components/main-nav'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <header className='h-20 p-6'>
        <nav className='flex items-center justify-between'>
          <MainNav />
          <Link
            href='/login'
            className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }))}
          >
            ログイン
          </Link>
        </nav>
      </header>
      {children}
    </>
  )
}
