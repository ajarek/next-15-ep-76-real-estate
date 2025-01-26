import { LogOut } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

const LogoutBtn = () => {
  return (
    <Link
      className={`${buttonVariants({
        variant: 'default',
      })} w-fit h-7 text-[18px] bg-red-500 hover:bg-red-600 text-white`}
      href={'/signout'}
      aria-label='signout'
    >
      Wyloguj się <LogOut />
    </Link>
  )
}

export default LogoutBtn
