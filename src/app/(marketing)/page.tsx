import FeatureItem from '@/components/feature-item'
import InfoItem from '@/components/info-item'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
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
              <h2 className='text-center font-bold text-3xl'>info</h2>
            </div>
            <InfoItem />
          </div>
        </section>
        <section className='flex justify-center py-8 pt-6 md:py-12'>
          <div className='container space-y-6'>
            <div className='space-y-6'>
              <h2 className='text-center font-bold text-3xl'>feature</h2>
              <p className='mx-auto max-w-96 text-center text-muted-foreground'>
                this is super feature buraburabura buraburabura buraburabura
                buraburabura buraburabura
              </p>
            </div>
            <FeatureItem />
            <div className='space-y-6'>
              <p className='text-center text-muted-foreground'>
                なんかすごくいい感じになります
              </p>
            </div>
          </div>
        </section>
        <section className='flex justify-center bg-slate-50 py-8 pt-6 md:py-12'>
          <div className='container space-y-6'>
            <div className='space-y-6'>
              <h2 className='text-center font-bold text-3xl'>Contact Us</h2>
              <p className='mx-auto max-w-96 text-center text-muted-foreground'>
                気に入ったら、XまでDMで連絡してください。
                <br />
                連絡お待ちしております。
              </p>
            </div>
            <div className='flex justify-center'>
              <Link href='/' className='hover:underline'>
                ご連絡はこちらまで
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
