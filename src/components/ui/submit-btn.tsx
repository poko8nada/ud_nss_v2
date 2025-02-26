import { useFormStatus } from 'react-dom'

export const SubmitBtn = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
      disabled={pending}
    >
      {pending ? 'Loading...' : 'Search'}
    </button>
  )
}
