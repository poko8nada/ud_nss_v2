import type { navItem } from '@/types/navItem'
import Link from 'next/link'

interface MobileNavProps {
  items: navItem[]
}

export default ({ items }: MobileNavProps) => {
  return (
    <div className='fixed top-16 left-0 z-50 w-full bg-slate-50 shadow-lg p-6 animate-in slide-in-from-left duration-300'>
      <nav className='flex space-x-2 text-sm'>
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
