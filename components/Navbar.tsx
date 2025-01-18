import Link from "next/link"
import React from "react" 
import MobileNav from "./MobileNav"
import { auth } from '@/app/api/auth/auth'
import Image from "next/image"
import Logout from './Logout'

const Navbar =async () => {
  const session = await auth()
  
  return (
    <div className='max-w-7xl mx-auto h-12  px-4  w-full z-10 bg-secondary'>
      <nav className='h-full flex items-center justify-between container mx-auto px-4'>
        <Link aria-label='Home' href='/' className='flex items-center gap-2'>
          <Image src='/images/logo.png' alt='logo' width={40} height={40} />
          <h1 className='text-2xl font-bold '>Nieruchomości</h1>
        </Link>
        <ul className='flex items-center gap-4 max-lg:hidden text-lg'>
          <Link
            aria-label='contact'
            className='hover:border-b-2 hover:border-primary focus:border-b-2 focus:border-primary'
            href='/contact'
          >
           Kontakt
          </Link>
          <Link
            aria-label='about us'
            className='hover:border-b-2 hover:border-primary focus:border-b-2 focus:border-primary'
            href='/about'
          >
           O nas
          </Link>
          <Link
            aria-label='Services'
            className='hover:border-b-2 hover:border-primary focus:border-b-2 focus:border-primary'
            href='/services'
          >
         Oferta
          </Link>

          
          <Logout session={session} />
        </ul>
        <div className=' lg:hidden'>
          <MobileNav />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
