import { getInfo } from '@/lib/notion'
import { cn } from '@/lib/utils'

const infoItem = async () => {
  const info = await getInfo()

  return (
    <>
      <div className='flex justify-center px-2'>
        <table className='max-w-[50rem] w-full text-sm text-left rtl:text-right text-gray-900'>
          <tbody>
            {info.map(item => (
              <tr
                key={item.id}
                className='bg-white hover:bg-gray-50 border-y border-slate-200 md:table-row flex flex-col'
              >
                <th
                  scope='row'
                  className='md:pl-6 pl-3 md:py-6 pt-4 pb-3 text-muted-foreground font-medium whitespace-nowrap '
                >
                  {item.date}
                  <span
                    className={cn('px-3 py-1 text-xs rounded-sm ml-3 md:ml-6', {
                      'bg-blue-100 text-blue-800': item.catColor === 'blue',
                    })}
                  >
                    {item.category}
                  </span>
                </th>
                <td className='md:pr-6 md:py-6 px-3 pb-4 break-all'>
                  {item.link ? (
                    <a
                      href={item.link}
                      className='font-medium text-blue-600 hover:underline'
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default infoItem
