import type { Session } from 'next-auth'
import Link from 'next/link'
import LogoutBtn from '@/components/LogoutBtn'
import { buttonVariants } from '@/components/ui/button'
import { KeyRound } from 'lucide-react'

const Logout = async ({ session }: { session: Session | null }) => {
  return (
    <>
      {session ? (
        <LogoutBtn />
      ) : (
        <Link
          className={`${buttonVariants({variant: 'default',})} w-fit h-7 text-[18px] bg-[#22c55e] hover:bg-[#4ae482] text-white hover:text-black` }
          href={'/login'}
          aria-label='Login'
        >
          Zaloguj się <KeyRound />
        </Link>
      )}
      {session && (
        <span className='px-4 max-lg:hidden'>{session.user?.email}</span>
      )}
    </>
  )
}

export default Logout
