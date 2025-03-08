import { LoginBtn } from '@/components/login-btn'
import { Icons } from '@/components/ui/icons'
import { signInWithGithub, signOut } from '@/lib/supabase/github-auth'
import Form from 'next/form'

export const AuthForm = () => {
  const handleSignOut = async () => {
    'use server'
    await signOut()
  }
  const handleGithubLogin = async () => {
    'use server'
    await signInWithGithub()
  }
  return (
    <div className='grid gap-6'>
      <Form action={handleGithubLogin}>
        <div className='grid gap-6'>
          <LoginBtn icon={<Icons.github />} name='w/ Github' />
        </div>
      </Form>
      <Form action={handleSignOut}>
        <button type='submit'>ログアウト</button>
      </Form>
    </div>
  )
}
