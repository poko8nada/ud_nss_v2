'use client'
import type { navItem } from '@/types/navItem'
import Link from 'next/link'
import { useState } from 'react'
import MobileNav from './mobile-nav'

const navItems: navItem[] = [
  {
    title: 'RSS',
    href: '/rss',
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
    height: '0',
  })
  const handleClick = () => {
    if (menuOpen.opacity === 0) {
      setMenuOpen({
        opacity: 1,
        transform: 'translateY(0px)',
        height: 'auto',
      })
      document.body.style.overflow = 'hidden'
    } else {
      setMenuOpen({
        opacity: 0,
        transform: 'translateY(-10px)',
        height: '0',
      })
      document.body.style.overflow = 'auto'
    }
  }
  return (
    <div className='flex items-center md:gap-10'>
      <Link href='/' className='hidden md:inline-block'>
        <span className='font-bold text-xl'>Title</span>
      </Link>
      <nav className='hidden space-x-2 text-sm md:flex'>
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
