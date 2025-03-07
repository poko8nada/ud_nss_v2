import { LoginBtn } from '@/components/login-btn'
import { Icons } from '@/components/ui/icons'
import { signInWithGithub } from '@/lib/supabase/github-auth'
import Form from 'next/form'

export const AuthForm = () => {
  // const handleGithubLogin = async () => {
  //   await signInWithGithub()
  // }
  return (
    <div className='grid gap-6'>
      <Form action={signInWithGithub}>
        <div className='grid gap-6'>
          <LoginBtn icon={<Icons.github />} name='w/ Github' />
        </div>
      </Form>
    </div>
  )
}
