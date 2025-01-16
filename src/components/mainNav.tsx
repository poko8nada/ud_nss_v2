'use client'
import type { navItem } from '@/types/navItem'
import Link from 'next/link'
import { useState } from 'react'
import MobileNav from './mobileNav'

const navItems: navItem[] = [
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Feature',
    href: '/feature',
  },
  {
    title: 'About',
    href: '/about',
  },
]
export default () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='flex items-center md:gap-10'>
      <Link href='/' className='hidden md:inline-block'>
        <span className='text-xl font-bold'>Title</span>
      </Link>
      <nav className='md:flex space-x-2 text-sm hidden'>
        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className='hover:text-foreground/70'
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <button
        type='button'
        onClick={() => setMenuOpen(!menuOpen)}
        className='md:hidden'
      >
        menu
      </button>
      {menuOpen && <MobileNav items={navItems} />}
    </div>
  )
}
