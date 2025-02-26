import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const AuthForm = () => {
  return (
    <div className='grid gap-6'>
      <form>
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
      </form>
      <form>
        <div className='grid gap-6'>
          <div className='relative flex items-center justify-center'>
            <hr className='absolute w-full inset-0' />
            <span className='absolute bg-background px-4 text-muted-foreground'>
              or
            </span>
          </div>
          <Button variant='outline'>
            <Icons.github />
            login with Github
          </Button>
        </div>
      </form>
    </div>
  )
}
