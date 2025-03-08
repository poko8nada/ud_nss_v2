import { AuthForm } from '@/components/auth-form'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='space-y-8 p-3 max-w-[360px]'>
      <h1 className='text-2xl text-center'>welcome</h1>
      <AuthForm />
      <p className='text-muted-foreground px-8 text-center text-xs'>
        初めてログインされる方は、クリックすれば私たちの
        <Link href={'/terms_and_privacy'} className='underline'>
          利用規約とプライバシーポリシー
        </Link>
        に同意したことになります。
      </p>
    </div>
  )
}
