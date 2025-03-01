import { AuthForm } from '@/components/auth-form'
import { cn } from '@/lib/utils'
import Link from 'next/link'
export default function Page() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1rounded-lg shadow-lg rounded-lg'>
      <div className='bg-slate-100 md:rounded-s-lg rounded-t-lg flex flex-col items-center justify-center p-16 max-w-[400px] bottom-clip md:light-clip'>
        <h1 className='text-2xl text-center'>welcome</h1>
        <p className='text-muted-foreground px-8 text-center text-xs break-all'>
          buraburaburaburaburaburaburaburaburaburaburaburaburaburaburabura
        </p>
      </div>
      <div className='space-y-8 px-8 py-16 max-w-[400px]'>
        <AuthForm type={'Sign Up'} />
        <p className='text-muted-foreground px-8 text-center text-xs'>
          続けてクリックすれば私たちの
          <Link href={'/terms_and_privacy'} className='underline'>
            利用規約とプライバシーポリシー
          </Link>
          に同意したことになります。
        </p>
      </div>
    </div>
  )
}
