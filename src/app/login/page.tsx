import { AuthForm } from '@/components/auth-form'
export default function Page() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='space-y-8'>
        <h1 className='text-2xl text-center'>welcome back</h1>
        <AuthForm />

        <p className='text-center text-muted-foreground text-xs'>
          アカウントをお持ちでない場合は、
          <a href='/register' className='underline'>
            こちら
          </a>
          から作成できます。
        </p>
      </div>
    </div>
  )
}
