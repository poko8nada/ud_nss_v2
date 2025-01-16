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
  const [menuOpen, setMenuOpen] = useState({
    opacity: 0,
    transform: 'translateY(-10px)',
  })
  const handleClick = () => {
    if (menuOpen.opacity === 0) {
      setMenuOpen({
        opacity: 1,
        transform: 'translateY(0px)',
      })
    } else {
      setMenuOpen({ opacity: 0, transform: 'translateY(-10px)' })
    }
  }
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
      <button type='button' onClick={() => handleClick()} className='md:hidden'>
        menu
      </button>
      {menuOpen && <MobileNav items={navItems} menuOpen={menuOpen} />}
    </div>
  )
}
