import { AuthForm } from '@/components/auth-form'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='space-y-8 max-w-[360px]'>
      <h1 className='text-2xl text-center'>welcome back</h1>
      <AuthForm type={'Log In'} />

      <p className='text-center text-muted-foreground text-xs'>
        アカウントをお持ちでない場合は、
        <Link href='/register' className='underline'>
          こちら
        </Link>
        から作成できます。
      </p>
    </div>
  )
}
