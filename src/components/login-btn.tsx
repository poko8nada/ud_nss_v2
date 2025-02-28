'use client'
import { LoaderCircle } from 'lucide-react'
import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'

export const LoginBtn = ({
  icon,
  name,
}: { icon: React.ReactNode; name: string }) => {
  const { pending } = useFormStatus()
  return (
    <Button variant='outline'>
      {pending ? <LoaderCircle className='animate-spin' /> : icon}
      <span>{name}</span>
    </Button>
  )
}
