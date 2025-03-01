import { AuthForm } from '@/components/auth-form'
import Link from 'next/link'
export default function Page() {
  return (
    <div className='space-y-8 max-w-[360px]'>
      <h1 className='text-2xl text-center'>welcome</h1>
      <AuthForm type={'Sign Up'} />

      <p className='text-muted-foreground px-8 text-center text-xs'>
        続けてクリックすれば私たちの
        <Link href={'/terms_and_privacy'} className='underline'>
          利用規約とプライバシーポリシー
        </Link>
        に同意したことになります。
      </p>
    </div>
  )
}
