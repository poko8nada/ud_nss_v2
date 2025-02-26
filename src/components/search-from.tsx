'use client'
import { useState } from 'react'
import { SubmitBtn } from './ui/submit-btn'
type SearchInputProps = {
  error: string[]
}

export const SearchForm = ({ error }: SearchInputProps) => {
  const [input, setInput] = useState('')

  return (
    <div className='flex justify-center'>
      <div className='flex gap-2 max-w-[500px] items-start w-full'>
        <div className='w-full'>
          <input
            type='text'
            name='url'
            id='url'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
            placeholder='hogehoge.com'
            required
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          {error.length > 0 && (
            <p className='mt-2 ml-2 text-sm text-red-600 '>
              <span className='font-medium'>{error[0]}</span>
            </p>
          )}
        </div>
        <SubmitBtn />
      </div>
    </div>
  )
}
