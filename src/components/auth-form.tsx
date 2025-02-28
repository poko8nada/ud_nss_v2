import { signIn } from '@/auth'
import { LoginBtn } from '@/components/login-btn'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Form from 'next/form'

export const AuthForm = () => {
  return (
    <div className='grid gap-6'>
      <Form action=''>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            name='email'
            placeholder='email@example.com'
            id='email'
          />
          <Button type='submit'>login</Button>
        </div>
      </Form>
      <Form
        action={async () => {
          'use server'
          await signIn('github', { redirectTo: '/dashboard' })
        }}
      >
        <div className='grid gap-6'>
          <div className='relative flex items-center justify-center'>
            <hr className='absolute w-full inset-0' />
            <span className='absolute bg-background px-4 text-muted-foreground'>
              or
            </span>
          </div>
          <LoginBtn icon={<Icons.github />} name='login w/ Github' />
        </div>
      </Form>
    </div>
  )
}
