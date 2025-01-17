import type { navItem } from '@/types/navItem'
import Link from 'next/link'

export default ({
  items,
  menuOpen,
}: {
  items: navItem[]
  menuOpen: {
    opacity: number
    transform: string
    height: string
  }
}) => {
  return (
    <div
      className={
        'fixed top-16 left-0 z-50 w-full bg-slate-50 shadow-lg transition-all'
      }
      style={menuOpen}
    >
      <nav className='flex space-x-2 text-sm p-4'>
        {items.map(item => (
          <Link
            href={item.href}
            key={item.href}
            className='hover:text-foreground/70'
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}
