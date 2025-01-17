import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=''>
      <main>
        <section className='my-8 flex justify-center pt-6 md:my-12'>
          <div className='container flex flex-col items-center gap-6 text-center'>
            <Link
              href='/'
              className={cn(
                buttonVariants({ size: 'lg', variant: 'secondary' }),
                'text-md',
              )}
            >
              follow X
            </Link>
            <h1 className='font-bold text-3xl'>next-shadcn-supabase</h1>
            <p className='text-gray-500 text-sm'>
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
        <section className='flex justify-center bg-slate-50 py-8 pt-6 md:py-12'>
          <div className='container space-y-6'>
            <div className='space-y-6'>
              <h2 className='text-center font-bold text-3xl'>feature</h2>
              <p className='mx-auto max-w-96 text-center text-muted-foreground'>
                this is super feature buraburabura buraburabura buraburabura
                buraburabura buraburabura
              </p>
            </div>
            <div className='grid grid-cols-2 gap-4 space-y-6 md:grid-cols-3'>
              <div className='flex flex-col items-center gap-1 rounded-md border bg-background p-4'>
                <Image
                  src='/images/next.svg'
                  alt='Next.js Logo'
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className='text-center'>Next.js</h3>
                  <p className='text-center text-muted-foreground text-sm'>
                    App routerを使ったプロジェクト
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
