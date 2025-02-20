import type { items } from '@/lib/parse'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { useFormStatus } from 'react-dom'

export const FeedModal = ({
  url,
  feedTitle,
  feedDescription,
  items,
  modalOpen,
  isModalReady,
  setModalOpen,
}: {
  url: string
  feedTitle: string
  feedDescription: string
  items: items[]
  modalOpen: boolean
  isModalReady: boolean
  setModalOpen: (open: boolean) => void
}) => {
  const { pending } = useFormStatus()
  return (
    <div
      id='extralarge-modal'
      tabIndex={-1}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)]  max-h-0 transition-transform duration-300 ease-in-out bg-gray-800 bg-opacity-50',
        {
          'max-h-full': isModalReady && modalOpen && !pending,
        },
      )}
      onClick={() => setModalOpen(false)}
      onKeyUp={() => setModalOpen(false)}
    >
      <div
        className={cn(
          'w-[calc(100%-2rem)] max-w-7xl max-h-0 opacity-0 translate-x-10 transition-all duration-300 ease-out mx-auto mt-6',
          {
            'translate-x-0 max-h-full opacity-100':
              isModalReady && modalOpen && !pending,
          },
        )}
      >
        <div
          className={cn(
            'bg-white rounded-lg shadow-sm dark:bg-gray-700 hidden',
            {
              block: isModalReady && modalOpen && !pending,
            },
          )}
        >
          <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200'>
            <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
              Extra Large modal
            </h3>
            <button
              type='button'
              className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={() => setModalOpen(false)}
            >
              <svg
                className='w-3 h-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
          </div>
          <div className='p-4 md:p-5 space-y-4'>
            <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
            <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
            <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
          <div className='flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600'>
            <button
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              I accept
            </button>
            <button
              type='button'
              className='py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
