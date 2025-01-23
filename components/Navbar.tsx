import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { auth } from '@/app/api/auth/auth'
import Image from 'next/image'
import Logout from './Logout'
import { ModeToggle } from './ModeToggle'

const Navbar = async () => {
  const session = await auth()

  return (
    <div className='max-w-7xl mx-auto h-12  px-4  w-full z-10 bg-secondary'>
      <nav className='h-full flex items-center justify-between container mx-auto px-4'>
        <Link
          aria-label='Strona główna'
          href='/'
          className='relative flex items-center gap-2'
        >
          <Image
            src='/images/logo.png'
            alt='logo'
            width={60}
            height={60}
          />
          <h1 className='text-2xl font-bold '>Nieruchomości</h1>
        </Link>
        <ul className='flex items-center gap-4 max-lg:hidden text-lg'>
          <Link
            aria-label='Kontakt'
            className='hover:border-b-2 hover:border-primary focus:border-b-2 focus:border-primary'
            href='/contact'
          >
            Kontakt
          </Link>
          <Link
            aria-label='O nas'
            className='hover:border-b-2 hover:border-primary focus:border-b-2 focus:border-primary'
            href='/about'
          >
            O nas
          </Link>
          <Link
            aria-label='Oferta'
            className='hover:border-b-2 hover:border-primary focus:border-b-2 focus:border-primary'
            href='/offer'
          >
            Oferta
          </Link>

          <Logout session={session} />
          <ModeToggle/>
        </ul>
        <div className=' lg:hidden'>
          <MobileNav />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
