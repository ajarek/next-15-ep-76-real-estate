import { Menu } from "lucide-react"
import Link from "next/link"
import Logout from './Logout'
import { auth } from '@/app/api/auth/auth'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"

const MobileNav = async () => {
  const session = await auth()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36}  />
      </SheetTrigger>
      <SheetClose asChild>
        <SheetContent
          side='left'
          className='border-none bg-primary   shadow-none lg:hidden '
          aria-describedby='mobile-nav'
        >
          <SheetTitle className='text-xl font-semibold uppercase italic '>
            <Link href='/' aria-label='Stron Główna'>
              Digital Agency
            </Link>
          </SheetTitle>
          <div className=' flex flex-col gap-4 text-xl mt-4 '>
            <Logout session={session} />
            <Link
              aria-label='contact'
              className='w-fit border-b-2 border-b-primary hover:border-b-2 hover:border-secondary focus:border-b-2 focus:border-secondary'
              href='/contact'
            >
              Contact
            </Link>
            <Link
              aria-label='about us'
               className='w-fit border-b-2 border-b-primary hover:border-b-2 hover:border-secondary focus:border-b-2 focus:border-secondary'
              href='/about'
            >
              About us
            </Link>
            <Link
              aria-label='Services'
               className='w-fit border-b-2 border-b-primary hover:border-b-2 hover:border-secondary focus:border-b-2 focus:border-secondary'
              href='/services'
            >
              Services
            </Link>

            <Link
              aria-label='Reviews'
              href='/reviews'
               className='w-fit border-b-2 border-b-primary hover:border-b-2 hover:border-secondary focus:border-b-2 focus:border-secondary'
            >
              Reviews
            </Link>
          </div>
          <SheetDescription></SheetDescription>
        </SheetContent>
      </SheetClose>
    </Sheet>
  )
}

export default MobileNav
