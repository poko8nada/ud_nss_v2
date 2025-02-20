'use client'
import { useState } from 'react'
import { SubmitBtn } from './ui/submit-btn'
type SearchInputProps = {
  error: string[]
}

export const SearchInput = ({ error }: SearchInputProps) => {
  const [input, setInput] = useState('')

  return (
    <div className='flex justify-center align-middle'>
      <div className='flex gap-2 max-w-lg w-[400px]'>
        <input
          type='text'
          name='url'
          id='url'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='hogehoge.com'
          required
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <SubmitBtn />
      </div>
      {error.length > 0 && (
        <p className='mt-2 ml-2 text-sm text-red-600 dark:text-red-500'>
          <span className='font-medium'>{error[0]}</span>
        </p>
      )}
    </div>
  )
}
