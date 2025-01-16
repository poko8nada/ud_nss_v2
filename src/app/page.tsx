import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=''>
      <main>
        <section className='pt-6 flex justify-center'>
          <div className='container text-center flex flex-col items-center gap-3'>
            <Link href='/' className='bg-gray-200 py-3 px-6 rounded-lg'>
              follow X
            </Link>
            <h1 className='text-xl font-bold'>next-shadcn-supabase</h1>
            <p className='text-sm text-gray-500'>
              next-shadcn-supabase burabura burabura burabura
            </p>
            <div className='space-x-4'>
              <Link
                href='/'
                target='_blank'
                rel='noreferrer'
                className={cn(buttonVariants({ size: 'lg' }), 'text-md')}
              >
                start
              </Link>
              <Link
                href='/'
                target='_blank'
                rel='noreferrer'
                className={cn(
                  buttonVariants({ size: 'lg', variant: 'outline' }),
                  'text-md',
                )}
              >
                github
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
