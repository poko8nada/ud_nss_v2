import type { items } from '@/lib/parse'
import { cn } from '@/lib/utils'
import { useFormStatus } from 'react-dom'

export const FeedModal = ({
  url,
  feedTitle,
  feedDescription,
  items,
  favicon,
  modalOpen,
  isModalReady,
  setModalOpen,
}: {
  url: string
  feedTitle: string
  feedDescription: string
  items: items[]
  favicon: string
  modalOpen: boolean
  isModalReady: boolean
  setModalOpen: (open: boolean) => void
}) => {
  const { pending } = useFormStatus()
  return (
    <div
      tabIndex={-1}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-0 transition-transform duration-300 ease-in-out bg-gray-800 bg-opacity-50',
        {
          'max-h-full': isModalReady && modalOpen && !pending,
        },
      )}
      onClick={e => {
        if (e.target === e.currentTarget) {
          setModalOpen(false)
        }
      }}
      onKeyUp={() => setModalOpen(false)}
    >
      <div
        className={cn(
          'w-[calc(100%-2rem)] max-w-2xl max-h-0 opacity-0 translate-x-10 transition-all duration-300 ease-out mx-auto mt-32 mb-10 md:mt-40',
          {
            'translate-x-0 max-h-full opacity-100':
              isModalReady && modalOpen && !pending,
          },
        )}
      >
        <div
          className={cn('bg-white rounded-lg shadow-sm hidden', {
            block: isModalReady && modalOpen && !pending,
          })}
        >
          <div className='p-4 md:p-5 border-b rounded-t border-gray-200'>
            <div className='flex items-start justify-between gap-2'>
              <div className='flex gap-2 items-center'>
                {favicon !== '' && (
                  <img
                    src={favicon}
                    width={48}
                    height={48}
                    className='aspect-auto shrink-0'
                    alt='favicon'
                  />
                )}
                <div>
                  <h3 className='text-md font-medium text-gray-900 line-clamp-1'>
                    {feedTitle}
                  </h3>
                  {feedDescription !== '' && (
                    <p className='text-muted-foreground text-xs mt-1 line-clamp-1'>
                      {feedDescription}
                    </p>
                  )}
                </div>
              </div>
              <button
                type='button'
                className='shrink-0 marker:text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-7 h-7 ms-auto inline-flex justify-center items-center '
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
          </div>
          <div className='md:pl-16 md:pr-10 pl-10 py-6 pr-6 flex justify-center'>
            <ul className='list-disc list-outside space-y-5'>
              {items.map(item => (
                <li className='text-gray-600 text-sm' key={item.title}>
                  <h4 className='line-clamp-2'>{item.title}</h4>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex items-center justify-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b '>
            <button
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
            >
              follow
            </button>
            <button
              type='button'
              className='py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 '
              onClick={e => {
                if (e.target === e.currentTarget) {
                  setModalOpen(false)
                }
              }}
              onKeyUp={() => setModalOpen(false)}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
